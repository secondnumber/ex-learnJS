const passengers = [
    {name: 'Jane Doloop', paid: true},
    {name: 'Dr. Evil', paid: true},
    {name: 'Sue Property', paid: true},
    {name: 'John Funcall', paid: false},
];

function checkNoFlyList(passenger) {
    return (passenger.name === 'Dr. Evil');
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}

function processPassengers(passengers, testFunction) {
    for (let i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

function printPassenger(passenger) {
    console.log(passenger.name);
}

const allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log('We have a passenger on the no-fly-list')
}

const allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    console.log('Not everyone has paid')
}

const allPrint = processPassengers(passengers, printPassenger);
console.log(allPrint);
