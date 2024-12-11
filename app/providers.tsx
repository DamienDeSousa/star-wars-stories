import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

type IntlClientProviderProps = {
  children: React.ReactNode;
};

export async function IntlClientProvider({
  children,
}: IntlClientProviderProps) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
