import { DateTime } from "luxon";

const now = DateTime.now();
const utcDate = DateTime.utc();

console.log(now.toISO());
console.log(utcDate);