import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { useConfig, DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const siteData = {
  WEB_URL: "http://localhost:3000",
  WEB_TITLE: "MedKamus.id",
  WEB_TITLE_WITHOUT_DOMAIN: "MedKamus",
  WEB_SLOGAN: "Kamus Medis dan Kedokteran Online",
};

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image
        src="/MedKamus_New.png"
        width={35}
        height={35}
        alt={siteData.WEB_TITLE}
      />
      <span style={{ marginLeft: ".4em", fontWeight: 700 }}>
        {siteData.WEB_TITLE.toUpperCase()}
      </span>
    </>
  ),
  darkMode: true,
  nextThemes: {
    defaultTheme: "dark",
  },
  gitTimestamp({ timestamp }) {
    return (
      <>
        <i>Last Update: {timestamp.toString()}</i>
      </>
    );
  },
  faviconGlyph: "⚕",
  docsRepositoryBase: "https://github.com/MedKamus/MedKamus",
  primaryHue: 320,
  primarySaturation: 100,
  sidebar: {
    autoCollapse: true,
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <div style={{ fontWeight: 700 }}>{title}</div>;
      }
      return <>{title}</>;
    },
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  search: {
    placeholder: "Cari kata...",
  },
  main({ children }) {
    return <>{children}</>;
  },
  banner: {
    dismissible: false,
    key: "medkamus-banner",
    text: (
      <a href="/about" target="_blank">
        ⚡ {siteData.WEB_TITLE_WITHOUT_DOMAIN} in development... | Read more →
      </a>
    ),
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://medkamus.id" target="_blank">
          {siteData.WEB_TITLE}
        </a>
        .
      </span>
    ),
  },
  useNextSeoProps() {
    const { asPath, pathname } = useRouter();
    if (asPath == "/") {
      return {
        titleTemplate: `${siteData.WEB_TITLE} - ${siteData.WEB_SLOGAN}`,
      };
    } else if (pathname == "/about") {
      return {
        titleTemplate: `Tentang Kami | ${siteData.WEB_TITLE}`,
      };
    } else {
      return {
        titleTemplate: `Arti kata '%s' – ${siteData.WEB_SLOGAN} | ${siteData.WEB_TITLE}`,
      };
    }
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta property="og:url" content={`${siteData.WEB_URL}${asPath} `} />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "Terminologi kedokteran, kesehatan, medis, dan serupanya yang terlengkap Bahasa Indonesia"
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Meta Tags — Preview, Edit and Generate"
        />
        <meta
          property="og:image"
          content={`${
            process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : ""
          }/api/og?title=${frontMatter.title}`}
        />
      </>
    );
  },
};

export default config;
