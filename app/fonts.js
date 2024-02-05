import { Instrument_Serif, Instrument_Sans, Open_Sans } from "next/font/google";

// Instrument Sans Regular      400   main
// Instrument Sans Medium       500
// Instrument Sans SemiBold     600
// Instrument Serif Regular     400   secondary
// Instrument Serif Italic      400
// Open Sans Regular            400
// Open Sans SemiBold           600



export const instrumentSans = Instrument_Sans({
  weight: ["400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const openSans = Open_Sans({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
