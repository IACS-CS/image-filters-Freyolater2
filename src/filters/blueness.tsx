import type { Filter } from "../types";

export const Blueness: Filter = {
  name: "Blueness",
  apply: (pixels, width, height) => {
  for (let ri = 0; ri < pixels.length; ri+=4) {
    pixels [ri] = pixels [ri] + 30;
    let gi = ri+1;
    let bi = ri+2;
    pixels[ri]=255-pixels[ri];
  }
    
    /* Modify pixels... */
    return pixels;
  },
};