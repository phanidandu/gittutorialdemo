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
let items=document.getElementsByClassName('list-group-item');
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

let thirditem=document.querySelector('.list-group-item:nth-child(3)');
//thirditem.style.display='none';

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
