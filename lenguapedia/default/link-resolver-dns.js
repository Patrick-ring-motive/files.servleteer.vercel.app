
globalThis.doInterval=function(func,ms,args){
setInterval(func,ms);
args=args||[];
func(...args);

}

void async function LinkResolverDNS(){

doInterval(async function(){


let relativeLinks = document.querySelectorAll('a[href^="/"],a[href^="./"],a[href^="../"]');
    const relativeLinks_length = relativeLinks.length;
    for (let i = 0; i < relativeLinks_length; i++) {
      try {

        relativeLinks[i].setAttribute('href', relativeLinks[i].href);

      } catch (e) { continue; }
    }
    let relativeSrc = document.querySelectorAll('[src^="/"],[src^="./"],[src^="../"]');
    const relativeSrc_length = relativeSrc.length;
    for (let i = 0; i < relativeSrc_length; i++) {
      try {

        relativeSrc[i].setAttribute('src', relativeSrc[i].src);

      } catch (e) { continue; }
    }



    let defaultHosts=document.querySelectorAll(`[href^="https://"][href*="wikipedia.org"]:not([href*="lenguapedia"],[window-location-host]),[href^="https://"][href*="lenguapedia-en.vercel.app"]:not([window-location-host])`);
    let defaultHosts_length=defaultHosts.length;
    for(let i=0;i<defaultHosts_length;i++){
    let durl=defaultHosts[i].href;
    durl=durl.split('/');
    durl[2]=window.location.host;
    defaultHosts[i].href=durl.join('/');
    defaultHosts[i].setAttribute('window-location-host',window.location.host);
    }

    defaultHosts=document.querySelectorAll(`[src^="https://"][src*="wikipedia.org"]:not([src*="lenguapedia"],[window-location-host]),[src^="https://"][src*="lenguapedia-en.vercel.app"]:not([window-location-host])`);
    defaultHosts_length=defaultHosts.length;
    for(let i=0;i<defaultHosts_length;i++){
    let durl=defaultHosts[i].src;
    durl=durl.split('/');
    durl[2]=window.location.host;
    defaultHosts[i].src=durl.join('/');
        defaultHosts[i].setAttribute('window-location-host',window.location.host);
    }



},200);

}?.();
