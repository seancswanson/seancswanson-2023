const techColors = {
  fooScript: "bg-gray-200",
  barScript: "bg-gray-200",
  bazScript: "bg-gray-200",
  react: "bg-blue-500",
  angular: "bg-red-500",
  sanity: "bg-pink-500",
  SSG: "bg-gray-200",
  svelte: "bg-orange-500",
  next: "bg-orange-200",
  typescript: "bg-blue-500",
  tailwindcss: "bg-blue-500",
  sass: "bg-pink-500",
  node: "bg-green-500",
  express: "bg-green-500",
  mongodb: "bg-green-500",
  postgresql: "bg-green-500",
  apollo: "bg-pink-500",
  prisma: "bg-pink-500",
  github: "bg-gray-200",
  git: "bg-gray-200",
};

interface Props {
  techName: string;
}

export const TechPill = ({ techName }: Props) => {
  return (
    <span
      className={`rounded-full ${
        techColors[techName as keyof typeof techColors]
      } p-1 font-mono text-[6px]`}
    >
      {techName}
    </span>
  );
};
