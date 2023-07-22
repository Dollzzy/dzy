
var errInfo = document.getElementById('errInfo'),
     loge = document.querySelector('.log'),
     log = [];

    if (navigator.onLine) {
        log.push('Network verification - online');
      } else {
        log.push('Network verification - offline');
      };

    loge.innerHTML = log; 
