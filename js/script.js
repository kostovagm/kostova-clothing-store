//--------------------------- << DATA OBJECTS & ARRAY >> ---------------------------------------//

/************************************************************************************************/

const dress1 = {
  image: `sweet-amber.jpg`,
  name: `Sweet Amber`,
  shortDescription: `Strapless summer dress`,
  currentPrice: 65.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`strawberry`, `raven`],
  size: [`xs`, `small`,`large`, `xlarge`],
};

const dress2 = {
  image: `flower-fantasy.jpg`,
  name: `Flower Fantasy`,
  shortDescription: `Beach sundress`,
  currentPrice: 60.00,
  isOnSale: true,
  pastPrice: 120.00,
  color: [`ivory`, `purple`, `ivory`],
  size: [`small`, `medium`],
};

const dress3 = {
  image: `red-mermaid.jpg`,
  name: `Red Mermaid`,
  shortDescription: `Party dress`,
  currentPrice: 65.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`strawberry`, `brown`],
  size: [`xs`, `small`, `medium`],
};

const dress4 = {
  image: `memory-lane.jpg`,
  name: `Memory Lane`,
  shortDescription: `Retro dress`,
  currentPrice: 70.00,
  isOnSale: true,
  pastPrice: 150.00,
  color: [`pink`, `ivory`],
  size: [`xs`, `small`, `medium`],
};

const dress5 = {
  image: `skater-girl.jpg`,
  name: `Skater Girl`,
  shortDescription: `Skater dress`,
  currentPrice: 55.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`raven`, `pink`],
  size: [`xs`, `small`, `medium`, `large`],
};

const dress6 = {
  image: `everyday-vibes.jpg`,
  name: `Everyday Vibes`,
  shortDescription: `Everyday dress`,
  currentPrice: 45.00,
  isOnSale: true,
  pastPrice: 60.00,
  color: [`ivory`, `pink`],
  size: [`small`, `medium`, `large`, `xlarge`],
};

const dress7 = {
  image: `dream-wedding.jpg`,
  name: `Dream Wedding`,
  shortDescription: `Wedding dress`,
  currentPrice: 500.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`ivory`],
  size: [`xs`, `small`, `medium`, `large`, `xlarge`],
};

const dress8 = {
  image: `another-monday.jpg`,
  name: `Another Monday`,
  shortDescription: `Business casual dress`,
  currentPrice: 60.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`raven`, `pink`],
  size: [`small`, `medium`, `large`, `xlarge`],
};

const dress9 = {
  image: `prom-queen.jpg`,
  name: `Prom Queen`,
  shortDescription: `Prom dress`,
  currentPrice: 200.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`purple`, `raven`],
  size: [`xs`, `small`, `medium`, `large`],
};

const dress10 = {
  image: `maternity-dress.jpg`,
  name: `Pretty in Pink`,
  shortDescription: `Maternity dress`,
  currentPrice: 60.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`pink`, `strawberry`],
  size: [`xs`, `small`, `large`, `xlarge`],
};

const dress11 = {
  image: `little-black-dress.jpg`,
  name: `Little Black Dress`,
  shortDescription: `Formal Dress`,
  currentPrice: 60.00,
  isOnSale: true,
  pastPrice: 50.00,
  color: [`raven`],
  size: [`medium`, `large`, `xlarge`],
};

const dress12 = {
  image: `sweater-dress.jpg`,
  name: `Winter Hug`,
  shortDescription: `Sweater Dress`,
  currentPrice: 50.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`brown`, `strawberry`],
  size: [`xs`, `small`, `medium`, `large`, `xlarge`],
};

const dress13 = {
  image: `disco-dress.jpg`,
  name: `Dancing Queen`,
  shortDescription: `Disco Dress`,
  currentPrice: 50.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`brown`, `strawberry`, `raven`],
  size: [`xs`, `small`, `large`, `xlarge`],
};

const dress14 = {
  image: `bridesmaid-dress.jpg`,
  name: `Bridesmaid's Dream`,
  shortDescription: `Bridesmaid Dress`,
  currentPrice: 200.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`pink`, `purple`],
  size: [`xs`, `small`, `medium`, `xlarge`],
};

