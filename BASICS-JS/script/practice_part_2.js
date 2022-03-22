/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actore: {},
  genres: [],
  privat: false
};

if(personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов')
} else if (personalMovieDB.count >= 10 || personalMovieDB.count <= 30) {
  alert('Вы классический зритель')
} else if(personalMovieDB.count > 30) {
  alert('Вы киноман')
} else {
  alert('Произошла ошибка')
}

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

console.log(personalMovieDB);