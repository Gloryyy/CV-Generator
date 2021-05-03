

/* 1 - Define your element as a variable for darggable */
const draggable_list = document.getElementById('draggable-list');
/* const check = document.getElementById('check'); */
​
/* 2- Store your main titles in an array */
const resumeTitles = [
  'OBJECTIVE',
  'EDUCATION',
  'EXPERIENCE',
  'SKILLS',
  'WORKS',
​
];
​
/* 3- Store listitems. Create an empty array for the listitems. When you drag, you will store new list in this empty array. Also, call a function to store your new list inside the HTML like number, title */
​
// Store listitems
const listItems = [];
​
// Define a variable for start index
let dragStartIndex;
​
// call your createList function
createList();
​
/* 4- Create a function (createList) to store your new list inside the HTML like number, title. setAttribute data-index to the empty array.  Insert list items into DOM */
​
// Insert list items into DOM
function createList() {
​
  [...resumeTitles]
   
  // Insert Resume mainTitles and index number to the HTML
    .forEach((mainTitle, index) => {
        
    // create li element into listItem empty array
      const listItem = document.createElement('li');
    // setAttriute with the name "data-index" and the value index
      listItem.setAttribute('data-index', index);
    
      // Add your HTML to the listItem
      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${mainTitle}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `;
    
        // push your items to the list
      listItems.push(listItem);
        // append listItem to the ul
      draggable_list.appendChild(listItem);
    });
​
  addEventListeners();
}
​
/* 5- dragStart function to getAttribute data-index of li to the dragStartIndex */
function dragStart() {
  // console.log('Event: ', 'dragstart');
  // getAttribute "data-index" with the "closest li" (closet element upto the given) and add into dargStartIndex variable.
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}
​
/* 6- dragOver function just to prevent Default  */
function dragOver(e) {
  // console.log('Event: ', 'dragover');
  e.preventDefault();
}
​
/* 7- dragDrop function : getAttribute from data-index and call swapItems function below */
function dragDrop() {
  // console.log('Event: ', 'drop');
   // getAttribute "data-index" and add into dargEndIndex variable.
  const dragEndIndex = +this.getAttribute('data-index');
  // call swapItems function and pass dragStartIndex, dragEndIndex parameters
  swapItems(dragStartIndex, dragEndIndex);
​
/*   this.classList.remove('over'); */
}
​
/* 8- swapItems function: Swap list items that are drag and drop   */
// Swap list items that are drag and drop !!!
function swapItems(fromIndex, toIndex) {
    //We create our main titles inside the draggable class and now, writing querySelector to swap the titles order between eachothers
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');
​
  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}
​
/* 9- function addEventListeners forEach dargStart, dragOver, dropDrop  */
function addEventListeners() {
    // .draggable => mainTitle div
  const draggables = document.querySelectorAll('.draggable');
  // .draggable-list => ul
  const dragListItems = document.querySelectorAll('.draggable-list li');
​
  // dragStart to darggable class
  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
  });
​
  dragListItems.forEach(item => {
     // preventDefault with dragOver 
    item.addEventListener('dragover', dragOver);
    // dragDrop to dragListItems
    item.addEventListener('drop', dragDrop);
​
  });
}

