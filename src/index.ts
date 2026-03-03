import * as fs from "fs";
import { parse } from "csv-parse/sync";

const results = parse(fs.readFileSync("data.csv"));
console.log(Object.getPrototypeOf(results));

const setResults = new Set(results);
console.log(Object.getPrototypeOf(setResults));
