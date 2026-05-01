import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-light px-4 pt-16 lg:pt-20">
      <h1 className="text-6xl font-bold text-primary">
        {siteConfig.ui.notFound.code}
      </h1>
      <p className="mt-4 text-xl text-dark/70">
        {siteConfig.ui.notFound.title}
      </p>
      <p className="mt-2 text-dark/50">
        {siteConfig.ui.notFound.description}
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-hover"
      >
        {siteConfig.ui.notFound.backLabel}
      </Link>
    </div>
  );
}
