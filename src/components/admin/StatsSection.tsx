// src/components/admin/StatsSection.tsx
import StatsCard from './StatsCard';

const stats = [
  { title: "Unique views this month", value: "5 678", icon: "eye" },
  { title: "Items added this month", value: "172", icon: "grid" },
  { title: "New comments", value: "2 573", icon: "comment" },
  { title: "New reviews", value: "1 021", icon: "star" },
];

export default function StatsSection() {
  return (
    <>
      {stats.map((stat, i) => (
        <div key={i} className="col-12 col-sm-6 col-xl-3">
          <StatsCard {...stat} />
        </div>
      ))}
    </>
  );
}