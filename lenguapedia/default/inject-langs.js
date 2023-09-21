void async function InjectLangs(){


 setInterval(async function() {

   let xlangs = document.querySelector('lenguapedia').getAttribute('xlangs');
   
    let hrefs = document.querySelectorAll('a[href]:not(a[href*="langs="])');

    let hrefs_length = hrefs.length;
    for (let i = 0; i < hrefs_length; i++) {
      try {
        let prefix='?';
        if(hrefs[i].getAttribute('href').includes('?')){prefix='&';}
        hrefs[i].setAttribute('href', hrefs[i].href+prefix+'langs='+xlangs);

      } catch (e) { continue; }
    }
   


   
    hrefs = document.querySelectorAll('a[href]:not(a[href*="uselang="])');
    let uselang='uselang=';
    if(window.location.href.includes('uselang=')){
     uselang='uselang='+window.location.href.split('uselang=')[1].split('&')[0].split('#')[0];
    }
  if(uselang.length<9){
     uselang='uselang='+window.location.host.split('.')[0];
  }
    
   hrefs_length = hrefs.length;
    for (let i = 0; i < hrefs_length; i++) {
      try {
        let prefix='?';
        if(hrefs[i].getAttribute('href').includes('?')){prefix='&';}
        hrefs[i].setAttribute('href', hrefs[i].href+prefix+uselang);

      } catch (e) { continue; }
    }


  }, 100);





  
}?.();
