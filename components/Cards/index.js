// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsCont = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const jsArticles = response.data.articles.javascript;
        const bootstrapArticles = response.data.articles.bootstrap;
        const techArticles = response.data.articles.technology;
        const jqueryArticles = response.data.articles.jquery;
        const nodeArticles = response.data.articles.node;

        jsArticles.forEach(article => {
            cardsCont.appendChild(cardCreator(article));
        });
        bootstrapArticles.forEach(article => {
            cardsCont.appendChild(cardCreator(article));
        });
        techArticles.forEach(article => {
            cardsCont.appendChild(cardCreator(article));
        });
        jqueryArticles.forEach(article => {
            cardsCont.appendChild(cardCreator(article));
        });
        nodeArticles.forEach(article => {
            cardsCont.appendChild(cardCreator(article));
        });
    })
    .catch(error => {
        debugger

    });


function cardCreator(cardSettings) {

    const {
        headline,
        authorPhoto,
        authorName
    } = cardSettings;

    const card = document.createElement('div');
    card.classList.add('card');

    const cardHeadline = document.createElement('div');
    cardHeadline.classList.add('headline');
    cardHeadline.textContent = headline;

    const cardAuthor = document.createElement('div');
    cardAuthor.classList.add('author');

    const cardAuthorImgContainer = document.createElement('div');
    cardAuthorImgContainer.classList.add('img-container');

    const cardAuthorImg = document.createElement('img');
    cardAuthorImg.setAttribute('src', authorPhoto);
    cardAuthorImgContainer.appendChild(cardAuthorImg);

    const cardAuthorName = document.createElement('span');
    cardAuthorName.textContent = `By: ${authorName}`;

    cardAuthor.append(cardAuthorImgContainer, cardAuthorName);

    card.append(cardHeadline, cardAuthor);

    return card;
}