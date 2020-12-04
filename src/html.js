import store from './store';


const generateHtml = function(htmlList) {
    let listHtml = htmlList.map(array => generateUi(array));  
    return `<div id="buttons" class="buttons">
    <div class="for-new-button">
        <button id="new-button" class="new-button">Add New</button>
    </div>
    <select name="filter" id="filter" class="filter">
    <option value="0" ${(store.storeItems.filter === '0') ? 'selected' : ''}>Filter By Rating</option> 
    <option value="0" ${(store.storeItems.filter === '0') ? 'selected' : ''}>Show All</option>
    <option value="1" ${(store.storeItems.filter === '0') ? 'selected' : ''}>Hide unrated bookmarks</option>
    <option value="2" ${(store.storeItems.filter === '2') ? 'selected' : ''}>Show only 2 stars and up</option>
    <option value="3" ${(store.storeItems.filter === '3') ? 'selected' : ''}>Show only 3 stars and up</option>
    <option value="4" ${(store.storeItems.filter === '4') ? 'selected' : ''}>Show only 4 stars and up</option>
    <option value="5" ${(store.storeItems.filter === '5') ? 'selected' : ''}>Show only 5 stars</option>
    </select>
</div>
<div class="main-display" id="main-display">
${listHtml.join('')}
</div>`
}

const generateUi = function (array) {
    if (array.rating >= store.storeItems.filter) {
        if(array.expanded === true){
            return panelView(array);
        } else {
            return defaultView(array);
        }
    }
}



const defaultView = function (array) {
    let displayRating;
    let starClicked = array.rating;
    const starHTML = `<span class="fa fa-star checked"></span>`;
    displayRating = starHTML.repeat(starClicked);
    return `<div class="content">
            <button type="button" class="collapsible" id="bookmark-content" data-bookmark-id="${array.id}">
                <div class="button-text" id="button-text">${array.title}</div>
                <div class="rate">
                    ${displayRating}
                </div>
            </button> </div>
            `
}

const panelView = function (array) {
    let displayRating;
    let starClicked = array.rating;
    const starHTML = `<span class="fa fa-star checked"></span>`;
    displayRating = starHTML.repeat(starClicked);
    return `<div class="content">
    <button type="button" class="collapsible" id="bookmark-content" data-bookmark-id="${array.id}">
        <div class="button-text" id="button-text">${array.title}</div>
        <div class="rate">
            ${displayRating}
        </div>
    </button> </div>
    <div class="panel">
    <div class="drop-down-button">
    <button class="visit-site" onclick="window.open('${array.url}','_blank')">Visit Site</button>
    <button class="delete-button" id="delete-button" data-bookmark-id=${array.id}> Delete</button>
    </div>
    <p id='drop-down-text'>
        ${array.desc}           
    </p>
</div>` 
}

function addBookmark() {
    return `<div class="add-bookmark">
    <form class="form-add">
        <section class="url-input">
        <label for="url">Add new bookmark:</label>
        <input type="text" name="url" id="enter-link" placeholder="enter URL here"required>
        </section> 
            <article class="inner-box">
                <section class="name-input">
                <label for="title">Enter title:</label>
                <input type="text" name="title" id="enter-title" placeholder="Enter title here" required>
                </section>
                    <section class="ratings">
                        <p class="ratings-title">Rating:</p>
                        <input id="1" name="rating" type="radio" value="1" class="radio-btn hide">
                        <label for="1">1</label>
                        <input id="2" name="rating" type="radio" value="2" class="radio-btn hide">
                        <label for="2">2</label>
                        <input id="3" name="rating" type="radio" value="3" class="radio-btn hide">
                        <label for="3">3</label>
                        <input id="4" name="rating" type="radio" value="4" class="radio-btn hide">
                        <label for="4">4</label>
                        <input id="5" name="rating" type="radio" value="5" class="radio-btn hide">
                        <label for="5">5</label>
                    </section>
                <section class="description-area">
                    <p>Enter description:</p>
                    <textarea name="desc" id="input-description"></textarea>
                </section>
            </article>
            <section class="form-buttons">
            <button class="cancel-button" default>Cancel</button>
            <button type="submit" class="submit-form">Submit</button>
            </section>
    </form>
</div>`
}



export default {
    generateHtml,
    addBookmark
}