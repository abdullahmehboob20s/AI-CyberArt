import { extendTheme } from "@chakra-ui/react";
import { Cairo } from "@next/font/google";
import Container from "theme/customizedComponents/Container";
import localFont from "next/font/local";

const cairo = Cairo({
  subsets: ["latin"],
  variable: "--font-cairo",
});

const OrganettoP100 = localFont({
  src: "../../public/fonts/Organetto/Fontspring-DEMO-organetto-semiexpthin.otf",
});
const OrganettoP200 = localFont({
  src: "../../public/fonts/Organetto/Fontspring-DEMO-organetto-semiexpultralight.otf",
});
const OrganettoP300 = localFont({
  src: "../../public/fonts/Organetto/Fontspring-DEMO-organetto-semiexplight.otf",
});
const OrganettoP400 = localFont({
  src: "../../public/fonts/Organetto/Fontspring-DEMO-organetto-semiexpregular.otf",
});
const OrganettoP700 = localFont({
  src: "../../public/fonts/Organetto/Fontspring-DEMO-organetto-semiexpbold.otf",
});
const OrganettoP800 = localFont({
  src: "../../public/fonts/Organetto/Fontspring-DEMO-organetto-semiexpultrabold.otf",
});

const OrganettoT100 = localFont({
  src: "../../public/fonts/Organetto/Fontspring-DEMO-organetto-semiextthin.otf",
});
const OrganettoT200 = localFont({
  src: "../../public/fonts/Organetto/Fontspring-DEMO-organetto-semiextultralight.otf",
});

const OrganettoT300 = localFont({
  src: "../../public/fonts/Organetto/Fontspring-DEMO-organetto-semiextlight.otf",
});
const OrganettoT400 = localFont({
  src: "../../public/fonts/Organetto/Fontspring-DEMO-organetto-semiextregular.otf",
});
const OrganettoT700 = localFont({
  src: "../../public/fonts/Organetto/Fontspring-DEMO-organetto-semiextbold.otf",
});
const OrganettoT800 = localFont({
  src: "../../public/fonts/Organetto/Fontspring-DEMO-organetto-semiextultrabold.otf",
});

const Organetto100 = localFont({
  src: "../../public/fonts/Organetto/simple/organetto-thin.otf",
});
const Organetto300 = localFont({
  src: "../../public/fonts/Organetto/simple/organetto-light.otf",
});
const Organetto400 = localFont({
  src: "../../public/fonts/Organetto/simple/organetto-regular.otf",
});
const Organetto700 = localFont({
  src: "../../public/fonts/Organetto/simple/organetto-bold.otf",
});
const Organetto800 = localFont({
  src: "../../public/fonts/Organetto/simple/organetto-ultrabold.otf",
});

const theme = extendTheme({
  components: {
    Container,
  },
  styles: {
    global: {
      "html, body": {
        bg: "black.primary",
        color: "white",
        position: "relative",
        zIndex: 1,
        overflowX: "hidden",
      },
    },
  },
  fonts: {
    heading: cairo.style.fontFamily,
    body: cairo.style.fontFamily,
    organP100: OrganettoP100.style.fontFamily,
    organP200: OrganettoP200.style.fontFamily,
    organP300: OrganettoP300.style.fontFamily,
    organP400: OrganettoP400.style.fontFamily,
    organP700: OrganettoP700.style.fontFamily,
    organP800: OrganettoP800.style.fontFamily,

    organT100: OrganettoT100.style.fontFamily,
    organT200: OrganettoT200.style.fontFamily,
    organT300: OrganettoT300.style.fontFamily,
    organT400: OrganettoT400.style.fontFamily,
    organT700: OrganettoT700.style.fontFamily,
    organT800: OrganettoT800.style.fontFamily,

    organ100: Organetto100.style.fontFamily,
    organ300: Organetto300.style.fontFamily,
    organ400: Organetto400.style.fontFamily,
    organ700: Organetto700.style.fontFamily,
    organ800: Organetto800.style.fontFamily,
  },
  colors: {
    black: {
      primary: "#0F0F11",
      secondary: "#16161A",
      grayish: "#202024",
      grey: "#3B3B3D",
    },
  },
});

export default theme;
