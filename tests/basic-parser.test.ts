import { parseCSV } from "../src/basic-parser";
import * as path from "path";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const QUOTES_CSV_PATH = path.join(__dirname, "../data/quotes.csv");
const EMPTY_CSV_PATH = path.join(__dirname, "../data/empty.csv")

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH, undefined)
  
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH, undefined)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

// test for commas in quotes
test("parseCSV handles commas in quotes", async () => {
  const results = await parseCSV(QUOTES_CSV_PATH, undefined)
  for (const row of results) {
    expect(row.length).toBe(2)
  }
})

test("parseCSV handles empty items", async () => {
  const results = await parseCSV(EMPTY_CSV_PATH, undefined);
  for (const row of results) {
    expect(row.length).toBe(4)
  }
})
