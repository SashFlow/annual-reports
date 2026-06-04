/**
 * Sample annual reports shown on the landing page.
 *
 * Add assets under `public/sample-reports/` and reference filenames here.
 */
export type SampleReport = {
  id: string;
  title: string;
  company: string;
  year: number;
  market?: string;
  pages?: number;
  fileSrc: string;
  thumbnailSrc?: string;
  downloadFileName?: string;
};

export function sampleReportAsset(filename: string): string {
  return `/sample-reports/${encodeURIComponent(filename)}`;
}

export const sampleReportsSection = {
  kicker: "Examples",
  headline: "Annual reports you can explore",
  subhead:
    "Sample outputs from founding teams — download full PDFs to review structure, disclosures, and narrative flow.",
} as const;

export const sampleReports: SampleReport[] = [
  {
    id: "ghcl-textiles-2026",
    title: "6th AGM Report",
    company: "GHCL Textiles",
    year: 2026,
    fileSrc: sampleReportAsset("GHCL Textiles 6th AGM 2026.pdf"),
    thumbnailSrc: sampleReportAsset("GHCL Textiles 6th AGM 2026.jpg"),
    downloadFileName: "GHCL-Textiles-6th-AGM-2026.pdf",
  },
  {
    id: "nwbi-2024",
    title: "Annual Report",
    company: "NWBI",
    year: 2024,
    market: "NASDAQ",
    fileSrc: sampleReportAsset("NWBI NASDAQ 2024 Report.pdf"),
    thumbnailSrc: sampleReportAsset("NWBI NASDAQ 2024 Report.jpg"),
    downloadFileName: "NWBI-NASDAQ-2024-Report.pdf",
  },
  {
    id: "atsg-2022",
    title: "Annual Report",
    company: "Air Transport Services Group",
    year: 2022,
    fileSrc: sampleReportAsset("Air Transport Services Group 2022.pdf"),
    thumbnailSrc: sampleReportAsset("Air Transport Services Group 2022.png"),
    downloadFileName: "Air-Transport-Services-Group-2022.pdf",
  },
  {
    id: "nacco-2023",
    title: "Annual Report",
    company: "NACCO Industries",
    year: 2023,
    fileSrc: sampleReportAsset("NACCO Industries 2023 Report.pdf"),
    thumbnailSrc: sampleReportAsset("NACCO Industries 2023 Report.jpg"),
    downloadFileName: "NACCO-Industries-2023-Report.pdf",
  },
];

export const sampleReportCoverImages = sampleReports
  .map((report) => report.thumbnailSrc)
  .filter((src): src is string => Boolean(src));
