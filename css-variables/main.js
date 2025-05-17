'use strict'
//it gives u an NodeList NOT AN ARRAY!!
//in some cases people convert a nodeList to an array
const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  document.getElementById(`label_${this.name}`).innerText = this.value + suffix;
}

  inputs.forEach(input => input.addEventListener('change', handleUpdate));
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
  