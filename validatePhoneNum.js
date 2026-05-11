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


// import libphonenumber from 'google-libphonenumber';

// const { PhoneNumberUtil } = libphonenumber;
// const phoneUtil = PhoneNumberUtil.getInstance();

// function validatePhoneNumber(raw) {
// 	 if (!/^\+[\d\s\-]+$/.test(raw)) return false;
	
//   try {
//     const number = phoneUtil.parseAndKeepRawInput(raw);
// 		console.log(number.getNationalNumber());
//     console.log(number.getCountryCode());
//     console.log(number.getExtension());
//     console.log(phoneUtil.getNationalSignificantNumber(number));

//     const countryCode = number.getCountryCode();
//     const nationalNumber = phoneUtil
//       .format(number, PhoneNumberFormat.NATIONAL)  // "0106 352 0549"
//       .replace(/[\s\-\(\)]/g, '');                 // "01063520549"

//     return `+${countryCode}-${nationalNumber}`;
    
//     // return phoneUtil.isValidNumber(number);
//   } catch (e) {
//     // parseAndKeepRawInput throws if the input is unparseable
//     return false;
//   }
// }

// import libphonenumber from 'google-libphonenumber';

// const { PhoneNumberUtil, PhoneNumberFormat } = libphonenumber;
// const phoneUtil = PhoneNumberUtil.getInstance();

// function validatePhoneNumber(raw) {
//   if (!/^\+[\d\s\-]+$/.test(raw)) return false;

//   try {
//     const number = phoneUtil.parseAndKeepRawInput(raw);

//     if (!phoneUtil.isValidNumber(number)) return false;

//       console.log('national: ', number.getNationalNumber());

    
//     const countryCode = number.getCountryCode();
//     const nationalNumber = phoneUtil
//       .format(number, PhoneNumberFormat.NATIONAL)
//       .replace(/[\s\-\(\)]/g, '');

//     return `+${countryCode}-${nationalNumber}`; 
//   } catch (e) {
//     return false;
//   }
// }

import libphonenumber from 'google-libphonenumber';

const { PhoneNumberUtil } = libphonenumber;
const phoneUtil = PhoneNumberUtil.getInstance();

function validatePhoneNumber(raw) {
	if (!raw || !/^\+[\d\s\-]+$/.test(raw)) return false;

  try {
    const number = phoneUtil.parseAndKeepRawInput(raw);

    if (!phoneUtil.isValidNumber(number)) return false;

    const countryCode = number.getCountryCode();
    const nationalNumber = phoneUtil.getNationalSignificantNumber(number); // no trunk prefix
    const canonical = `+${countryCode}-${nationalNumber}`; // +20-1063520549

    return raw === canonical;
  } catch (e) {
    // parseAndKeepRawInput throws if the input is unparseable
    return false;
  }
}

console.log(validatePhoneNumber("+20-01063520549"))
console.log(validatePhoneNumber("+966-569870005"))
console.log(validatePhoneNumber("+97332329912"))
console.log(validatePhoneNumber("+97336458596"))
console.log(validatePhoneNumber("+39-0612345678"))