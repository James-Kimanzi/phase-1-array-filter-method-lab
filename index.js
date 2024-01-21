const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

//1

function findMatching(drivers, str) {
  return drivers.filter(
    driver => driver.toLowerCase() === str.toLowerCase()
    );
}

const matchingDrivers = findMatching(drivers, 'bobby');
console.log(matchingDrivers);

//2

function fuzzyMatch(drivers, letter) {
  const letterCase = letter.toLowerCase();
  return drivers.filter(
    driver => driver.toLowerCase().startsWith(letterCase));
}

const driverMatch = fuzzyMatch(drivers, 'sa');
console.log(driverMatch);

//3

function matchName(driverObjects, arg) {
  return driverObjects.filter(
    driver => driver.name === arg
    );
}

const matchingDrivers1 = matchName(drivers, 'Bobby');
console.log(matchingDrivers1);

