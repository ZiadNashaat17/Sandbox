// import { DateTime } from "luxon";
// import moment from "moment";

// const now = DateTime.now();
// const utcDate = DateTime.utc();

// const dt = DateTime.fromISO("2026-05-12T14:30:00Z")

// const date = "2026-05-12T14:30:00Z";
// const ts = moment(date).unix();

// console.log('moment ts: ', ts);

// console.log(dt.toMillis());
// console.log(dt.toSeconds());


// // console.log(now.toISO());
// // console.log(utcDate);

// const newDate = "2026-05-12T14:30:00Z";
// const d3 = new Date(newDate);

// console.log(d3.getTime()/1000);
// // console.log(newDate);

import moment from "moment";

    const fromMoment = moment("2026-05-10T12:39:34.000Z");
    const toMoment = moment("2026-05-11T12:40:34.000Z");

    if (toMoment.isBefore(fromMoment)) {
        console.log('to must be greater than or equal to from');
    }

    const maxRangeInSeconds = 24 * 60 * 60;
    if (toMoment.diff(fromMoment, 'seconds') > maxRangeInSeconds) {
        console.log('Date range must not exceed 1 day');
    }

    const fromTimestamp = fromMoment.unix();
    const toTimestamp = toMoment.unix();

		console.log('from', fromTimestamp);
		console.log('to', toTimestamp);