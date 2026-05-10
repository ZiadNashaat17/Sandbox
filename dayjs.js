import dayjs from "dayjs";

dayjs.extend(utc)

const now = dayjs();

console.log(now);
console.log(dayjs().second(30).valueOf() );
console.log(now.utc().format());

dayjs.extend(utc)

var a = dayjs()
a.format() //2019-03-06T08:00:00+08:00
a.utc().format() // 2019-03-06T00:00:00Z

let utcDate = a.utc().format()
console.log(utcDate);