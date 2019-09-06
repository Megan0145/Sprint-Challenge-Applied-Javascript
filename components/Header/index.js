// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component


//Wasn't sure whether to set the textContent of the date, heading and temperature to 
//fixed values in example above WITHIN my component, or to have my component accept
//variable data as parameter
//In the end, declared variable newHeading and passed it into component

function Header(headerSettings) {

    const {
        date,
        heading,
        temp
    } = headerSettings;

    const header = document.createElement('div');
    header.classList.add('header');

    const headerDate = document.createElement('span');
    headerDate.classList.add('date');
    headerDate.textContent = date;

    const headerH1 = document.createElement('h1');
    headerH1.textContent = heading;

    const headerTemp = document.createElement('span');
    headerTemp.classList.add('temp');
    headerTemp.textContent = temp;

    header.append(headerDate, headerH1, headerTemp);

    return header;

}

const headerContainer = document.querySelector('.header-container');
const newHeader = {
    date: 'Friday September 6',
    heading: 'Lambda Times',
    temp: '98°'
};
headerContainer.appendChild(Header(newHeader));