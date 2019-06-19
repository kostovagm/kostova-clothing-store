
//--------------------------- << DATA OBJECTS & ARRAY >> ---------------------------------------//

const dress1 = {
  image: `sweet-amber.jpg`,
  name: `Sweet Amber`,
  shortDescription: `Strapless summer dress`,
  currentPrice: 65.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`strawberry`]
};

const dress2 = {
  image: `flower-fantasy.jpg`,
  name: `Flower Fantasy`,
  shortDescription: `Beach sundress`,
  currentPrice: 60.00,
  isOnSale: true,
  pastPrice: 120.00,
  color: [`ivory`]
};

const dress3 = {
  image: `red-mermaid.jpg`,
  name: `Red Mermaid`,
  shortDescription: `Party dress`,
  currentPrice: 65.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`strawberry`]
};

const dress4 = {
  image: `memory-lane.jpg`,
  name: `Memory Lane`,
  shortDescription: `Retro dress`,
  currentPrice: 70.00,
  isOnSale: true,
  pastPrice: 150.00,
  color: [`pink`]
};

const dress5 = {
  image: `skater-girl.jpg`,
  name: `Skater Girl`,
  shortDescription: `Skater dress`,
  currentPrice: 55.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`raven`]
};


const dress6 = {
  image: `everyday-vibes.jpg`,
  name: `Everyday Vibes`,
  shortDescription: `Everyday dress`,
  currentPrice: 45.00,
  isOnSale: true,
  pastPrice: 60.00,
  color: [`blue`]
};

const dress7 = {
  image: `dream-wedding.jpg`,
  name: `Dream Wedding`,
  shortDescription: `Wedding dress`,
  currentPrice: 500.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`ivory`]
};

const dress8 = {
  image: `another-monday.jpg`,
  name: `Another Monday`,
  shortDescription: `Business casual dress`,
  currentPrice: 60.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`raven`]
};

const dress9 = {
  image: `prom-queen.jpg`,
  name: `Prom Queen`,
  shortDescription: `Prom dress`,
  currentPrice: 200.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`purple`]
};

const dress10 = {
  image: `maternity-dress.jpg`,
  name: `Pretty in Pink`,
  shortDescription: `Maternity dress`,
  currentPrice: 60.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`pink`]
};

const dress11 = {
  image: `little-black-dress.jpg`,
  name: `Little Black Dress`,
  shortDescription: `Formal Dress`,
  currentPrice: 60.00,
  isOnSale: true,
  pastPrice: 50.00,
  color: [`raven`]
};

const dress12 = {
  image: `sweater-dress.jpg`,
  name: `Winter Hug`,
  shortDescription: `Sweater Dress`,
  currentPrice: 50.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`brown`]
};

const dress13 = {
  image: `disco-dress.jpg`,
  name: `Dancing Queen`,
  shortDescription: `Disco Dress`,
  currentPrice: 50.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`brown`]
};

const dress14 = {
  image: `bridesmaid-dress.jpg`,
  name: `Bridesmaid's Dream`,
  shortDescription: `Bridesmaid Dress`,
  currentPrice: 200.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`pink`]
};

const dress15 = {
  image: `halloween-dress.jpg`,
  name: `Forrest Fairy`,
  shortDescription: `Halloween Dress`,
  currentPrice: 100.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`ivory`]
};

const productListAr = [dress1, dress2, dress3, dress4, dress5, dress6, dress7, dress8, dress9, dress10, dress11, dress12, dress13, dress14, dress15];




//--------------------------- << HELPER FUNCTIONS >> ---------------------------------------//

//Function takes a prod (object) and returns a string of formatted HTML 
const formatProductToHtmlString = (prod) => {
  let oldPrice = ``;
  let newPriceColor = ``;
  if (prod.isOnSale) {
    oldPrice = `<span class="old-price">$${prod.pastPrice}</span>`
    newPriceColor = `emphasis`
  }

  return `
    <li class="product-overview">
      <div class="product-img">
        <a href="product.html">
          <img src="img/${prod.image}" alt="${prod.shortDescription}">
        </a>
      </div>
      <div class="product-primary-information">
        <h2 class="product-title">${prod.name}</h2>
        <p class="one-line-product-description">${prod.shortDescription}</p>
        <span class="price ${newPriceColor}">CAD $${prod.currentPrice}</span>
        ${oldPrice}
      </div>
    </li>`;
}

