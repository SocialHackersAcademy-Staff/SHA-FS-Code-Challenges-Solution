/**
 * Write a function called agesToMinutes that,
 * accepts an array of object as parameter and
 * return an array of objects after converting the ages from years to minutes
 * using map.
 *
  var people = [{
        name: {
              first: 'Majd',
              middle: 'Eddin',
        },
        age: 30
        }, {
        name: {
              first: 'Fatima',
              last: 'Himmamy'
        },
        age: 26
        }, {
        name: {
              first: 'Sahar',
              middle: 'MHD'
        },
        age: 27
        }, {
        name: {
              first: 'Nour',
              middle: 'Eddin',
        },
        age: 15
        }, {
        name: {
              first: 'Ahmad',
              last: 'Awad'
        },
        age: 33
  }];
 *
 */

function agesToMinutes(array) {
  var minutesInAnHour = 60,
    hoursInADay = 24,
    daysInAYear = 365;
  return map(array, function (element) {
    var obj = JSON.parse(JSON.stringify(element));
    obj.age = obj.age * minutesInAnHour * hoursInADay * daysInAYear;
    return obj;
  });
}
// EXTRA Credit: one of the most important notes in coding is that, ( inputs to function should not be modified ) for example
// when you invoke the function above (agesToMinutes) with the array (people), the function should return a new array where ages are converted to minutes, WITHOUT, modifying the people array
// Make sure that the function does not modify the input;
