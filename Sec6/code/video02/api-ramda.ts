const data = [
  { from: 'Holman Serrano', priority: 'normal', subject: 'Payment due' },
  { from: 'Holman Serrano', priority: 'high', subject: 'Payment due' },
  { from: 'Barbra Rasmussen', priority: 'low', subject: 'Payment due' },
  { from: 'Anastasia Cherry', priority: 'high', subject: 'Payment due' },
  { from: 'Holman Serrano', priority: 'high', subject: 'Weekend BBQ' },
  { from: 'Baird Montoya', priority: 'low', subject: 'Weekend BBQ' },
  { from: 'Flores Aguilar', priority: 'low', subject: 'Payment due' }
];

const fakeApi = function() {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

import * as R from 'ramda';

const getPaymentReminders = function(priority, subject) {
  return fakeApi()
    .then(R.filter(R.propEq('priority', priority)))
    .then(R.filter(R.where({ subject: R.contains(subject)})))
    .then(R.sortBy(R.prop('from')));
}

getPaymentReminders('normal', 'Payment')
.then(list => console.log(list))
.catch(error => console.error(error));