
var  loge = document.querySelector('.log'),
     log = [];

    if (navigator.onLine) {
        log.push('Verificare internet - online');
      } else {
        log.push('Verificare internet - offline');
      };

    loge.innerHTML = log; 


    function searchh() {
      // Declare variables
      var input, filter, ul, li, a, i, txtValue;
      input = document.querySelector('.search');
      filter = input.value.toUpperCase();
      ul = document.querySelector(".articole");
      li = ul.getElementsByTagName('li');
      let resultsDiv = document.querySelector('.r');
  
      let count = 0;
      let noResultsMessage = "Niciun rezultat găsit pentru: " + filter;
      let foundResultsMessage = "";
  
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
              count++;
          } else {
              li[i].style.display = "none";
          }
      }
  
      if (count === 0) {
          resultsDiv.innerText = noResultsMessage;
      } else {
          resultsDiv.innerText = foundResultsMessage + count;
      }
  }
  