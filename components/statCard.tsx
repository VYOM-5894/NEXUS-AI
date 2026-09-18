type StatCardProps = {
  title: string;
  value: string | number;
  unit?: string;
};


export default function StatCard({
  title,
  value,
  unit,
}: StatCardProps) {
  return (
    <div
      style={{
        background: "#111827",
        border: "1px solid #333",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
      }}
    >
      <h3>{title}</h3>
      <p>{value}</p>
      {unit && <small>{unit}</small>}
    </div>
  );
}