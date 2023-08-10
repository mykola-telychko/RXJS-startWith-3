import { startWith } from 'rxjs/operators';
import { interval } from 'rxjs';

// Example 3: startWith multiple values
// https://www.learnrxjs.io/learn-rxjs/operators/combination/startwith

//emit values in sequence every 1s
const srcInterval = interval(1000);
//start with -3, -2, -1
const example = srcInterval.pipe(startWith(-3, -2, -1));
//output: -3, -2, -1, 0, 1, 2....
const subscribe = example.subscribe((val) => console.log(val));
