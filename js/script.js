function Page (page_name)
{
  function toggleDisplaySearchForm () 
  {
    document.querySelector('.search-form').classList.toggle('opened');  
  }
  
  function searchFormSubmit (e) 
  {
    var form = this;
    var fields = form.querySelectorAll(".form-field");

    for (var i = 0; i < fields.length; i++) {
      if (!fields[i].value) {
        e.preventDefault();
        return;
      }
    }
    
    if (isLocalStorage) {
      localStorage.setItem('amount_adults', amount_adults_field.value);
      localStorage.setItem('amount_children', amount_children_field.value);
    }
  }
  
  var isLocalStorage = true;
    
  switch (page_name) {
    case 'index': 
      var button_search = document.querySelector('.search-button');
      var form_search = document.querySelector('.search-form');
  
      var amount_adults_field = document.getElementById('amount-adults');
      var amount_children_field = document.getElementById('amount-children');
      
      break;
      
    default: 
      break;
  }
  
  this.init = function () {
    switch (page_name) {
      case 'index':
        button_search.onclick = toggleDisplaySearchForm;
        
        try {
          var amount_adults = localStorage.getItem('amount_adults');
          var amount_children = localStorage.getItem('amount_children');
          
          if (amount_adults) amount_adults_field.value = amount_adults;
          if (amount_children) amount_children_field.value = amount_children;
        } catch (e) {
          isLocalStorage = false;
        }
        
        form_search.onsubmit = searchFormSubmit;
        
        break;
        
      default: 
        break;
    }
  };
}

var page_name = /^\/.*\.html$/.test(window.location.pathname) ? window.location.pathname.replace(/^\/(.*)\.html$/, "$1") : 'index';

var page = new Page(page_name);
page.init();