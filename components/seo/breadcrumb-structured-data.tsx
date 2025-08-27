import { StructuredData } from "./structured-data"

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbStructuredDataProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
  const breadcrumbItems = [{ name: "Home", url: "/" }, ...items]

  return <StructuredData type="BreadcrumbList" data={{ items: breadcrumbItems }} />
}
