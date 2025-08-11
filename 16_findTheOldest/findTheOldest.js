const findTheOldest = function (people) {
  let oldestPerson;
  let oldestAge = 0;
  for (let i = 0; i < people.length; i++) {
    let personAge = 0;
    const currentYear = new Date().getFullYear();

    if ("yearOfDeath" in people[i]) {
      // if person is dead
      personAge = people[i].yearOfDeath - people[i].yearOfBirth;
    } else {
      // if person is still alive
      personAge = currentYear - people[i].yearOfBirth;
    }

    if (oldestAge < personAge) {
      oldestAge = personAge;
      oldestPerson = people[i];
    }
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
