/**
 * greet(name):
 * - optionally receives a name
 * - logs "Hello" if there is no name
 * - logs "Hello <name>" if there is a name
 */
function greet(name) {
  // Your code here
  if (name === undefined) {
    console.log("Hello");
  }
  console.log(`Hello ${name}`);
}
//greet("kashif");
/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 */
function isOdd(n) {
  // Your code here
  if (n % 2 !== 0) {
    return true;
  }
  return false;
}
//console.log(isOdd(9));

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 *
 * Hint: you can solve this without writing any loops!
 */
function oddsSmallerThan(n) {
  // Your code here
  //if (isOdd(n)){
  // return (n-1)/2
  //}else return n/2;
  if (isOdd(n)) {
    n--;
  }
  return n / 2;
}

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  if (n % 2 !== 0) {
    return n * n;
  } else return n * 2;
  //let a = n * n;
  //return a;
  //let a = n * 2;
  //return a;
  if (isOdd(n)) {
  }
}
//console.log(squareOrDouble(9));
/**
 * ageFromBirthDate(birthDate):
 * - receives a birthDate as a STRING of the form <YYYYMMDD>
 *   where:
 *     - YYYY is the year
 *     - MM is the month (01 - 12)
 *     - DD is the date
 * - calculates and returns the age in years (rounded down to the nearest year)
 * - assume all birthDates will be valid
 *
 * Hint: you can use JavaScript's Date() class to make things easier
 *
 * e.g. (if we assume that the date today is September 23 2018):
 *    ageFromBirthDate("19870506") -> 31 (because the birthday already passed)
 *    ageFromBirthDate("19971110") -> 20 (because the birthday hasn't passed yet)
 */
function ageFromBirthDate(birthDate) {
  const _MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;
  let year = birthDate.slice(0, 4);
  let month = birthDate.slice(4, 6);
  let day = birthDate.slice(6, 8);
  //let stringdate =
  // year.toString() + "-" + month.toString() + "-" + day.toString();
  const today = new Date();
  const dob = new Date(`${year}-${month}-${day}`);
  // var d = new Date(stringdate);
  //var test = date.now - d.getTime();
  //a = Date.now() - parseInt(birthDate).getTime()) / _MS_PER_YEAR;
  //return a;
  return Math.floor((today - dob) / _MS_PER_YEAR);
  // Your code here
}

console.log(ageFromBirthDate("19870506"));

module.exports = {
  greet,
  isOdd,
  oddsSmallerThan,
  squareOrDouble,
  ageFromBirthDate,
};
