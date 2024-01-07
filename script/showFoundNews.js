import {renderArticles} from './renderArticles.js';

function declOfNum(number, words) {
  return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

export const showFoundNews = (err, data, params) => {
  if (err) {
    console.warn(err, data);
    return;
  }
  const query = params.split('&')[0].slice(3);
  const main = document.querySelector('.main');
  const h1 = document.createElement('h1');
  h1.classList.add('main__title');
  h1.textContent = `По вашему запросу \"${query}\" найдено ${data.totalResults} `
    + declOfNum(Number(data.totalResults),
    ['результат', 'результата', 'результатов']);
  const container = document.createElement('div');
  container.classList.add('container');
  const headlines = document.createElement('div');
  headlines.classList.add('headlines');
  
  const news = data.articles;
  
  headlines.append(renderArticles(news));
  
  container.append(headlines);
  const line = document.createElement('div');
  line.classList.add('line');
  main.prepend(h1, line, container);
};


