import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
 

export default function App({ Component, pageProps }: AppProps & { pageProps: { messages: Record<string, any> } }) {
  const router = useRouter();
 
  return (
    <NextIntlClientProvider
      locale={router.locale || 'en'} 
      timeZone="Europe/Vienna"
      messages={pageProps.messages}
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}