const dress15 = {
  image: `halloween-dress.jpg`,
  name: `Forrest Fairy`,
  shortDescription: `Halloween Dress`,
  currentPrice: 100.00,
  isOnSale: false,
  pastPrice: 0,
  color: [`ivory`, `pink`],
  size: [`xs`],
};

const productListAr = [dress1, dress2, dress3, dress4, dress5, dress6, dress7, dress8, dress9, dress10, dress11, dress12, dress13, dress14, dress15];

let currentProductListAr = productListAr;

//--------------------------- << HELPER FUNCTIONS (Products) >> ---------------------------------------//

/************************************************************************************************/

//Function takes a prod (object) and returns a string of formatted HTML 
const formatProductToHtmlString = (prod) => {
  let oldPrice = ``;
  let newPriceColor = ``;
  if (prod.isOnSale) {
    oldPrice = `<span class="old-price">$${prod.pastPrice}</span>`
    newPriceColor = `emphasis`
  };

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
};

//Function takes an array of products and returns all products as a string of formatted HTML
const getAllProductsAsHTML = (prods) => {
  return prods.map (formatProductToHtmlString).join(``);
};

//Function takes an array of products and appends their formatted HTML string to the HTMl container (<ul>)
const printAllProducts = (prods) => {
  $productList.innerHTML = getAllProductsAsHTML (prods);
  //If statement checks the length of an array to ensure that there are only as many pages displayed as there are products.
  if (currentProductListAr.length <= productsPerPage) {
    document.getElementById(`show-page-two`).classList.add(`hide`);
    document.getElementById(`show-page-three`).classList.add(`hide`)
  } else if (currentProductListAr.length > productsPerPage && currentProductListAr.length <= productsPerPage*2) {
    document.getElementById(`show-page-three`).classList.add(`hide`);
    document.getElementById(`show-page-two`).classList.remove(`hide`)
  } else if (currentProductListAr.length > productsPerPage*2) {
    document.getElementById(`show-page-two`).classList.remove(`hide`);
    document.getElementById(`show-page-three`).classList.remove(`hide`)
  }
};


//--------------------------- << HELPER FUNCTIONS (FILTERS) >> ---------------------------------------//

/************************************************************************************************/
colorListAr = [];
sizeListAr = [`xs`, `small`, `medium`, `large`, `xlarge`];

// Function takes an array of products and prints filter buttons for all colors available in the array;
const printColorBtnsForAllProducts = (prods) => {
  prods.forEach ( prod => {
      prod.color.forEach ((color) => {
        if (!colorListAr.includes(color)) {
          document.getElementById(`color-filters`).innerHTML+=`
          <li class="inline-block">
            <button type="button" class="color-box color-${color}" data-color="${color}" id="${color}-color-btn" name="refine-by-${color}">
            </button>
          </li>`
    
          colorListAr.push(color);
        }
      })
    })
  };

// Function prints all available color filters
printColorBtnsForAllProducts(productListAr);


//Function takes a menu type, and if its container contains the class "show", returns true; else, retuns false;
const checkingMenuStatus = (menutype) => {
  let section;
  if (menutype == 'sort') {
    section=$openSortSection;
  } else {
    section=$openFilterSection 
  }

  return section.classList.contains (`active`);
};


//--------------------------- << HELPER FUNCTIONS (SEARCH) >> ---------------------------------------//

/************************************************************************************************/

//Function takes a query and prints all element within a specified array that match the query
const showMatchingNames = (query) => {
  printAllProducts(productListAr.filter(product => product.name.toLowerCase().includes(query.toLowerCase())));
};



//--------------------------- << HELPER FUNCTIONS (PAGINATION) >> ---------------------------------------//

/************************************************************************************************/
let page = 1;
let productsPerPage = 5;

//Function takes an array of products and returns the array sliced to the first five products 
const sliceAnyArray = (prods, start) => {
  return prods.slice(start, start + productsPerPage);
};


//---------------------------------- << DOM VARIABLES >> ---------------------------------------//

/************************************************************************************************/

const $productList = document.getElementById(`product-list`);                            //Products container 

