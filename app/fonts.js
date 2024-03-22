import localFont from "next/font/local";
// Instrument Sans Regular      400   main
// Instrument Sans Medium       500
// Instrument Sans SemiBold     600
// Instrument Serif Regular     400   secondary
// Instrument Serif Italic      400
// Open Sans Regular            400
// Open Sans SemiBold           600

export const instrumentSans = localFont({
  src: [
    {
      path: "../public/fonts/instrument-sans-400.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/instrument-sans-500.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/instrument-sans-600.woff2",
      weight: "600",
    },
  ],
});

export const instrumentSerif = localFont({
  src: [
    {
      path: "../public/fonts/instrument-serif-400.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/instrument-serif-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});

export const openSans = localFont({
  src: [
    {
      path: "../public/fonts/open-sans-400.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/open-sans-600.woff2",
      weight: "600",
    },
  ],
});
