import type { Filter } from "../types";

export const Brightness: Filter = {
  name: "Brightness",
  apply: (pixels, width, height) => {
  for (let i = 0; i < pixels.length; i++) {
    pixels [i] = pixels [i] + 30;
  }
    
    /* Modify pixels... */
    return pixels;
  },
};