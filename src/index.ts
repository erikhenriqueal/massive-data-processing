import { createReadStream } from "fs";
import { parse } from "csv-parse";

import { formatBytes } from "./utils";

/**
 * Reads a CSV file using a Readable Stream, counts the occurrences
 * of each ID,and logs the total unique IDs, total duplicates, and
 * the duplicate IDs with their counts.
 * @param path Target CSV file's path
 * @returns An Iterator of entries containing duplicate IDs and their counts.
 */
async function streamMap(path: string = "./data.csv") {
  const parser = createReadStream(path).pipe(parse({ fromLine: 2 }));

  // Map to count occurrences of each ID
  const counter = new Map<string, number>();

  for await (const record of parser) {
    const id = record[0];
    counter.set(id, (counter.get(id) ?? 0) + 1);
  }

  // Returns only duplicates
  // Ps.: Using directly entries() avoids excess of
  // memory usage and optimizes time complexity,
  // since we don't need to create an intermediate
  // array of keys or values.
  return counter.entries().filter((v) => v[1] > 1);
}

/**
 * Logs the memory usage and time taken for the callback to execute.
 * @param callback Target function to measure memory usage and execution time.
 * @returns The result of the callback function.
 */
async function logUsage<T>(callback: () => Promise<T>): Promise<T> {
  const m0 = process.memoryUsage().heapUsed;
  const t0 = performance.now();

  const data = await callback();

  const m1 = process.memoryUsage().heapUsed;
  const t1 = performance.now();

  console.log(`Memory usage: ${formatBytes(m1 - m0)}`);
  console.log(`Time taken: ${(t1 - t0).toFixed(2)} ms`);

  return data;
}

logUsage(() => streamMap("./data.csv")).then((duplicates) => {
  // Convert the iterator of duplicates to an array for easier logging
  const duplicatesArray = Array.from(duplicates);

  // I know my approach here is not the most efficient, but I wanted to log the duplicates in a more readable format.
  console.log(
    "Duplicates:",
    duplicatesArray.map(([id, count]) => `${id}(${count})`).join(", "),
  );
  console.log(
    `Total duplicates occurences: ${duplicatesArray.reduce((acc, [_, count]) => acc + count, 0)}`,
  );
});
