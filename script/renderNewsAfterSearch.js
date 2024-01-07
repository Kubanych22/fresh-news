import preload from './preload.js';
import fetchRequest from './fetchRequest.js';
import {showNews} from './showNews.js';
import {country} from './renderNews.js';

export const renderNewsAfterSearch = (URL, params) => {
  const getNews = async () => {
    preload.show();
    const news = await fetchRequest(URL, params, {
      callback: showNews,
    });
  };
  params = '?country=' + country + '&pageSize=4';
  getNews()
    .then(
      () => {
      preload.remove();
    });
}
