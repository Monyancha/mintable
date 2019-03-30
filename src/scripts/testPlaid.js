require('dotenv').config();

const path = require('path');
const { fetchTransactions } = require('../lib/plaid');

(async () => {
  const res = await fetchTransactions();
  console.log('Transactions fetch successful!');
  console.log(res);
})();
