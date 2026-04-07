// class BasePdfGenerator {
//   constructor(reportSettings = {}) {
//     this.reportSettings = {
// 			type: 'Not Generic',
// 			margins: 15,
// 			fonts: "FiraCode"
// 		};
//     this.type = reportSettings.type || 'Generic';
//     this.margins = this.reportSettings.margins;
//     this.fonts = this.reportSettings.fonts;
//     this.reportType = this.type;
//   }
  
//   addNoDataMessage = () => {
// 		console.log(this.reportSettings);
//   }
// }

// export function createMileageReportSettings(reportSettings = {}) {
// 	const baseGenerator = new BasePdfGenerator();

// 	return {
// 		addNoDataMessage: baseGenerator.addNoDataMessage
// 	}
// }

// const newBaseGenerator = new BasePdfGenerator();
// newBaseGenerator.addNoDataMessage()

// const reportSettings = createMileageReportSettings()

// reportSettings.addNoDataMessage()


import moment from 'moment';

const now = moment().utc();
const startOfDay = now.clone().startOf('day').toDate();

console.log('moment now: ', now.format());
console.log(startOfDay);