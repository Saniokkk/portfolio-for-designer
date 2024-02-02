// import { Instrument , Open } from "next/font/google";

// Instrument Sans Regular      400   main
// Instrument Serif Regular     400   secondary
// Instrument Serif Italic      400
// Open Sans Regular            400
// Instrument Sans Medium       500
// Instrument Sans SemiBold     600
// Open Sans SemiBold           600


export const instrument = Instrument({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const open = Open({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
