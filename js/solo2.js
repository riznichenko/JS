"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/*let num = 8;
while (num) {
console.log(num);
num--;
}

for(let num = 0; num < 3; num++){
    console.log(`Число ${num}`);
}

let num = 0;
while (num < 3) {
    console.log(`Число: ${num}`);
    num++;
}


let i = 0;
while (i < 2) {
    let a = prompt('Один из последних просмотренных фильмов?', ''),
          b = +prompt('На сколько оцените его?', '');
    if (a != '' && b != '' && a != null && b != null && a.length <50){
      personalMovieDB.movies[a]=b;
      console.log('done');
      } else {
      console.log('error');
      i--;
      }
}
*/
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = +prompt('На сколько оцените его?', '');
if (a != '' && b != '' && a != null && b != null && a.length <50){
      personalMovieDB.movies[a]=b;
      console.log('done');
      } else {
      console.log('error');
      i--;
      }
}


if (personalMovieDB.count <10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
 } else if (personalMovieDB.count > 30) {
     console.log('Вы Киноман!');
 } else {
    console.log('Произошла ошибка');
}

personalMovieDB.movies[a] = b;

console.log(personalMovieDB);