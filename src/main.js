"use strict";

import {
  sum
} from './functions';

class List {
  constructor() {
    this.data = [];
  }

  add(item) {
    this.data.push(item);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();
    this.user = 'olds';
  }

  getUser() {
    return this.user;
  }

}

const mylist = new TodoList();

document.getElementById('newtodo').onclick = () => {
  mylist.add('New Todo');
};

console.log(mylist.getUser());
console.log(sum(1, 2));