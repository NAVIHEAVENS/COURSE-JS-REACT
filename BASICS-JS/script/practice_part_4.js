/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
  count: null,
  movies: {},
  actore: {},
  genres: [],
  privat: false,
  start: function() {
    let answear = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
    while(answear == '' || answear == null || isNaN(answear)) {
      answear = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    this.count = answear
  },
  countMovie: function() {
    if(this.count < 10) {
      alert('Просмотрено довольно мало фильмов')
    } else if (this.count >= 10 && this.count <= 30) {
      alert('Вы классический зритель')
    } else if(this.count > 30) {
      alert('Вы киноман')
    } else {
      alert('Произошла ошибка')
    }
  },
  rememberMyFilms: function() {
    for(let questions = 0; questions < 2; questions++) {
  
      let lastMovie = prompt('Один из последних просмотренных фильмов?', '');
      while(lastMovie == '' || lastMovie == null || lastMovie.length >= 10) {
        alert('Error')
        lastMovie = prompt('Один из последних просмотренных фильмов?', '');
      }
    
      let yourRate = +prompt('На сколько оцените его?', '');
      while(yourRate == '' || yourRate == null) {
        alert('Error')
        yourRate = +prompt('На сколько оцените его?', '');
      }
      
      this['movies'][lastMovie] = yourRate;
    
    }
  },
  writeYourGenres: function() {
    for(let iterator = 1; iterator <= 2; iterator++) {
      let yourGenre = prompt(`Ваш любимый жанр под номером ${iterator}`, '')
  
      while(yourGenre == '' || yourGenre == null) {
        alert('Error')
        yourGenre = prompt(`Ваш любимый жанр под номером ${iterator}`, '')
      };
      this.genres[iterator - 1] = yourGenre;
    }
    this.genres.forEach(function(element, index) {
      console.log(`Любимый жанр ${index + 1} - это ${element}`)
    }) 
  },
  showMyDB: function() {
    if(this.privat == false) {
      console.log(this);
    };
  },
  toggleVisibleMyDB: function() {
    this.privat = !this.privat
  }
};

//personalMovieDB.start();
//personalMovieDB.countMovie();
//personalMovieDB.rememberMyFilms();
//personalMovieDB.writeYourGenres();
//personalMovieDB.toggleVisibleMyDB();
//personalMovieDB.showMyDB();