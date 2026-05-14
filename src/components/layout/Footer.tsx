import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { contact } from "@/data/contact";
import { footerGroups, footerAbout, footerLegal } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800 bg-[#111] text-gray-400">
      <div className="h-1 w-full bg-linear-to-r from-accent via-accent/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <div className="mb-5 flex items-center gap-3">
              <Image
                src="/brand/akarhurda-logo-256.png"
                alt={`${siteConfig.name} Logo`}
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
              <span className="text-lg font-extrabold tracking-wide text-white">
                {siteConfig.shortName}
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              {footerAbout.description}
            </p>
            <div className="flex gap-3">
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-all hover:bg-accent/20 hover:text-accent"
              >
                <WhatsAppSmallIcon />
              </a>
              <a
                href={`mailto:${contact.email}`}
                aria-label="E-posta"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-all hover:bg-accent/20 hover:text-accent"
              >
                <EnvelopeIcon />
              </a>
              <a
                href={contact.phoneHref}
                aria-label="Telefon"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-all hover:bg-accent/20 hover:text-accent"
              >
                <PhoneSmallIcon />
              </a>
            </div>
          </div>

          {/* Link Groups */}
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="group/link flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-accent"
                    >
                      <span className="h-px w-0 bg-accent transition-all group-hover/link:w-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
              {contact.labels.contact}
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <LocationIcon />
                </div>
                <span className="text-sm leading-relaxed text-gray-400">
                  {contact.address.full}
                </span>
              </li>
              <li className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <PhoneSmallIcon />
                </div>
                <a
                  href={contact.phoneHref}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <EnvelopeIcon />
                </div>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-gray-800/80 pt-8 text-xs text-gray-400">
          {footerLegal.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 flex flex-col items-center gap-3 pb-16 text-center text-xs text-gray-400 md:flex-row md:justify-between md:pb-0">
          <span>
            &copy; {new Date().getFullYear()} {siteConfig.name}.{" "}
            {siteConfig.ui.copyright}
          </span>
          <a
            href={siteConfig.branding.designerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            {siteConfig.branding.designerLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Icons ---------- */

function WhatsAppSmallIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneSmallIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
