interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: 'start' | 'between';
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  alignment = 'between',
}: SectionHeaderProps): JSX.Element {
  const layoutClass = alignment === 'start' ? 'items-start' : 'md:items-end md:justify-between';
  return (
    <div className={`section-heading ${layoutClass}`}>
      <div>
        {eyebrow ? <p className="text-sm text-slate-300">{eyebrow}</p> : null}
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      {description ? <p className="text-slate-300">{description}</p> : null}
    </div>
  );
}
