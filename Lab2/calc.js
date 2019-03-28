const double = x => 2 * x;
function init(e,x) {
console.error(typeof e);
console.info(double(x));
console.log('Container:',document.getElementById('container'));
   


window.addEventListener('DOMContentLoaded', e => init(e,5));

