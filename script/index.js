import {renderNews} from './renderNews.js';
import {renderFoundNews} from './renderFoundNews.js';
import {renderNewsAfterSearch} from './renderNewsAfterSearch.js';

const URLNews = './headlines.json';
// const URLNews = 'https://newsapi.org/v2/top-headlines';
const URLSearch = './search.json';
// const URLSearch = 'https://newsapi.org/v2/everything';

const form = document.querySelector('.form');
const params = '?country=ru&pageSize=8';

const init = async () => {
  await renderNews(URLNews, params);
  const formInput = document.querySelector('.form__input');
  form.addEventListener('click', async (e) => {
    e.preventDefault();
    const target = e.target;
    if (target.closest('.form__search')) {
      const query = formInput.value;
      await renderFoundNews(query, URLSearch, params);
      await renderNewsAfterSearch(URLNews, params);
    }
  });
};
await init();