const $loadAllBtn = document.getElementById(`load-all-btn`);                             //Load All button

const $sortHlBtn = document.getElementById(`sort-hl-btn`);                               //Sort H-L button

const $sortLhBtn = document.getElementById(`sort-lh-btn`);                               //Sort L-H button

const $sortBySaleBtn = document.getElementById(`sort-by-sale-btn`);                      //Sale first button

const $lowestPriceRangeBtn = document.getElementById(`lowest-price-range-btn`);          //Lowest price range button

const $mediumPriceRangeBtn = document.getElementById(`medium-price-range-btn`);          //Medium price range button

const $highestPriceRangeBtn = document.getElementById(`highest-price-range-btn`);        //Highest price range button

const $showPageOneBtn = document.getElementById(`show-page-one`);                        //Show page 1 button

const $showPageTwoBtn = document.getElementById(`show-page-two`);                        //Show page 2 button

const $showPageThreeBtn = document.getElementById(`show-page-three`);                    //Show page 3 button

const $menuToggleBtn = document.getElementById(`menu-toggle-btn`)                        //Toggle main menu

const $openMenuSection = document.getElementById(`open-menu-section`);                   //Open main menu section

const $sortToggleBtn = document.getElementById(`sort-toggle-btn`)                        //Toggle sort menu

const $openSortSection = document.getElementById(`open-sort-section`);                   //Open sort section

const $filterToggleBtn = document.getElementById(`filter-toggle-btn`)                    //Toggle filter menu

const $openFilterSection = document.getElementById(`open-filter-section`);               //Open filter menu section



//--------------------------------- << MAIN FUNCTIONS>> ---------------------------------------//

/************************************************************************************************/

//Load a list of six default products as window loads
// window.addEventListener(`load`, printAllProducts (productListAr.slice(0,productsPerPage)));



//---------------------------------- << SORT BUTTONS >> ----------------------------------------//

/************************************************************************************************/

//When button is clicked, all products appear
$loadAllBtn.addEventListener(`click`, (event) => {
  page = 1; //reset
  currentProductListAr = productListAr; //current product array is default array
  printAllProducts (sliceAnyArray (currentProductListAr, (page-1)*productsPerPage));  //prints only first five products in current product array
});

//When button is clicked, sort items by price (h-l)
$sortHlBtn.addEventListener(`click`, (event) => {
  page = 1; //reset
  currentProductListAr = productListAr.map(val => val).sort((a,b) => b.currentPrice - a.currentPrice); //current product array is sorted (h-l)
  printAllProducts (sliceAnyArray (currentProductListAr, (page-1)*productsPerPage)); //prints only first five products in current product array
});

//When button is clicked, sort items by price (l-h)
$sortLhBtn.addEventListener(`click`, (event) => {
  page = 1; //reset
  currentProductListAr = productListAr.map(val => val).sort((a,b) => a.currentPrice - b.currentPrice);  //current product array is sorted (l-h)
  printAllProducts (sliceAnyArray (currentProductListAr, (page-1)*productsPerPage)); //prints only first five products in current product array
});

//When button is clicked, sort items by sale items first
$sortBySaleBtn.addEventListener(`click`, (event) => {
  page = 1; //reset
  currentProductListAr = productListAr.map(val => val).sort((a,b) => Number(b.isOnSale) - Number(a.isOnSale)); //current product array is sorted (sale first)
  printAllProducts (sliceAnyArray (currentProductListAr, (page-1)*productsPerPage)); //prints only first five products in current product array
});


//---------------------------------- << FILTER BY COLOR AND SIZE BUTTONS >> ------------------------------//

/************************************************************************************************/

//When a color button is clicked, products of this color appear
colorListAr.forEach (color => {
  document.getElementById(`${color}-color-btn`).addEventListener(`click`, (event) => {
    page=1; //reset
    currentProductListAr = productListAr.map(val => val).filter(prod => prod.color.includes(event.target.dataset.color)); //current product array contains only items of a specific color
    printAllProducts (sliceAnyArray (currentProductListAr, (page-1)*productsPerPage)); //prints only first five products in current product array
  });
})


