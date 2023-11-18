//console.dir(document);
//console.log(document.domain);
//console.log(document.all);
//document.title="123"
//let title1=document.getElementById('header-title');
//console.log(title1);
//title1.textContent='hello';
//title1.innerText='bye';
//title1.innerHTML='<h3>Hello</h3>'
//console.log(title1);
//title1.style.borderBottom="solid 3px #000"
/*let items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);  
//items[1].textContent='Hello 2';
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';

for(i=0;i<items.length;i++)
{
    items[i].style.backgroundColor='#f4f4f4';
}
items[2].style.backgroundColor='green';
for(i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold';
}

let li=document.getElementsByTagName('li');
 
//li[1].textContent='Hello 2';
li[1].style.fontWeight='bold';
li[1].style.backgroundColor='yellow';

for(i=0;i<li.length;i++)
{
    li[i].style.backgroundColor='#f4f4f4';
}

let header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';

let input=document.querySelector('input');
input.value='Hello World';

let submit=document.querySelector('input[type="submit"]');
submit.value='Send';

let item=document.querySelector('.list-group-item');
item.style.color='red';

let lastitem=document.querySelector('.list-group-item:last-child');
lastitem.style.color='blue';

let seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor='green';

let thirditem=document.querySelector('.list-group-item:nth-child(3)');thirditem.style.display='none';

let titles=document.querySelectorAll('.title');
let odd=document.querySelectorAll('li:nth-child(odd)');
let even=document.querySelectorAll('li:nth-child(even)');

for(let i=0;i<odd.length;i++)
{
  odd[i].style.backgroundColor='green';
  //even[i].style.backgroundColor='white';
}

let secitem=document.querySelectorAll('li:nth-child(2)');
secitem[0].style.color='green'; 

let itemlist=document.querySelector('#items');
console.log(itemlist.parentNode);
itemlist.parentNode.style.background='#f4f4f4';
console.log(itemlist.parentNode.parentNode.parentNode) 

console.log(itemlist.parentElement);
itemlist.parentElement.style.background='#f4f4f4';
console.log(itemlist.parentElement.parentElement.parentElement); 

let itemlist=document.querySelector('#items');
//console.log(itemlist.childNodes); ->Node list
//HTML Collection
//console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor='yellow';

console.log(itemlist.firstChild);
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent='Hello 1';

let itemlist=document.querySelector('#items');

console.log(itemlist.lastChild);
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent='Hello 4';

console.log(itemlist.nextSibling);
console.log(itemlist.nextElementSibling);
itemlist.nextElementSibling.textContent='Hello 3';

console.log(itemlist.previousSibling);
console.log(itemlist.previousElementSibling);
itemlist.nextElementSibling.textContent='Hello 3';

let newdiv=document.createElement('div');
newdiv.className='hello';
newdiv.id='hello1';
newdiv.setAttribute('title','Hello Div');
let newdivtext=document.createTextNode('Hello World');
newdiv.appendChild(newdivtext);

let container=document.querySelector('header .container');
let h1=document.querySelector('header h1');
let l1=document.querySelector('li .list-group-item');
console.log(newdiv);
newdiv.style.fontSize='30px';
let items1=document.querySelector('ul .list-group');
container.insertBefore(newdiv,h1);
items1.insertBefore(newdiv,l1);
console.log(l1); */

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');
   
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}


// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

