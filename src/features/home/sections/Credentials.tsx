import { gsap } from "gsap";
import { useEffect, useRef } from "react";

interface CredentialsProps {
  activeCredential: number;
  setActiveCredential: (index: number) => void;
  syncHorizontal: (
    event: React.UIEvent<HTMLDivElement>,
    selector: string,
    setActive?: (index: number) => void
  ) => void;
}

export function Credentials({
  activeCredential,
  setActiveCredential,
  syncHorizontal,
}: CredentialsProps) {
  const credentialItemsRef = useRef<HTMLDivElement>(null);

  // Mobile-only: GSAP accordion behavior
  useEffect(() => {
    let cleanupFunctions: (() => void)[] = [];

    const setupMobileBehavior = () => {
      // Clear previous
      cleanupFunctions.forEach(fn => fn());
      cleanupFunctions = [];

      const isMobile = window.innerWidth <= 900;
      if (!isMobile || !credentialItemsRef.current) return;

      const items = credentialItemsRef.current.querySelectorAll('.credential');

      items.forEach((item, index) => {
        const content = item.querySelector('span') as HTMLElement;
        if (!content) return;

        // Set initial state - first item expanded
        gsap.set(content, {
          height: index === 0 ? 'auto' : 0,
          opacity: index === 0 ? 1 : 0,
          overflow: 'hidden',
        });

        // Add click handler for mobile accordion
        const handleClick = () => {
          const isExpanded = content.offsetHeight > 0;

          // Close all other items
          items.forEach((otherItem) => {
            if (otherItem !== item) {
              const otherContent = otherItem.querySelector('span') as HTMLElement;
              if (otherContent) {
                gsap.to(otherContent, {
                  height: 0,
                  opacity: 0,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }
            }
          });

          // Toggle current item
          gsap.to(content, {
            height: isExpanded ? 0 : 'auto',
            opacity: isExpanded ? 0 : 1,
            duration: 0.3,
            ease: "power2.out",
          });

          // Update progress indicator based on tapped index
          const fill = credentialItemsRef.current?.closest('.credential-strip')?.querySelector('.mobile-scroll-cue i b') as HTMLElement | null;
          if (fill) {
            // Calculate progress: index / (total - 1)
            const progress = index / (items.length - 1);
            gsap.to(fill, {
              scaleX: Math.max(0.08, progress),
              duration: 0.3,
              ease: "power2.out",
            });
          }
        };

        item.addEventListener('click', handleClick);
        cleanupFunctions.push(() => item.removeEventListener('click', handleClick));
      });

      // Make progress bar interactive - drag to expand credentials (setup once, not per-item)
      const progressFill = credentialItemsRef.current?.closest('.credential-strip')?.querySelector('.mobile-scroll-cue i b') as HTMLElement | null;
      if (progressFill) {
        const handleDragStart = (clientX: number) => {
          const handleDragMove = (moveClientX: number) => {
            if (!credentialItemsRef.current) return;
            const strip = credentialItemsRef.current.closest('.credential-strip');
            if (!strip) return;

            const cue = strip.querySelector('.mobile-scroll-cue') as HTMLElement;
            const rect = cue.getBoundingClientRect();
            const relativeX = Math.max(0, Math.min(moveClientX - rect.left, rect.width));
            const progress = relativeX / rect.width;

            // Update progress visual
            gsap.set(progressFill, { scaleX: Math.max(0.08, progress) });

            // Calculate which credential to expand
            const credentialIndex = Math.round(progress * (items.length - 1));
            const targetItem = items[credentialIndex] as HTMLElement;
            const targetContent = targetItem?.querySelector('span') as HTMLElement;

            if (targetContent) {
              // Close all, expand target
              items.forEach((otherItem) => {
                const otherContent = otherItem.querySelector('span') as HTMLElement;
                if (otherContent) {
                  gsap.to(otherContent, {
                    height: otherItem === targetItem ? 'auto' : 0,
                    opacity: otherItem === targetItem ? 1 : 0,
                    duration: 0.2,
                    ease: "power2.out",
                  });
                }
              });
            }
          };

          const handleDragEnd = () => {
            document.removeEventListener('mousemove', handleDragMove);
            document.removeEventListener('mouseup', handleDragEnd);
            document.removeEventListener('touchmove', handleDragMove);
            document.removeEventListener('touchend', handleDragEnd);
          };

          const handleMouseMove = (e: MouseEvent) => handleDragMove(e.clientX);
          const handleTouchMove = (e: TouchEvent) => handleDragMove(e.touches[0].clientX);

          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleDragEnd);
          document.addEventListener('touchmove', handleTouchMove, { passive: true });
          document.addEventListener('touchend', handleDragEnd);
        };

        const handleMouseDown = (e: MouseEvent) => handleDragStart(e.clientX);
        const handleTouchStart = (e: TouchEvent) => handleDragStart(e.touches[0].clientX);

        progressFill.addEventListener('mousedown', handleMouseDown);
        progressFill.addEventListener('touchstart', handleTouchStart, { passive: true });
        cleanupFunctions.push(() => {
          progressFill.removeEventListener('mousedown', handleMouseDown);
          progressFill.removeEventListener('touchstart', handleTouchStart);
        });
      }
    };

    setupMobileBehavior();
    window.addEventListener('resize', setupMobileBehavior);

    return () => {
      window.removeEventListener('resize', setupMobileBehavior);
      cleanupFunctions.forEach(fn => fn());
    };
  }, []);

  return (
    <section className="credential-strip">
      <div
        className="credential-inner container"
        ref={credentialItemsRef}
        onScroll={event =>
          syncHorizontal(event, ".mobile-scroll-cue i b", setActiveCredential)
        }
      >
        {[
          ["MBBS", "Mymensingh Medical College"],
          ["BCS (Health)", "Bangladesh Health Cadre"],
          ["FCPS", "Postgraduate Medicine"],
          ["MD", "Neurology Specialization"],
          ["BMDC", "Reg. A-61657"],
        ].map(([a, b], i) => (
          <div
            className={
              activeCredential === i ? "credential is-active" : "credential"
            }
            key={a}
          >
            <strong>{a}</strong>
            <span>{b}</span>
          </div>
        ))}
      </div>
      <div className="mobile-scroll-cue container">
        <span>SWIPE TO EXPLORE</span>
        <i>
          <b />
        </i>
        <em>01 — 05</em>
      </div>
    </section>
  );
}
