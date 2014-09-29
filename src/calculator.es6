import {Anno} from './annotations.js';

@Anno
export class Calculator {
  constructor() {}

  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }
}