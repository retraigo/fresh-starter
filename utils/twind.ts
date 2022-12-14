import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "102": "32rem",
        "108": "36rem",
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
        "10xl": "110rem",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      translate: {
        "130": "50rem",
        "140": "60rem",
      },
    },
    zIndex: {
      "0": "0",
      "10": "10",
      "20": "20",
      "25": "25",
      "30": "30",
      "40": "40",
      "45": "45",
      "50": "50",
      "75": "75",
      "100": "100",
      "auto": "auto",
    },
  },
};
if (IS_BROWSER) setup(config);
