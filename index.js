const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, name) {
    const matchingDrivers = [];
    
    for (const driver of drivers) {
        if (driver.toLowerCase() === name.toLowerCase()) {
            matchingDrivers.push(driver);
        }
    }

    return matchingDrivers;
}



function fuzzyMatch(drivers, letters) {
    const matchingDrivers = [];

    for (const driver of drivers) {
        if (driver.startsWith(letters)) {
            matchingDrivers.push(driver);
        }
    }

    return matchingDrivers;
}
function matchName(drivers, targetName) {
    const matchingDrivers = [];

    for (const driver of drivers) {
        if (driver.name === targetName) {
            matchingDrivers.push(driver);
        }
    }

    return matchingDrivers;
}

const matchingDrivers = matchName(drivers, 'Bobby');
console.log(matchingDrivers);
