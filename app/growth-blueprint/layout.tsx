import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Northbound | Free Growth Blueprint for Founders" },
  description:
    "Get the free Growth Blueprint 12,400+ founders are using to find their next $10K month. No fluff, no upsells — just the playbook.",
  openGraph: {
    type: "website",
    siteName: "Northbound",
    title: "Northbound | Free Growth Blueprint for Founders",
    description:
      "Get the free Growth Blueprint 12,400+ founders are using to find their next $10K month.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northbound | Free Growth Blueprint for Founders",
    description:
      "Get the free Growth Blueprint 12,400+ founders are using to find their next $10K month.",
  },
};

export default function GrowthBlueprintLayout({ children }: { children: React.ReactNode }) {
  return children;
}
