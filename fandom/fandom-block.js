globalThis.Q = U => { try { return U(); } catch (e) { return undefined; } };
if(!globalThis.the){globalThis.the= {};}

checkReferer();

setTimeout(function(){fandomBlock();},1000);


document.addEventListener("DOMContentLoaded", (event) => {
  fandomBlock();
});

fandomBlock();

async function fandomBlock(){

if(!globalThis.apiHost){
  globalThis.apiHost = undefined;

  
let apiHostList = ['api.lenguapedia.org','lenguapedia-api.vercel.app','lenguapedia-api.weblet.repl.co'];

for(let i=0;i<apiHostList.length;i++){try{

let apiResponse = await jsonpFetch('https://'+apiHostList[i]+'/jsonp/https://en.wikipedia.org');
if(apiResponse){apiHost = apiHostList[i];break;}
  
}catch(e){console.log(e);continue;}}

if(!apiHost){apiHost='api.lenguapedia.org';}
  
  
  }
  
setInterval(async function() {
  checkReferer();
  let s = document.querySelector('svg.close-icon');
  if (s&&s.click) { s.click(); }


  
let searchButtonA=document.querySelector('.mobile-global-navigation__button-search:not([clickable])');

if(searchButtonA){
searchButtonA.onclick = function() { window.location.href = '/wiki/Special:Search'; };
searchButtonA.setAttribute('clickable','true');
}

let wikia_php=document.querySelector('[href^="https://'+apiHost+'/corsFetch/"][href$="wikia.php?controller=ThemeApi&method=themeVariables"]');
  if(wikia_php){
        let wikidomain = Q(U => document.querySelector('meta[name="twitter:url"]')
      .getAttribute('content').split('/')[2]) 
        || Q(U => document.querySelector('meta[name="og:title "]')
      .getAttribute('content').split('/')[2])
        ||'minecraft.fandom.com';
    wikia_php.setAttribute('href','https://'+apiHost+'/corsFetchStyles/https://'+wikidomain+'/wikia.php?controller=ThemeApi&method=themeVariables&host='+window.location.host);
  }

  let load_php=document.querySelector('[href^="https://'+apiHost+'/corsFetch/"][href*="load.php"]');
  if(load_php){

    load_php.setAttribute('href',load_php.getAttribute('href').replace('corsFetch','corsFetchStyles'));
  }

  let form_action = document.querySelector('[action*=".fandom.com"]');
  if(form_action){
    form_action.setAttribute('action',form_action.getAttribute('action').replace('.fandom.com','-wikia.lenguapedia.org'));
  }

  
removeLinkListeners();
  oddballLinks();
  //textNodesUnder(document.body);
}, 200);


}

  

the.searchButtonB=document.querySelector('.mobile-global-navigation__button-search:not([clickable])');

if(the.searchButtonB){
the.searchButtonB.onclick = function() { window.location.href = '/wiki/Special:Search'; };
the.searchButtonB.setAttribute('clickable','true');
}
delete the.searchButtonB;

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
  if(refererHost&&(refererHost!=window.location.host)&&refererHost.includes('lenguapedia.org')){
console.log(refererHost, window.location.host);
    let window_location=window.location.href.split('/');
    window_location[2]=refererHost;
    window.location.href=window_location.join('/');
    referer.remove();
  }
}  

  
}

/*
const encoder = new TextEncoder();
const view = encoder.encode('•â€¢');
let wrong = String.fromCharCode(...view)
console.log(wrong);
const wrongCodes = wrong.split('').map((x) => x.charCodeAt(0));
console.log(wrongCodes);

const uint8 = new Uint8Array(wrongCodes.length);
for(let i=0;i<wrongCodes.length;i++){
uint8[i] = wrongCodes[i];
}
const decoder = new TextDecoder();
const str = decoder.decode(uint8); 
console.log(str);

*/

function fixDecode(str){
let codes = [
         ['â€‰•â€‰',' • '],
         ['â€‰',' '],
         ['â€¢','•'],
         ['â€“','–'],
         ['Â&','&'],
         ['Ã©','é'],
         ['â€‹',''],
         ['Â','']
           ];
  const codes_length=codes.length;
  for(let i=0;i<codes_length;i++){
    str=str.replaceAll(codes[i][0],codes[i][1]);
  }

return str;
  
}

function textNodesUnder(el){
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()){ 
  a.push(n);
    let ntext=n.textContent;
  
  ntext=fixDecode(ntext);
    
  if(ntext!=n.textContent){
    n.textContent=ntext;
  }
    
  };
  return a;
}

function fixInlineStyles(){
let styles=document.querySelectorAll('[style*="url(https://static.wikia.nocookie.net"]');
  const styles_length=styles.length;
  for(let i=0;i<styles_length;i++){
  let char = '?';
  let original = styles[i].getAttribute('style');
  let rewrite = original
    .replaceAll('url(https://static.wikia.nocookie.net',
                'url(https://'+apiHost+'/corsFetch/https://static.wikia.nocookie.net');
    if(original.includes('?')){
      char='&';
    }
    styles[i].setAttribute('style',rewrite+char+'host='+window.location.host);
    
    
  }


  
}


async function jsonpFetch(url){
  
  let jsonpid = 'jsonp-id:'+new Date().getTime();
  let jscr = document.createElement('script');
  
  jscr.promise = new Promise(function(resolve,reject){jscr.resolve=resolve;jscr.reject=reject;});
  jscr.setAttribute('jsonp-id',jsonpid);
  jscr.onload = function(){
    let j = document.querySelector('[jsonp-id="'+jsonpid+'"]');
  
    j.resolve();
  };
  jscr.onerror = function(){
    let j = document.querySelector('[jsonp-id="'+jsonpid+'"]');

    j.reject();
  };
  jscr.src=url;
  document.firstElementChild.appendChild(jscr);
  await jscr.promise;

  return jscr.getAttribute('response-body');
  
}


      
//textNodesUnder(document);
//setTimeout(function(){textNodesUnder(document.body);},100);
