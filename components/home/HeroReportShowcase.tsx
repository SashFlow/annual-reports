"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { sampleReports } from "@/lib/content/sample-reports";

export function HeroReportShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (reduceMotion || sampleReports.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % sampleReports.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <div className="mx-auto w-full max-w-[320px] sm:max-w-none">
      <Link
        href="#sample-reports"
        className="group relative block aspect-[3/4] overflow-hidden rounded-[16px] border border-border bg-secondary/40 shadow-xl shadow-foreground/5 transition-all hover:border-lavender/40 hover:shadow-2xl hover:shadow-lavender/10"
      >
        {sampleReports.map((report, index) => (
          <div
            key={report.id}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: index === activeIndex ? 1 : 0 }}
          >
            {report.thumbnailSrc ? (
              <Image
                src={report.thumbnailSrc}
                alt={`${report.company} ${report.year} ${report.title}`}
                fill
                priority={index === 0}
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            ) : null}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent px-5 pb-5 pt-16">
              <p className="text-sm font-semibold text-white">{report.company}</p>
              <p className="mt-0.5 text-xs text-white/70">
                {report.title} · {report.year}
              </p>
            </div>
          </div>
        ))}
      </Link>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {sampleReports.map((report, index) => (
          <button
            key={report.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${report.company} ${report.year} report`}
            aria-pressed={index === activeIndex}
            className={`relative aspect-[3/4] overflow-hidden rounded-[8px] border transition-all ${
              index === activeIndex
                ? "border-lavender ring-2 ring-lavender/30"
                : "border-border opacity-70 hover:opacity-100"
            }`}
          >
            {report.thumbnailSrc ? (
              <Image
                src={report.thumbnailSrc}
                alt=""
                fill
                className="object-cover object-top"
                sizes="120px"
              />
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
}
