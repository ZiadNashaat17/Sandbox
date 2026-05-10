// import { isValidPhoneNumber } from 'libphonenumber-js';

// // Simple validation with international prefix
// console.log(isValidPhoneNumber('+12133734253', 'US')); // true

// // Validation with a default country (for local inputs)
// console.log(isValidPhoneNumber('31234567', 'BH')); // true

// import { PhoneNumberUtil } from "google-libphonenumber";

// import libphonenumber from 'google-libphonenumber';

// const { PhoneNumberUtil, PhoneNumberFormat } = libphonenumber;

// const phoneUtil = PhoneNumberUtil.getInstance();

// const number = phoneUtil.parseAndKeepRawInput('+20-01014283454');
// console.log(number.getNationalNumber());
// console.log(number.getRawInput());
// console.log(phoneUtil.getRegionCodeForNumber(number));

// console.log(phoneUtil.isValidNumberForRegion(number, 'eg'));


// console.log(phoneUtil.isValidNumber(number));


import libphonenumber from 'google-libphonenumber';

const { PhoneNumberUtil } = libphonenumber;
const phoneUtil = PhoneNumberUtil.getInstance();

function validatePhoneNumber(raw) {
	 if (!/^\+[\d\s\-]+$/.test(raw)) return false;
	
  try {
    const number = phoneUtil.parseAndKeepRawInput(raw);
		console.log(number.getNationalNumber());

    return phoneUtil.isValidNumber(number);
  } catch (e) {
    // parseAndKeepRawInput throws if the input is unparseable
    return false;
  }
}

console.log(validatePhoneNumber("+20 0106 352 0549"))