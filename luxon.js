import { DateTime } from "luxon";
import moment from "moment";

// const now = DateTime.now();
const utcDate = DateTime.utc();

const dt = DateTime.fromISO("2026-05-12T14:30:00Z")

const date = "2026-05-12T14:30:00Z";
const ts = moment(date).unix();

console.log('moment ts: ', ts);

console.log(dt.toMillis());
console.log(dt.toSeconds());


// console.log(now.toSeconds());
console.log('utcDate: ', utcDate.toUnixInteger());

const newDate = "2026-05-12T14:30:00Z";
const d3 = new Date(newDate);

console.log(d3.getTime()/1000);
// console.log(newDate);

function now () {
	return DateTime.utc().toUnixInteger();
}

console.log(now());

console.log(Date.now())

console.log(DateTime.utc().toMillis());

console.log(DateTime.utc().year);
console.log(new Date().getFullYear());