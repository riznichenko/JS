'use strict';

function LearnJS (first, second) {
    console.log(`Я выучил: ${first}`);
    callback();
}

function (done) {
    console.log('hello');
}
LearnJS ('или не выучил', done);