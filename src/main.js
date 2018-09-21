"use strict";

import sum from './functions';
console.log(`The sum is ${sum(1, 2)}`);


/***
 * Async await example
 */
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

/**
 * Axios example
 */
import axios from 'axios';
class ServiceApi {
  static async getGithubUser(username) {
    return await axios.get(`https://api.github.com/users/${username}`);
  }
}

ServiceApi.getGithubUser('osmarleandro')
  .then(response =>
    console.log(response)
  )
  .catch(error =>
    console.error(error)
  )