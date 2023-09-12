import Link from "next/link";

interface BreadcrumbItem {
  title: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="breadcrumbs mb-4 text-xs font-bold uppercase text-blue-500 opacity-50 transition-opacity duration-75 hover:opacity-100">
      /
      {items.map((item, index) => (
        <span key={index} className="ml-1">
          <Link
            href={item.href}
            className=" border-b-2 border-transparent transition-all hover:border-blue-500"
          >
            {item.title}
          </Link>
          {index < items.length - 1 && <span className="mx-1">/</span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
