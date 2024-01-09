export const renderArticles = (data) => {
  const template = document.createDocumentFragment();
  const news = data.map((item) => {
    const card = document.createElement('div');
    card.classList.add('news__card');
    const img = document.createElement('img');
    img.classList.add('news__img');
    img.width = 270;
    img.height = 200;
    img.alt = 'Фотография на сервере недоступна';
    img.src = '../img/not-image.jpg';
    if (item.urlToImage) {
      img.src = item.urlToImage;
    }
    const newsTitle = document.createElement('p');
    newsTitle.classList.add('news__title');
    const newsLink = document.createElement('a');
    newsLink.classList.add('news__link');
    newsLink.target = '_blank';
    newsLink.href = item.url;
    newsLink.textContent = item.title;
    const newsLinkImg = document.createElement('a');
    newsLinkImg.classList.add('news__link-img');
    newsLinkImg.target = '_blank';
    newsLinkImg.href = item.url;
    newsLinkImg.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none">
        <path d="M8 6H18V16M18 6L6 18L18 6Z" stroke="#F2994A" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round"/>
      </svg>
    `;
    
    const newsText = document.createElement('p');
    newsText.classList.add('news__text');
    newsText.textContent = item.description;
    
    const newsDetails = document.createElement('div');
    newsDetails.classList.add('news__details');
    
    let date = new Date(Date.parse(item.publishedAt));
    const newsDate = document.createElement('p');
    newsDate.classList.add('news__date');
    newsDate.textContent = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
    
    const newsTime = document.createElement('p');
    newsTime.classList.add('news__time');
    newsTime.textContent = date.getHours() + ':' + date.getMinutes();
    
    const newsAuthor = document.createElement('p');
    newsAuthor.classList.add('news__author');
    newsAuthor.textContent = item.author;
    
    newsDetails.append(newsDate, newsTime, newsAuthor);
    newsTitle.append(newsLink, newsLinkImg);
    card.append(img, newsTitle, newsText, newsDetails);
    return card;
  });
  template.append(...news)
  return template;
}
