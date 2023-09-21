void function checkReferer(){

let referer=document.querySelector('http-header[key="referer"]');
if(referer){
  let refererHost=referer.getAttribute('value').split('/')[2];
  if(refererHost&&(refererHost!=window.location.host)&&refererHost.includes('lenguapedia.org')&&(!window.location.host.includes('lenguapedia.org'))){
console.log(refererHost, window.location.host);
    let window_location=window.location.href.split('/');
    window_location[2]=refererHost;
    window.location.href=window_location.join('/');
    referer.remove();
  }
}  

let lowcation=window.location.href.toLowerCase();

if(lowcation.includes('referer=')){
  let refererHost=decodeURIComponent(lowcation.split('referer=')[1].split('&')[0].split('#')[0]);
  if(refererHost&&(refererHost!=window.location.host)&&refererHost.includes('lenguapedia.org')&&(!window.location.host.includes('lenguapedia.org'))){
console.log(refererHost, window.location.host);
    let window_location=window.location.href.split('/');
    window_location[2]=refererHost;
    window.location.href=window_location.join('/');
    referer.remove();
  }
}  


  setInterval(function(){

    let hrefStatic = document.querySelectorAll('a[href^="https://"]:not([href*="referer"])');
    const hrefStatic_length = hrefStatic.length;
    for (let i = 0; i < hrefStatic_length; i++) {
      try {
        let char = '?';
        let original = hrefStatic[i].href;
        if(original.includes('?')){
          char='&';
        }
        hrefStatic[i].setAttribute('href', original+char+'referer='+encodeURIComponent(window.location.origin));
      } catch (e) { continue; }
    }
    
  },300);
  
}();
