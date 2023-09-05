checkReferer()
setInterval(async function() {
checkReferer();
  let s = document.querySelector('svg.close-icon');
  if (s&&s.click) { s.click(); }
  //s=document.querySelector('[xlink:href="#wds-icons-close-tiny"]');
  //if(s){s.click();}

  
let searchButton=document.querySelector('.mobile-global-navigation__button-search:not([clickable])');

if(searchButton){
searchButton.onclick = function() { window.location.href = '/wiki/Special:Search'; };
searchButton.setAttribute('clickable','true');
}
removeLinkListeners();
  oddballLinks();
}, 200);



let searchButton=document.querySelector('.mobile-global-navigation__button-search:not([clickable])');

if(searchButton){
searchButton.onclick = function() { window.location.href = '/wiki/Special:Search'; };
searchButton.setAttribute('clickable','true');
}

  function removeLinkListeners(){
    let searchLinks = document.querySelectorAll('li.top-results__item:not([unlisten])');
    const searchLinks_length = searchLinks.length;
    for(let i=0;i<searchLinks_length;i++){

      searchLinks[i].innerHTML=searchLinks[i].innerHTML.toString();
      searchLinks[i].setAttribute('unlisten','');
    }

    
  }

function oddballLinks(){

  let rsd = document.querySelector('link[type="application/rsd+xml"]:not([modified])');
  if(rsd){
    rsd_split = rsd.getAttribute('href').split('/');
    rsd_split[2]=window.location.host;
    rsdModified=rsd_split.join('/');
    rsd.setAttribute('href',rsdModified);
    rsd.setAttribute('modified',rsdModified);
  }


  

}

function checkReferer(){

let referer=document.querySelector('http-header[key="referer"]');
if(referer){
  let refererHost=referer.getAttribute('value').split('/')[2];
  if(refererHost!=window.location.host){
console.log(refererHost, window.location.host);
    let window_location=window.location.href.split('/');
    window_location[2]=refererHost;
    window.location.href=window_location.join('/');
    referer.remove();
  }
}  

  
}
