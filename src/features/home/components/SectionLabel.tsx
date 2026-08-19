export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: string;
}) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <i />
      {children}
    </div>
  );
}
