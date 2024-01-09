import fetchRequest from './fetchRequest.js';
import preload from './preload.js';
import {showFoundNews} from './showFoundNews.js';
import {country} from './renderNews.js';

export const renderFoundNews = (query, URL, params) => {
  const getFoundNews = async () => {
    preload.show();
    document.querySelector('main').innerHTML = '';
    const news = await fetchRequest(URL, params, {
      callback: showFoundNews,
    });
  };
  
  let language = '';
  
  const countryToLanguage = {
    'us': 'en',
    'gb': 'en',
    'de': 'de',
    'ru': 'ru'
  };

  language = countryToLanguage[country] || '';
  
  params = '?q=' + query + '&language=' + language + '&pageSize=8';
  
  getFoundNews()
    .then(data => {
      preload.remove();
    });
}


