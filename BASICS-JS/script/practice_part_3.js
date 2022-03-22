/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

function start () {
  let answear = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while(answear == '' || answear == null || isNaN(answear)) {
    answear = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
  return answear
}
let numberOfFilms = start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actore: {},
  genres: [],
  privat: false
};

function countMovie () {
  if(personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов')
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель')
  } else if(personalMovieDB.count > 30) {
    alert('Вы киноман')
  } else {
    alert('Произошла ошибка')
  }
}
countMovie();

function rememberMyFilms () {
  for(let questions = 0; questions < 1; questions++) {

    let lastMovie = prompt('Один из последних просмотренных фильмов?', '');
    console.log(lastMovie.length)
    while(lastMovie == '' || lastMovie == null || lastMovie.length >= 10) {
      alert('Error')
      lastMovie = prompt('Один из последних просмотренных фильмов?', '');
    }
  
    let yourRate = +prompt('На сколько оцените его?', '');
    while(yourRate == '' || yourRate == null) {
      alert('Error')
      yourRate = +prompt('На сколько оцените его?', '');
    }
    
    personalMovieDB['movies'][lastMovie] = yourRate;
  
  }
}
rememberMyFilms();

function showMyDB () {
  if(personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  };
}
showMyDB();

function writeYourGenres () {
  for(let iterator = 1; iterator <= 3; iterator++) {
    let yourGenre = prompt(`Ваш любимый жанр под номером ${iterator}`, '')

    while(yourGenre == '' || yourGenre == null) {
      alert('Error')
      yourGenre = prompt(`Ваш любимый жанр под номером ${iterator}`, '')
    };
    personalMovieDB.genres[iterator - 1] = yourGenre;
  };
}
writeYourGenres();