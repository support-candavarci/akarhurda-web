"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { navigation, ctaButton } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { contact } from "@/data/contact";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sub-pages always solid; home only when scrolled
  const isSolid = !isHome || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isSolid
          ? "border-primary-light bg-primary py-3 shadow-lg"
          : "border-transparent bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo — Akar Hurda transparent PNG (Sprint 4 final) */}
          <Link
            href="/"
            className="flex items-center gap-3 text-white"
            aria-label={siteConfig.name}
          >
            <Image
              src="/brand/akarhurda-logo-512.png"
              alt={`${siteConfig.name} Logo`}
              width={56}
              height={56}
              className="h-12 w-12 shrink-0 object-contain md:h-14 md:w-14"
              priority
            />
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="text-base font-extrabold tracking-wide md:text-lg">
                {siteConfig.shortName}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent md:text-[11px]">
                {siteConfig.logoSubtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  pathname === item.href
                    ? "text-accent"
                    : isSolid
                      ? "text-gray-300"
                      : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href={contact.phoneHref}
              className="flex items-center gap-2 text-sm font-medium text-white"
            >
              <PhoneIcon />
              <span>{contact.phone}</span>
            </a>
            <Link
              href={ctaButton.href}
              className="flex items-center gap-2 rounded-md bg-accent px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-hover"
            >
              {ctaButton.label}
              <ArrowIcon />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full border-t border-primary-light bg-primary p-4 shadow-xl md:hidden">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`border-b border-primary-light py-2 ${
                  pathname === item.href ? "text-accent" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href={ctaButton.href}
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 block w-full rounded-md bg-accent py-3 text-center font-bold text-white"
          >
            {ctaButton.label}
          </Link>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
