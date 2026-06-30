import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/data";
import ServiceDetail from "@/components/services/ServiceDetail";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) return {};
  return {
    title: svc.title,
    description: svc.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) notFound();
  return <ServiceDetail service={svc} />;
}
