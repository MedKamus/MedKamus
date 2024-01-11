import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { useConfig, DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image
        src="/MedKamus_New.png"
        width={35}
        height={35}
        alt={process.env.NEXT_PUBLIC_WEB_TITLE}
      />
      <span style={{ marginLeft: ".4em", fontWeight: 700 }}>
        {process.env.NEXT_PUBLIC_WEB_TITLE}
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
        ⚡ {process.env.NEXT_PUBLIC_WEB_TITL_WITHOUT_DOMAIN} in development... |
        Read more →
      </a>
    ),
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href={process.env.VERCEL_URL} target="_blank">
          {process.env.NEXT_PUBLIC_WEB_TITLE}
        </a>
        .
      </span>
    ),
  },
  useNextSeoProps() {
    const { asPath, pathname } = useRouter();
    if (asPath == "/") {
      return {
        titleTemplate: `${process.env.NEXT_PUBLIC_WEB_TITLE} - ${process.env.NEXT_PUBLIC_WEB_SLOGAN}`,
      };
    } else if (pathname == "/about") {
      return {
        titleTemplate: `Tentang Kami | ${process.env.NEXT_PUBLIC_WEB_TITLE}`,
      };
    } else {
      return {
        titleTemplate: `Arti kata '%s' – ${process.env.NEXT_PUBLIC_WEB_SLOGAN} | ${process.env.NEXT_PUBLIC_WEB_TITLE}`,
      };
    }
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta
          property="og:url"
          content={`${process.env.VERCEL_URL}${asPath} `}
        />
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
