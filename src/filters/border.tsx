import type { Filter } from "../types";
import { hexToRGBA } from "../utils";
import { getIndexer } from "../utils";

const R = 0;
const G = 1;
const B = 2;
const A = 3;

type BorderFilterOptions = {
  color: string;
  size: number;
};

export const Border: Filter<BorderFilterOptions> = {
  name: "Border",
  apply: (pixels, width, height, options) => {
    const [r, g, b, a] = hexToRGBA(options.color);
    const borderwidth = width * Number(options.size)/100;
    console.log("Got options", options);
    let getIndices = getIndexer(pixels, width, height);
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        const indices = getIndices(row, col);
        let redValue = pixels[indices[R]];

        if (row < borderwidth) {
          pixels[indices[R]] = r;
          pixels[indices[G]] = g;
          pixels[indices[B]] = b;
        }
        if (col < borderwidth) {
          pixels[indices[R]] = r;
          pixels[indices[G]] = g;
          pixels[indices[B]] = b;
        }

        if (row > height - borderwidth) {
          pixels[indices[R]] = r;
          pixels[indices[G]] = g;
          pixels[indices[B]] = b;
        }

        if (col > width - borderwidth) {
          pixels[indices[R]] = r;
          pixels[indices[G]] = g;
          pixels[indices[B]] = b;
        }
      }
    }
    // Note that "color" options give you a string (e.g. a hex code)
    // and our utils library has a convenience function to convert
    // from RGB (or RGBA) hex codes into an array of numbers (0-255)

    return pixels;
  },
  options: [
    {
      name: "color",
      type: "color",
      default: "#ff0000",
    },
    {
      name: "size",
      type: "percentage",
      default: 20,
      min: 1,
      max : 50,
    },
  ],
};
