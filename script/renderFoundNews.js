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
  
  if (country === 'us' || country === 'gb') {
    language = 'en';
  } else if (country === 'de') {
    language = 'de';
  } else if (country === 'ru') {
    language = 'ru';
  }
  
  params = '?q=' + query + '&language=' + language + '&pageSize=8';
  
  getFoundNews()
    .then(data => {
      preload.remove();
    });
}


