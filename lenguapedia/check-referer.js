void function checkReferer(){

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
}();
