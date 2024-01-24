import type { Filter } from "../types";
import sampleRoseColoredGlasses from "./samples/roseColoredGlasses";
import sampleGrid from "./samples/grid";
import sampleVignette from "./samples/vignette";
import {Brightness} from "./brightness";
import {Blueness} from "./blueness";
import {Border} from "./border";
const filters: Filter[] = [
  Brightness,
  Blueness,
  Border,
  sampleRoseColoredGlasses,
  sampleGrid,
  sampleVignette,
];

export default filters;

