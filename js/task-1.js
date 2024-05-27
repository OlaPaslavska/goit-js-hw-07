
const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

// Виведення загальної кількості категорій
console.log(`Number of categories: ${categoriesItems.length}`);

// Перебір кожної категорії 
categoriesItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
    const categoryItemsCount = item.querySelectorAll('li').length;
    // виведення її заголовка 
    console.log(`Category: ${categoryTitle}`);
//  виведення кількості елементів
    console.log(`Elements: ${categoryItemsCount}`);
});
