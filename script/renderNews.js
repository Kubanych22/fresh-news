import fetchRequest from './fetchRequest.js';
import {showNews} from './showNews.js';
import preload from './preload.js';

const countries = ['ru', 'us', 'gb', 'de', 'br'];
let selectedIndex = 0;
export let country = 'ru';

export const renderNews = (URL, params) => {
  const getNews = async () => {
    preload.show();
    document.querySelector('main').innerHTML = '';
    const news = await fetchRequest(URL, params, {
      callback: showNews,
    });
  };
  
  getNews()
    .then(() => {
      preload.remove();
    });
  
  const select = document.querySelector('.select');
    select.addEventListener('change', (e) => {
      e.preventDefault();
      selectedIndex = select.selectedIndex;
      country = countries[selectedIndex];
      params = '?country=' + country + '&pageSize=8';
      getNews()
        .then(() => {
          preload.remove();
        });
    });
}


