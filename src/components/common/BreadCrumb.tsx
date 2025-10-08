import React from "react";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  title: string; 
  items: Crumb[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, items }) => {
  return (
    <section className="section section--head">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-6">
            <h1 className="section__title section__title--head">{title}</h1>
          </div>

          <div className="col-12 col-xl-6">
            <ul className="breadcrumb">
              {items.map((item, idx) => (
                <li
                  key={idx}
                  className={`breadcrumb__item ${
                    !item.href ? "breadcrumb__item--active" : ""
                  }`}
                >
                  {item.href ? <a href={item.href}>{item.label}</a> : item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