//Function takes an array of products and returns all products as a string of formatted HTML
const getAllProductsAsHTML = (prods) => {
  return prods.map (formatProductToHtmlString).join(``);
}

//Append the formatted HTML string for the product list to the HTMl container (<ul>)
const printAllProducts = (prods) => {
  $productList.innerHTML = getAllProductsAsHTML (prods);
};



//--------------------------- << DOM VARIABLES >> ---------------------------------------//

const $productList = document.getElementById(`product-list`);   //HTML container element

const $loadAllBtn = document.getElementById(`load-all-btn`);          //Load All button

const $sortHlBtn = document.getElementById(`sort-hl-btn`);            //H-L button

const $sortLhBtn = document.getElementById(`sort-lh-btn`);            //L-H button

const $sortBySaleBtn = document.getElementById(`sort-by-sale-btn`);   //Sale first button

const $lowestPriceRangeBtn = document.getElementById(`lowest-price-range-btn`); // Lowest Price Range Button

const $mediumPriceRangeBtn = document.getElementById(`medium-price-range-btn`); //Medium Price Range Button

const $highestPriceRangeBtn = document.getElementById(`highest-price-range-btn`); //Highest Price Range Button

const $strawberryColorBtn = document.getElementById(`strawberry-color-btn`); //Strawberry color button



//--------------------------- << MAIN FUNCTIONS>> ---------------------------------------//

//Print default products
// printAllProducts (productListAr.slice(0,8))



//----------------------------<< SORT BUTTONS >> ------------------------------------//

//When button is clicked, all products appear
$loadAllBtn.addEventListener(`click`, (event) => {
  printAllProducts (productListAr);
});

//When button is clicked, sort items by price (h-l)
$sortHlBtn.addEventListener(`click`, (event) => {
  printAllProducts (productListAr.map(val => val).sort((a,b) => b.currentPrice - a.currentPrice) );
});

//When button is clicked, sort items by price (l-h)
$sortLhBtn.addEventListener(`click`, (event) => {
  printAllProducts (productListAr.map(val => val).sort((a,b) => a.currentPrice - b.currentPrice) );
});

//When button is clicked, sort items by sale items first
$sortBySaleBtn.addEventListener(`click`, (event) => {
  printAllProducts (productListAr.map(val => val).sort((a,b) => Number(b.isOnSale) - Number(a.isOnSale)) );
});



//----------------------------<< FILTER BY COLOR BUTTONS >> ------------------------------------//
$strawberryColorBtn.addEventListener(`click`, (event) => {
  //printAllProducts (productListAr.map(val => val).filter(prod => event.target.classList.value.includes(prod.color)))
  //printAllProducts (productListAr.map(val => val).filter(prod => event.target.className.includes(prod.color)))
  printAllProducts (productListAr.map(val => val).filter(prod => prod.color.includes(event.target.dataset.color)))
  
});



//----------------------------<< FILTER BY PRICE BUTTONS >> ------------------------------------//

//When button is clicked, filter lowest price range 
$lowestPriceRangeBtn.addEventListener(`click`, (event) => {
  printAllProducts (productListAr.map(val => val).filter(prod => prod.currentPrice < 60))
});

//When button is clicked, filter middle price range 
$mediumPriceRangeBtn.addEventListener (`click`, (event) => {
  printAllProducts (productListAr.map(val => val).filter(prod => prod.currentPrice >= 60 && prod.currentPrice <= 100 )) 
});

//When button is clicked, filter highest price range 
$highestPriceRangeBtn.addEventListener (`click`, (event) => {
  printAllProducts (productListAr.map(val => val).filter(prod => prod.currentPrice > 100))
});