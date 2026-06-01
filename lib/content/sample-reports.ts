/**
 * Sample annual reports shown on the landing page.
 *
 * Add assets under `public/sample-reports/`:
 * - PDF: set `fileSrc` (e.g. `/sample-reports/meridian-2024.pdf`)
 * - Cover image: set `thumbnailSrc` (e.g. `/sample-reports/meridian-2024.jpg`)
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

export const sampleReportsSection = {
  kicker: "Examples",
  headline: "Annual reports you can explore",
  subhead:
    "Sample outputs from founding teams — download full PDFs to review structure, disclosures, and narrative flow.",
} as const;

export const sampleReports: SampleReport[] = [
  {
    id: "meridian-2024",
    title: "Annual Report",
    company: "Meridian Industrial Group",
    year: 2024,
    market: "ASX",
    pages: 148,
    fileSrc: "/sample-reports/meridian-2024.pdf",
    thumbnailSrc: "/sample-reports/meridian-2024.jpg",
    downloadFileName: "Meridian-Industrial-Group-Annual-Report-2024.pdf",
  },
  {
    id: "northline-2024",
    title: "Integrated Annual & Sustainability Report",
    company: "Northline Energy",
    year: 2024,
    market: "NYSE",
    pages: 212,
    fileSrc: "/sample-reports/northline-2024.pdf",
    thumbnailSrc: "/sample-reports/northline-2024.jpg",
    downloadFileName: "Northline-Energy-Integrated-Report-2024.pdf",
  },
  {
    id: "atlas-2024",
    title: "Annual Report",
    company: "Atlas Pacific Holdings",
    year: 2024,
    market: "SGX",
    pages: 132,
    fileSrc: "/sample-reports/atlas-2024.pdf",
    thumbnailSrc: "/sample-reports/atlas-2024.jpg",
    downloadFileName: "Atlas-Pacific-Holdings-Annual-Report-2024.pdf",
  },
];
