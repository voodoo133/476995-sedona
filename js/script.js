document.querySelector('.no-js').classList.remove('no-js');

var is_local_storage = true;

var button_search = document.querySelector('.search-button');
var form_search = document.querySelector('.search-form');

var amount_adults_field = document.getElementById('amount-adults');
var amount_children_field = document.getElementById('amount-children');

button_search.onclick = function () {
  document.querySelector('.search-form').classList.toggle('opened');
};
        
try {
  var amount_adults = localStorage.getItem('amount_adults');
  var amount_children = localStorage.getItem('amount_children');
  
  if (amount_adults) amount_adults_field.value = amount_adults;
  if (amount_children) amount_children_field.value = amount_children;
} catch (e) {
  is_local_storage = false;
}

form_search.onsubmit = function (e) {
  var form = this;
  var fields = form.querySelectorAll(".form-field");

  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      e.preventDefault();
      return;
    }
  }
  
  if (is_local_storage) {
    localStorage.setItem('amount_adults', amount_adults_field.value);
    localStorage.setItem('amount_children', amount_children_field.value);
  }
};