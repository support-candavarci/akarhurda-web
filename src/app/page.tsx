import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { pages } from "@/data/pages";
import { siteConfig } from "@/data/site";
import { contact } from "@/data/contact";
import { services, servicesSection } from "@/data/services";

export const metadata = createMetadata({
  title: pages.home.title,
  description: pages.home.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* Hero Section — Sprint 4'te zenginleştirilecek */}
      <section className="relative flex min-h-[80vh] items-center bg-primary-dark md:min-h-screen">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-95" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-24 md:px-8 md:pt-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent backdrop-blur-md md:mb-6 md:text-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              {siteConfig.slogan}
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-white md:mb-6 md:text-7xl">
              {pages.home.heroTitle}
              <br />
              <span className="text-accent">Akar Hurda</span>
            </h1>
            <p className="mb-7 max-w-2xl text-base font-light leading-relaxed text-gray-300 md:mb-8 md:text-xl">
              {pages.home.heroSubtitle}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href={contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-accent-hover sm:px-8 sm:py-4 sm:text-base"
              >
                {contact.labels.callNow}: {contact.phone}
              </Link>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 sm:px-8 sm:py-4 sm:text-base"
              >
                WhatsApp ile Yaz
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview — Sprint 4'te detay landing'lere bağlanacak */}
      <section className="bg-light py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 text-center md:mb-16">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">
              {servicesSection.sectionLabel}
            </span>
            <h2 className="mb-4 text-3xl font-bold text-primary-dark md:text-5xl">
              {servicesSection.title}
            </h2>
            <p className="mx-auto max-w-2xl text-base text-secondary md:text-lg">
              {servicesSection.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((service) => (
              <div
                key={service.id}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-accent hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-bold text-primary-dark group-hover:text-accent">
                  {service.title}
                </h3>
                <p className="text-sm text-secondary">{service.shortDescription}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href={servicesSection.cta.buttonHref}
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-bold text-white transition-all hover:bg-accent-hover"
            >
              {servicesSection.cta.buttonLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {servicesSection.cta.title}
          </h2>
          <p className="mb-8 text-base text-gray-300 md:text-lg">
            {servicesSection.cta.subtitle}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href={contact.phoneHref}
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-bold text-white transition-all hover:bg-accent-hover"
            >
              {contact.phone}
            </Link>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-whatsapp px-8 py-4 text-base font-bold text-white transition-all hover:bg-whatsapp-hover"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
