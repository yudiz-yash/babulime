import { SectionHeading } from "@/components/common";

export const metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
    <main className="section-spacing container">
      <SectionHeading
        eyebrow="Profile Feature"
        title="Profile module placeholder"
        description="Use this route as the integration point for `features/profile` containers and UI."
      />
    </main>
  );
}
