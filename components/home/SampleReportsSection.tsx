"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Download, ExternalLink, FileText } from "lucide-react";
import {
  sampleReports,
  sampleReportsSection,
  type SampleReport,
} from "@/lib/content/sample-reports";

function ReportCover({
  report,
}: {
  report: SampleReport;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const showThumbnail = report.thumbnailSrc && !imageFailed;

  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[12px] border border-border bg-secondary/60">
      {showThumbnail ? (
        <Image
          src={report.thumbnailSrc!}
          alt={`${report.company} ${report.year} ${report.title} cover`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 33vw"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-lavender/20 to-secondary/80 p-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-lavender/25">
            <FileText className="h-6 w-6 text-foreground" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Cover preview
          </p>
          <p className="text-sm font-semibold leading-snug text-foreground">
            {report.company}
          </p>
          <p className="text-xs text-muted-foreground">{report.year}</p>
        </div>
      )}
    </div>
  );
}

function SampleReportCard({ report }: { report: SampleReport }) {
  return (
    <article className="flex flex-col rounded-[16px] border border-border bg-background p-5 transition-all hover:border-lavender/40 hover:shadow-lg hover:shadow-lavender/5 sm:p-6">
      <ReportCover report={report} />

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-lavender/15 px-2.5 py-0.5 text-xs font-semibold text-foreground">
          {report.year}
        </span>
        {report.market ? (
          <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
            {report.market}
          </span>
        ) : null}
        {report.pages ? (
          <span className="text-xs text-muted-foreground">
            {report.pages} pages
          </span>
        ) : null}
      </div>

      <h3 className="mt-3 text-base font-semibold tracking-[-0.02em] text-foreground">
        {report.title}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{report.company}</p>

      <div className="mt-5 flex items-center gap-2">
        <a
          href={report.fileSrc}
          download={report.downloadFileName}
          aria-label={`Download ${report.company} ${report.year} ${report.title}`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] bg-foreground text-background transition-opacity hover:opacity-90"
        >
          <Download className="h-4 w-4" />
        </a>
        <Link
          href={report.fileSrc}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${report.company} ${report.year} ${report.title}`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-border bg-white text-foreground transition-colors hover:bg-muted"
        >
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export function SampleReportsSection() {
  return (
    <section id="sample-reports" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-lavender">
            {sampleReportsSection.kicker}
          </p>
          <h2 className="text-3xl font-bold leading-[1.08] tracking-[-0.01em] text-foreground sm:text-4xl">
            {sampleReportsSection.headline}
          </h2>
          <p className="mt-4 text-base leading-[1.6] text-muted-foreground">
            {sampleReportsSection.subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {sampleReports.map((report) => (
            <SampleReportCard key={report.id} report={report} />
          ))}
        </div>
      </div>
    </section>
  );
}
