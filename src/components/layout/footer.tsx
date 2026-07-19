"use client";

import * as React from "react";
import { ArrowUpRight, MapPin, Mail, FileText } from "lucide-react";

import { profile } from "@/data/profile";
import { navItems } from "@/data/navigation";
import { education } from "@/data/education";
import { Container } from "@/components/shared/container";
import { scrollToHash } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();
  const degree = education[0];

  const handleAnchor = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    scrollToHash(href);
  };

  return (
    <footer className="border-t border-border bg-surface/40">
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.9fr_1fr_1.1fr]">
          <div className="max-w-md sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => handleAnchor(e, "#home")}
              className="text-lg font-semibold tracking-tight"
              aria-label={`${profile.name} — back to top`}
            >
              {profile.firstName}
              <span className="text-muted-foreground">.dev</span>
            </a>
            <p className="mt-2 text-sm font-medium text-foreground/90">
              {profile.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {profile.headline} Based in {profile.location}, focused on AI, ML,
              data systems and DevOps.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span
                className="size-2 animate-pulse rounded-full bg-emerald-500"
                aria-hidden
              />
              {profile.availability}
            </p>
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-3.5 shrink-0" aria-hidden />
              {profile.location}
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Navigate
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleAnchor(e, item.href)}
                    className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Connect
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {profile.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={
                        social.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      <Icon className="size-3.5 shrink-0 opacity-70" aria-hidden />
                      <span>{social.label}</span>
                      {social.handle ? (
                        <span className="hidden text-muted-foreground sm:inline">
                          {social.handle}
                        </span>
                      ) : null}
                      <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-start gap-2 text-foreground/80 transition-colors hover:text-primary"
                >
                  <Mail className="mt-0.5 size-3.5 shrink-0 opacity-70" aria-hidden />
                  <span className="break-all">{profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-primary"
                >
                  <FileText className="size-3.5 shrink-0 opacity-70" aria-hidden />
                  Download resume
                  <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
              {degree ? (
                <li className="pt-1 text-muted-foreground">
                  <p className="font-medium text-foreground/80">{degree.degree}</p>
                  <p className="mt-1 leading-relaxed">{degree.institution}</p>
                  <p className="mt-1">{degree.period}</p>
                </li>
              ) : null}
              <li className="pt-1">
                <a
                  href="#contact"
                  onClick={(e) => handleAnchor(e, "#contact")}
                  className="text-sm font-medium text-primary transition-opacity hover:opacity-80"
                >
                  Send a message →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p suppressHydrationWarning>
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <p className="max-w-md sm:text-right">
            Built with Next.js, Tailwind CSS &amp; Framer Motion · Open to AI,
            ML, data science and DevOps roles.
          </p>
        </div>
      </Container>
    </footer>
  );
}
