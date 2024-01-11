import { Montagu_Slab } from "next/font/google";

const montagu = Montagu_Slab({
  weight: "400",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        main > :is(h1, h2, h3, h3, h4, h5, h6) {
          font-family: ${montagu.style.fontFamily};
          font-optical-sizing: auto;
          font-weight: 400;
          font-style: normal;
        }
      `}</style>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
