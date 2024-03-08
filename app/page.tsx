import Link from "next/link";

const navigationItems: { href: string; text: string }[] = [
  {
    href: "/product-page",
    text: "1. Interactive Web Page Development",
  },
  {
    href: "/simulation",
    text: "2. Autonomous Robot Simulation",
  },
  {
    href: "/dashboard",
    text: "3. Data Visualization for Dashboard Development",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 md:p-24">
      <div className="">
        <ul>
          {navigationItems.map((item, index) => {
            return (
              <li
                className="hover:text-emerald-500 text-lg p-4"
                key={`${item.href}-${index}`}
              >
                <Link href={item.href}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
