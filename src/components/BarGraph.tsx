export default function BarGraph({ teams }: any) {
  const max = Math.max(...teams.map((t: any) => t.score), 1);

  return (
    <div className="barGraph">
      {teams.map((t: any, i: number) => (
        <div key={i} className="barRow">
          <span className="teamName">{t.name}</span>

          <div className="barContainer">
            <div
              className="barFill"
              style={{
                width: `${(t.score / max) * 100}%`,
              }}
            >
              {t.score}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}