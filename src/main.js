"use strict";

import {
  sum
} from './functions';
console.log(`The sum is ${sum(1, 2)}`);

const thePromise = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('OK'), 2000);
});

async function executePromise() {
  console.log(await thePromise());
  console.log(await thePromise());
  console.log(await thePromise());
  console.log(await thePromise());
}

executePromise();