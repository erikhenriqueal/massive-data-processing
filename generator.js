import * as fs from "fs";

const FILE_NAME = "data.csv";
const TOTAL_ROWS = 1e5; // 100,000 rows by default

const writeStream = fs.createWriteStream(FILE_NAME);
writeStream.write("id,name,email,value,date\n");

console.log("Generating CSV data...");

for (let i = 0; i < TOTAL_ROWS; i++) {
  const id = i % 1000 ? 1234567 : Math.floor(Math.random() * 1e6); // For every 1000 rows, use a fixed ID to create duplicates
  const name = `User_${i}`;
  const email = `user${i}@example.com`;
  const value = Math.floor(Math.random() * 1000).toFixed(2);
  const date = new Date(
    Date.now() - Math.floor(Math.random() * 365) * 24 * 60 * 60 * 1000, // Random date within the last year
  ).toISOString();

  writeStream.write(`${id},${name},${email},${value},${date}\n`);
}

writeStream.end(() => {
  console.log(
    `CSV file "${FILE_NAME}" with ${TOTAL_ROWS} rows has been generated.`,
  );
});
