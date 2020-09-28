import {
  incrementQty,
  decrementQty,
  recalculateSubtotal
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const price = document.querySelector('#price');
const subTotal = document.querySelector('#subtotal');
const code = document.querySelector('#code');
const confirmCodeBtn = document.querySelector('#confirmButton');
let discount = 0;

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subTotal.textContent = `Rp. ${recalculateSubtotal(
    price.value, 
    qty.value,
    discount
    )}`;
});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  subTotal.textContent = `Rp. ${recalculateSubtotal(
    price.value, 
    qty.value,
    discount
    )}`;
});

confirmCodeBtn.addEventListener("click", () => {
  if (code.value === "HEMATAJA") {
    discount = 10;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value, 
      qty.value,
      discount
    )}`;
  } else if (code.value === "BELANJAASIK") {
    discount = 25;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value, 
      qty.value,
      discount
    )}`;
  } else if (code.value === "REJEKI17an") {
    discount = 30;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value, 
      qty.value,
      discount
    )}`;
  } else {
    discount = 0;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value, 
      qty.value,
      discount
    )}`;
  }
});