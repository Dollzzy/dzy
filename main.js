
var  loge = document.querySelector('.log'),
     log = [];

    if (navigator.onLine) {
        log.push('Verificare internet - online');
      } else {
        log.push('Verificare internet - offline');
      };

    loge.innerHTML = log; 