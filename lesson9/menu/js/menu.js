'use strict';
var ee;
function toggleMenu(event) {
  ee = event.target;
  if (event.target.dataset.toggle=='dropdown') {
      if (this.classList.contains('show')) {
          this.classList.remove('show');
          this.classList.add('hide');
      } else {
          this.classList.add('show');
          this.classList.remove('hide');
      }
  } else {
      event.preventDefault();
  }
}

function init(node) {
  node.addEventListener('click', toggleMenu);
}

Array
  .from(document.querySelectorAll('.dropdown'))
  .forEach(init);


