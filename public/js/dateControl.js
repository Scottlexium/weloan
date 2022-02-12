var date = new Date();

var futuredate = new Date();
var tdate = date.getDate() + 1;
var month = date.getMonth() + 1;
// future date
var maxMonth = futuredate.getMonth() + 1;

var maxYear = date.getUTCFullYear();
var year = date.getUTCFullYear();

if (tdate < 10) tdate = "0" + tdate;
if (month < 10) {
  month = "0" + month;
}
var getDaysInMonth = function (maxMonth, maxYear) {
  return new Date(maxYear, maxMonth, 0).getDate();
};
const daysmonth = getDaysInMonth(maxMonth, maxYear);

var maxTdate = futuredate.getDate() + daysmonth;

if (maxTdate < 10) maxTdate = "0" + maxTdate;
if (maxMonth < 10) {
  maxMonth = "0" + maxMonth;
}

const meanDate = year + "-" + month + "-" + tdate;

console.log(daysmonth);
const maxDate = maxYear + "-" + maxMonth + "-" + daysmonth;
console.log(maxDate);
document.getElementById("date").setAttribute("min", meanDate);




// for the max date


const m = moment();
const curM = m.toISOString();
const currentMoment = moment().subtract(0, 'days');
const endMoment = moment().add(3, 'days');
currentMoment.add(30, 'days');
let naNow = currentMoment.format('YYYY-MM-DD')
    console.log(`Loop at ${naNow}`);
document.getElementById("date").setAttribute("max", naNow);







