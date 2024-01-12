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
    const { frontMatter } = useConfig();

    if (asPath == "/") {
      return {
        titleTemplate: `${process.env.NEXT_PUBLIC_WEB_TITLE} - ${process.env.NEXT_PUBLIC_WEB_SLOGAN}`,
      };
    } else if (pathname == "/about") {
      return {
        titleTemplate: `Tentang Kami | ${process.env.NEXT_PUBLIC_WEB_TITLE}`,
      };
    } else if (pathname == "/blog") {
      return {
        titleTemplate: `Blog | ${process.env.NEXT_PUBLIC_WEB_TITLE}`,
      };
    } else {
      return {
        titleTemplate: `Arti kata ${frontMatter.title} – ${process.env.NEXT_PUBLIC_WEB_SLOGAN} | ${process.env.NEXT_PUBLIC_WEB_TITLE}`,
      };
    }
  },
  head: () => {
    const { asPath, pathname } = useRouter();
    const { frontMatter } = useConfig();

    let titleTemplate = "";
    if (asPath == "/") {
      titleTemplate = `${process.env.NEXT_PUBLIC_WEB_TITLE} - ${process.env.NEXT_PUBLIC_WEB_SLOGAN}`;
    } else if (pathname == "/about") {
      titleTemplate = `Tentang Kami | ${process.env.NEXT_PUBLIC_WEB_TITLE}`;
    } else if (pathname == "/blog") {
      titleTemplate = `Blog | ${process.env.NEXT_PUBLIC_WEB_TITLE}`;
    } else {
      titleTemplate = `Arti kata ${frontMatter.title} – ${process.env.NEXT_PUBLIC_WEB_SLOGAN} | ${process.env.NEXT_PUBLIC_WEB_TITLE}`;
    }

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          href={`${
            process.env.VERCEL_URL || "http://localhost:3000"
          }/MedKamus_New_Outlined_Icon.png`}
          type="image/x-icon"
        />
        <meta property="title" content={titleTemplate} />
        <meta
          property="description"
          content={
            frontMatter.description ||
            "Terminologi kedokteran, kesehatan, medis, dan serupanya yang terlengkap Bahasa Indonesia"
          }
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${
            process.env.VERCEL_URL || "http://localhost:3000"
          }${asPath}`}
        />
        <meta property="og:title" content={titleTemplate} />
        {/* <meta
          property="og:image"
          content={`${
            process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : ""
          }/api/og?title=${frontMatter.title}`}
        /> */}
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "Terminologi kedokteran, kesehatan, medis, dan serupanya yang terlengkap Bahasa Indonesia"
          }
        />
        <meta
          property="og:image"
          content={`${
            process.env.VERCEL_URL || "http://localhost:3000"
          }/MedKamus_Banner.png`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`${
            process.env.VERCEL_URL || "http://localhost:3000"
          }${asPath}`}
        />
        <meta property="twitter:title" content={titleTemplate} />
        <meta
          property="twitter:description"
          content={
            frontMatter.description ||
            "Terminologi kedokteran, kesehatan, medis, dan serupanya yang terlengkap Bahasa Indonesia"
          }
        />
        <meta
          property="twitter:image"
          content={`${
            process.env.VERCEL_URL || "http://localhost:3000"
          }/MedKamus_Banner.png`}
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta property="og:locale" content="in_ID" />
        <meta
          name="msapplication-TileImage"
          content={`${
            process.env.VERCEL_URL || "http://localhost:3000"
          }/MedKamus_Banner.png`}
        />
      </>
    );
  },
};

export default config;
