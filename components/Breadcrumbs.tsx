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
    <div className="mb-8 text-xs font-bold text-blue-500 uppercase transition-opacity duration-75 opacity-50 breadcrumbs hover:opacity-100">
      /
      {items.map((item, index) => (
        <span key={index} className="ml-1">
          <Link
            href={item.href}
            className="transition-all border-b-2 border-transparent  hover:border-blue-500"
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
