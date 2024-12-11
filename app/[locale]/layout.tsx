import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { IntlClientProvider } from "../providers";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "fr" | "en")) {
    notFound();
  }

  return <IntlClientProvider>{children}</IntlClientProvider>;
}
