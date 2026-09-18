type DashboardPanelProps = {
  title: string;
  children: React.ReactNode;
};

export default function DashboardPanel({
  title,
  children,
}: DashboardPanelProps) {
  return (
    <section className="dashboard-panel">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}