
globalThis.doInterval=function(func,ms,args){
setInterval(func,ms);
args=args||[];
func(...args);

}

void async function LinkResolverDNS(){

doInterval(async function(){


let relativeLinks = document.querySelectorAll('[href^="/"],[href^="./"],[href^="../"]');
    let relativeLinks_length = relativeLinks.length;
    for (let i = 0; i < relativeLinks_length; i++) {
      try {

        relativeLinks[i].setAttribute('href', relativeLinks[i].href);

      } catch (e) { continue; }
    }
    relativeLinks = document.querySelectorAll('[href^="//"]');
    relativeLinks_length = relativeLinks.length;
    for (let i = 0; i < relativeLinks_length; i++) {
      try {

        relativeLinks[i].setAttribute('href', 'https:'+relativeLinks[i].href);

      } catch (e) { continue; }
    }
    let relativeSrc = document.querySelectorAll('[src^="/"]:not(script),[src^="./"]:not(script),[src^="../"]:not(script)');
    let relativeSrc_length = relativeSrc.length;
    for (let i = 0; i < relativeSrc_length; i++) {
      try {

        relativeSrc[i].setAttribute('src', relativeSrc[i].src);

      } catch (e) { continue; }
    }
    relativeSrc = document.querySelectorAll('[src^="//"]');
    relativeSrc_length = relativeSrc.length;
        for (let i = 0; i < relativeSrc_length; i++) {
          try {
    
            relativeSrc[i].setAttribute('src', 'https:'+relativeSrc[i].src);
    
          } catch (e) { continue; }
        }

    relativeSrc = document.querySelectorAll('script[src^="/"],script[src^="./"],script[src^="../"]');
    relativeSrc_length = relativeSrc.length;
    for (let i = 0; i < relativeSrc_length; i++) {
      try {

        relativeSrc[i].setAttribute('src', relativeSrc[i].src);
        document.body.appendChild(relativeSrc[i].cloneNode(true));

      } catch (e) { continue; }
    }


    let defaultHosts=document.querySelectorAll(`
    [href^="https://"][href*="wikipedia.org"]:not([href*="lenguapedia.org"],[window-location-host]),
    [href^="https://"][href*="lenguapedia-en.vercel.app"]:not([window-location-host]),
    [href^="https://"][href*="org.translate.goog"]:not([window-location-host]),
    [href^="https://"][href*="app.translate.goog"]:not([window-location-host])`);
    let defaultHosts_length=defaultHosts.length;
    for(let i=0;i<defaultHosts_length;i++){
    let durl=defaultHosts[i].href;
    durl=durl.split('/');
    durl[2]=window.location.host;
    defaultHosts[i].href=durl.join('/');
    defaultHosts[i].setAttribute('window-location-host',window.location.host);
    }

    defaultHosts=document.querySelectorAll(`
    [src^="https://"][src*="wikipedia.org"]:not([src*="lenguapedia.org"],[window-location-host]),
    [src^="https://"][src*="lenguapedia-en.vercel.app"]:not([window-location-host])`);
    defaultHosts_length=defaultHosts.length;
    for(let i=0;i<defaultHosts_length;i++){
    let durl=defaultHosts[i].src;
    durl=durl.split('/');
    durl[2]=window.location.host;
    defaultHosts[i].src=durl.join('/');
        defaultHosts[i].setAttribute('window-location-host',window.location.host);
        if(defaultHosts[i].tagName=='SCRIPT'){
            document.body.appendChild(defaultHosts[i].cloneNode(true));
            let s = document.createElement('script');
            if(defaultHosts[i].hasAttribute('type')){
                s.setAttribute('type',defaultHosts[i].getAttribute('type'));
            }
            s.src=defaultHosts[i].src;      
            document.body.appendChild(s);

        }
    }
    
    defaultHosts=document.querySelectorAll(`link[href*="load.php"]:not([href*="api.lenguapedia.org/corsFetch"]):not([api-style])`);
    defaultHosts_length=defaultHosts.length;
    for(let i=0;i<defaultHosts_length;i++){
    let durl=defaultHosts[i].href;
    durl=durl.split('/');
    durl[2]="en.wikipedia.org";
    
    let newhref="https://api.lenguapedia.org/corsFetchStyles/"+durl.join('/');
    defaultHosts[i].setAttribute('api-style',newhref);    
    let newlink=document.createElement('link');
        //newlink.setAttribute('type',defaultHosts[i].getAttribute('type'));
        newlink.setAttribute('rel',defaultHosts[i].getAttribute('rel'));
        newlink.href=newhref;
        document.body.appendChild(newlink);
    }
    
    defaultHosts=document.querySelectorAll(`[href*="xxhachexx"]`);
    defaultHosts_length=defaultHosts.length;
    for(let i=0;i<defaultHosts_length;i++){
        let durl=defaultHosts[i].href;
        durl=durl.split('xxhachexx');
        durl[1]='';
        durl=durl.join('');
        defaultHosts[i].setAttribute('href',durl);
    }
    
    defaultHosts=document.querySelectorAll(`[src*="xxhachexx"]`);
    defaultHosts_length=defaultHosts.length;
    for(let i=0;i<defaultHosts_length;i++){
        let durl=defaultHosts[i].src;
        durl=durl.split('xxhachexx');
        durl[1]='';
        durl=durl.join('');
        defaultHosts[i].setAttribute('src',durl);
    }

},200);

}?.();
