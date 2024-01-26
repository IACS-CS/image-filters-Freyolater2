import type { Filter } from "../types";
import { hexToRGBA } from "../utils";
import { getIndexer } from "../utils";

const R = 0;
const G = 1;
const B = 2;
const A = 3;

type CartoonOptions = {
  strength: number;
};

export const Cartoon: Filter<CartoonOptions> = {
  name: "Cartoon",
  apply: (pixels, width, height) => {
    const pixelsCopy = pixels.slice()
    const getcolordifference = (pixel1: number[], pixel2: number[], number => {
      return Math.sqrt()
    }
    return pixels;
  },
};