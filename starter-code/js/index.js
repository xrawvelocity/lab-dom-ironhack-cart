/* jshint esversion:9 */

var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var create = document.getElementById('create');
var newText = document.querySelector('.new > td:nth-child(1) > input:nth-child(1)');
var newPrice = document.querySelector('.new > td:nth-child(2) > input:nth-child(1)');
var sub = document.getElementsByClassName('subtot');
let total = 0;
let subArr = [];



function addProd(){
  html = `
        <tr class="product">
          <td class="name">
            <span>${newText.value}</span>
          </td>

          <td class="pu">$<span>${newPrice.value}</span></td>

          <td class="qty">
            <label>
              <input type="number" value="1" min="0" />
            </label>
          </td>

          <td class="subtot">$<span>${newPrice.value}</span></td>

          <td class="rm">
            <button class="btn btn-delete">Delete</button>
          </td>
        </tr>
  `;
  $cart.insertAdjacentHTML('beforeend', html);

}

create.addEventListener('click', addProd);


document.addEventListener('click', e => {
  console.log(e.target);
  if(e.target.className.includes('btn-delete')){
    e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);
  }
  else if(e.target.className.includes('btn-success')){
    subArr =[];
    Array.from(sub).forEach(num=>subArr.push(Number(num.children[0].textContent)));
    total = subArr.reduce((acc,cur)=>acc+cur,0);
    document.querySelector('.success').textContent = total;
  }
});

document.addEventListener('change', e => {
  let prodPrice = e.target.parentElement.parentElement.parentElement.children[1].children[0].textContent;
  
  if(e.target.parentElement.parentElement.className == 'qty'){
    console.log(e.target.valueAsNumber);
    e.target.parentElement.parentElement.parentElement.children[3].children[0].textContent = `${e.target.valueAsNumber * prodPrice}`;
    
  }
});

