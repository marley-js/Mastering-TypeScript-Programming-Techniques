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

const getHighPriorityPayments= function() {
  fakeApi().then((data: any) => {
    const highPriority = [];
    for (let i = 0, length = data.length; i < length; i++) {
      if (data[i].priority === 'high') {
        highPriority.push(data[i]);
      }
    }
    return highPriority;
  })
  .then((data: any) => {
    const payment = [];
    for (let i = 0, length = data.length; i < length; i++) {
      if (data[i].subject.includes('Payment')) {
        payment.push(data[i]);
      }
    }
    return payment;
  })
  .then((highPriorityPayments: any) => {
    console.log(highPriorityPayments);
  })
  .catch(error => console.error(error));
}

getHighPriorityPayments();