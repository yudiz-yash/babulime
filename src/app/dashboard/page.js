import { SectionHeading } from "@/components/common";
import { DASHBOARD_STATS, DashboardActions, DashboardOverview } from "@/features/dashboard";

export const metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <main className="section-spacing container">
      <SectionHeading
        eyebrow="Dashboard Feature"
        title="Feature module route example"
        description="This route consumes exports from `features/dashboard` to keep domain logic isolated."
      />
      <div className="mt-8">
        <DashboardOverview stats={DASHBOARD_STATS} />
      </div>
      <div className="mt-6">
        <DashboardActions />
      </div>
    </main>
  );
}
