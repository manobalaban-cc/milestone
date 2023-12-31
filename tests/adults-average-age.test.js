const adultsAverageAge = require('../solutions/adults-average-age');

const user1 = {
  id: 3242342,
  name: 'Katie-Louise Rodrigues',
  age: 18,
};

const user2 = {
  id: 2136523,
  name: 'Kirandeep Farrington',
  age: 30,
};

const user3 = {
  id: 8743534,
  name: 'Becky Clarke',
  age: 18,
};

const user4 = {
  id: 4733631,
  name: 'Sumaiya Bridges',
  age: 24,
};

const user5 = {
  id: 4733632,
  name: 'Anna-Marie Farley',
  age: 17,
};

test('Test 1', () => {
  expect(adultsAverageAge([user1, user2, user3, user4, user5]))
    .toStrictEqual(22.5);
});

test('Test 2', () => {
  expect(adultsAverageAge([user1, user2, user3, user4]))
    .toStrictEqual(22.5);
});

test('Test 3', () => {
  expect(adultsAverageAge([user1, user2, user3]))
    .toStrictEqual(22);
});

test('Test 4', () => {
  expect(adultsAverageAge([user1, user2]))
    .toStrictEqual(24);
});

test('Test 5', () => {
  expect(adultsAverageAge([user2, user3, user4, user5]))
    .toStrictEqual(24);
});

test('Test 6', () => {
  expect(adultsAverageAge([user3, user4, user5]))
    .toStrictEqual(21);
});

test('Test 7', () => {
  expect(adultsAverageAge([user4, user5]))
    .toStrictEqual(24);
});
