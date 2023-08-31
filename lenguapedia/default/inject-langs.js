void async function InjectLangs(){


 setInterval(async function() {

   let xlangs = document.querySelector('lenguapedia').getAttribute('xlangs');
   
    let hrefs = document.querySelectorAll('[href]:not([href*="langs="])');
    let uselang='';
    if(window.location.href.includes('uselang'){
     uselang='&uselang='+window.location.href.split('uselang=')[1].split('&')[0].split('#')[0];
    }
    const hrefs_length = hrefs.length;
    for (let i = 0; i < hrefs_length; i++) {
      try {
        let prefix='?';
        if(hrefs[i].getAttribute('href').includes('?')){prefix='&';}
        hrefs[i].setAttribute('href', hrefs[i].href+prefix+'langs='+xlangs+uselang);

      } catch (e) { continue; }
    }
   

   


  }, 100);





  
}?.();
