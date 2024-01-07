import {renderArticles} from './renderArticles.js';

export const showNews = (err, data) => {
  if (err) {
    console.warn(err, data);
    return;
  }
  const main = document.querySelector('.main');
  const h1 = document.createElement('h1');
  h1.classList.add('main__title');
  h1.textContent = 'Свежие новости';
  const container = document.createElement('div');
  container.classList.add('container');
  const headlines = document.createElement('div');
  headlines.classList.add('headlines');
  
  const news = data.articles;
  
  headlines.append(renderArticles(news));
  
  container.append(headlines);
  const line = document.createElement('div');
  line.classList.add('line');
  main.append(h1, line, container);
};


