void async function InjectLangs(){


 setInterval(async function() {

   let xlangs = document.querySelector('lenguapedia').getAttribute('xlangs');
   
    let hrefs = document.querySelectorAll('[href]:not([href*="langs="])');
    const hrefs_length = hrefs.length;
    for (let i = 0; i < hrefs_length; i++) {
      try {
        let prefix='?';
        if(hrefs[i].getAttribute('href').includes('?')){prefix='&';}
        hrefs[i].setAttribute('href', hrefs[i].href+prefix+'langs='+xlangs);

      } catch (e) { continue; }
    }
   

   


  }, 100);





  
}?.();