//When a size button is clicked, products of this size appear
sizeListAr.forEach (size => {
  document.getElementById(`${size}-size-btn`).addEventListener(`click`, (event) => {
    page=1; //reset
    currentProductListAr = productListAr.map(val => val).filter(prod => prod.size.includes(event.target.dataset.size));  //current product array contains only items of a specific size
    printAllProducts (sliceAnyArray (currentProductListAr, (page-1)*productsPerPage)); //prints only first five products in current product array
  });
})

//---------------------------------- << FILTER BY PRICE BUTTONS >> ------------------------------//

/************************************************************************************************/

//When button is clicked, products in the lowest price range appear
$lowestPriceRangeBtn.addEventListener(`click`, (event) => {
  page = 1; //reset
  currentProductListAr = productListAr.map(val => val).filter(prod => prod.currentPrice < 60);  //current product array contains only items under $60
  printAllProducts (sliceAnyArray (currentProductListAr, (page - 1)*productsPerPage)); //prints only first five products in current product array
});

//When button is clicked, products in the middle price range appear.
$mediumPriceRangeBtn.addEventListener (`click`, (event) => {
  page = 1; //reset
  currentProductListAr = productListAr.map(val => val).filter(prod => prod.currentPrice >= 60 && prod.currentPrice <= 100 );  //current product array contains only items  $60 - $100
  printAllProducts (sliceAnyArray (currentProductListAr, (page - 1)*productsPerPage)); //prints only first five products in current product array
});

//When button is clicked, products in the highest price range appear.
$highestPriceRangeBtn.addEventListener (`click`, (event) => {
  page = 1; //reset
  currentProductListAr = productListAr.map(val => val).filter(prod => prod.currentPrice > 100);  //current product array contains only items over $100
  printAllProducts (sliceAnyArray (currentProductListAr, (page - 1)*productsPerPage)); //prints only first five products in current product array
});



//---------------------------------- << PAGINATION BUTTONS>> ----------------------------------------//

/************************************************************************************************/

//When clicked, button shows a section of first 5 prods
$showPageOneBtn.addEventListener(`click`, (event) => {
  printAllProducts (sliceAnyArray (currentProductListAr, productsPerPage-productsPerPage));
  page = 1;
});

//When clicked, button shows a section of second 5 prods
$showPageTwoBtn.addEventListener(`click`, (event) => {
  printAllProducts (sliceAnyArray (currentProductListAr, productsPerPage));
  page = 2;
});

//When clicked, button shows a section of third 5 prods
$showPageThreeBtn.addEventListener(`click`, (event) => {
  printAllProducts (sliceAnyArray (currentProductListAr, productsPerPage*2));
  page = 3;
});


//---------------------------------- << OPEN/CLOSE BUTTONS >> ----------------------------------------//

/************************************************************************************************/

//When clicked, button toggles main menu
$menuToggleBtn.addEventListener(`click`, (event) => {
  $openMenuSection.classList.toggle(`active`);
});

//When clicked, button toggles sort section
$sortToggleBtn.addEventListener(`click`, (event) => {
  $openSortSection.classList.toggle(`active`);
  let isOpen = checkingMenuStatus (`filter`); 
  //If statement checks if the competing filter menu is open, and if it is, closes it;
  if (isOpen) {
    $openFilterSection.classList.remove(`active`);
  }
});

//When clicked, button toggles filter section
$filterToggleBtn.addEventListener(`click`, (event) => {
  $openFilterSection.classList.toggle(`active`);
  let isOpen = checkingMenuStatus (`sort`); 
  //If statement checks if the competing sort menu is open, and if it is, closes it;
  if (isOpen) {
    $openSortSection.classList.remove(`active`);
  }
});

//---------------------------------- << SEARCH BOX BUTTON >> ----------------------------------------//

/************************************************************************************************/

//When button is clicked, print all elements in the array that match the query specified in the search box
document.getElementById(`search`).addEventListener(`submit`, (event) => {
  //Stops the form submitting to a new page
  event.preventDefault();

  showMatchingNames(document.getElementById(`search`).query.value);
  //Clears query from form after search is completed
  document.getElementById(`search`).reset();
});

