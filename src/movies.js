// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directorsArr = movies.map((movie) => movie.director);
  return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const stevenSpielbergMovies = movies.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );
  return stevenSpielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) {
    return 0;
  }
  const scoresArr = movies.map((movie) => movie.score);
  const avg = scoresArr.reduce((accumulator, currentNumber, index) => {
    if (index === scoresArr.length - 1) {
      accumulator += currentNumber;
      return accumulator / scoresArr.length;
    }
    return accumulator + currentNumber;
  });
  return avg;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));
  if (!dramaMovies.length) {
    return 0;
  }
  const dramaMoviesScores = dramaMovies.map((movie) => movie.score);
  const avg = dramaMoviesScores.reduce((accumulator, currentNumber, index) => {
    if (index === dramaMoviesScores.length - 1) {
      accumulator += currentNumber;
      return accumulator / dramaMoviesScores.length;
    }
    return accumulator + currentNumber;
  });
  return avg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesYears = movies.map((movie) => movie.year);
  const moviesByYear = moviesYears.sort((a, b) => a < b);
  return moviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesTitles = movies.map((movie) => movie.title);
  const moviesAlphabeticalOrder = moviesTitles.sort((a, b) =>
    a.localeCompare(b)
  );
  return moviesAlphabeticalOrder;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
