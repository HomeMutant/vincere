type BottleProps = { accent?: string; small?: boolean };

export default function Bottle({ accent = 'plum', small = false }: BottleProps) {
  return (
    <div className={`bottle bottle-${accent} ${small ? 'bottle-small' : ''}`} aria-hidden="true">
      <div className="bottle-cap" />
      <div className="bottle-neck" />
      <div className="bottle-glass">
        <span className="bottle-light" />
        <span className="bottle-mark">V</span>
        <span className="bottle-label">VINCERE</span>
        <span className="bottle-line" />
        <span className="bottle-sub">EAU DE PARFUM</span>
      </div>
      <span className="bottle-shadow" />
    </div>
  );
}
