setInterval(async function(){

let placeholders = document.querySelectorAll('span.lazy-image-placeholder:not([touched])');
let placeholders_length=placeholders.length;
  for(let i=0;i<placeholders_length;i++){
    let img = document.createElement('img');
    let placeholder = placeholders[i];
    let attributes = placeholder.getAttributeNames();
    let attributes_length=attributes.length;
    for(let x=0;x<attributes_length;x++){
      img.setAttribute(attributes[x],placeholder.getAttribute(attributes[x]));
    }
    img.src=img.getAttribute('data-src');
    placeholder.setAttribute('touched','true');
    placeholder.parentElement.insertBefore(img,placeholder);
    placeholder.style.display='none';
   // placeholder.style.backgroundImage=img.src;
  }
  
  
},1001);
