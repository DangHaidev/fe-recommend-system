// components/admin/PageTitle.tsx
interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="col-12">
      <div className="main__title">
        <h2>{title}</h2>
      </div>
    </div>
  );
}