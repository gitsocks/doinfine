import { PropsWithChildren } from 'react';
import { AppProviders } from './providers';
import { getSession } from '@/app/utils';
import { fonts } from './fonts';
import Script from 'next/script';

const RootLayout = async ({ children }: PropsWithChildren) => {
  const initialSession = await getSession();

  return (
    <html lang="en" className={fonts.dmSans.variable}>
      <body>
        <AppProviders initialSession={initialSession}>{children}</AppProviders>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}
        </Script>
      </body>
    </html>
  );
};

export default RootLayout;
