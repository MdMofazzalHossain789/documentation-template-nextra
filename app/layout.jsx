import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import { Banner, Head } from "nextra/components";
import { Footer, Navbar } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const banner = (
  <Banner storageKey="some-key">DocsTemplate 1.0 is released 🎉</Banner>
);
const navbar = (
  <Navbar
    logo={
      <div className="flex items-center gap-x-4">
        <Image width={24} height={24} src="/logo.png" alt="docstemplate logo" />
        <b>DocsTemplate</b>
      </div>
    }

    // ... Your additional navbar options
  />
);
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>;

export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
