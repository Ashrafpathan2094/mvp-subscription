import AddBootstrap from "@/components/AddBootstrap/AddBootstrap";
import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";

import localFont from "next/font/local";

// getting the local fonts
const fontspring = localFont({
  src: [
    {
      path: "../../fonts/fontspring/Fontspring-DEMO-altivo-thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../fonts/fontspring/Fontspring-DEMO-altivo-extralight.otf",
      weight: "200",
      style: "normal",
    },

    {
      path: "../../fonts/fontspring/Fontspring-DEMO-altivo-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/fontspring/Fontspring-DEMO-altivo-regular.otf",
      weight: "400",
      style: "normal",
    },

    {
      path: "../../fonts/fontspring/Fontspring-DEMO-altivo-medium.otf",
      weight: "500",
      style: "normal",
    },

    {
      path: "../../fonts/fontspring/Fontspring-DEMO-altivo-bold.otf",
      weight: "700",
      style: "normal",
    },

    {
      path: "../../fonts/fontspring/Fontspring-DEMO-altivo-ultra.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* applying the local fonts to the whole web-app */}
      <main className={fontspring.className}>
        <AddBootstrap />
        <Component {...pageProps} />
      </main>
    </>
  );
}
