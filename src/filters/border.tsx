import type { Filter } from "../types";
import { hexToRGBA } from "../utils";

type BorderFilterOptions = {
  /* Define options here, as we will get them
  in our apply function -- this needs to match
  the list of options provided below. I'll provide
  three example options to show one of each type */
  color: string;
  size: number;
};

export const Border: Filter<BorderFilterOptions> = {
  name: "Border",
  apply: (pixels, width, height, options) => {
    // We can now access our options with
    // e.g. options.color, options.strength, etc.
    let getIndices = getIndexer(pixels,width,height)
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        const indices = getIndices(row,col);
        let redValue 
    // Note that "color" options give you a string (e.g. a hex code)
    // and our utils library has a convenience function to convert
    // from RGB (or RGBA) hex codes into an array of numbers (0-255)
    const [r, g, b, a] = hexToRGBA(options.color);
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
      min: .01,
      max: 100,
    },
  ],
};