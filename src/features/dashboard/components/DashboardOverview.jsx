import { Card } from "@/components/ui";

export function DashboardOverview({ stats = [] }) {
  return (
    <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((item) => (
        <Card key={item.id} title={item.label} description={item.caption}>
          <p className="text-3xl font-bold text-slate-900">{item.value}</p>
        </Card>
      ))}
    </section>
  );
}
