// Code your solution here
function findMatching(drivers, argString) {
  return drivers.filter(driver => {return driver.toUpperCase() === argString.toUpperCase()})
}

function fuzzyMatch(drivers, nameStr) {
  return drivers.filter(driver => {return driver.startsWith(nameStr)})
}

function matchName(drivers, name) {
  return drivers.filter(driver => {return driver.name === name} );
}