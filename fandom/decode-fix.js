let fixingDecode=false;
let decodeCount=0;
async function setTextContent(n,text){

   n.textContent=text;
  
}


async function fixDecode(str){
if(!globalThis.decodeTable){
globalThis.decodeTable=[];


for(let i=0;i<1024;i++){
let char =String.fromCharCode(i);
const encoder = new TextEncoder();
const view = encoder.encode(char);
decodeTable.push([String.fromCharCode(...view),char]);
}
let codes = [
  ['Â† ','←'],
  ['Â†’','→'],
 ['â€œ','“'],
  ['â€ ','” '],
  ['â€','”'],
['â€™',  '’'],
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
    decodeTable.push(codes[i]);
  }
  
}

  

  const decodeTable_length=decodeTable.length;
  for(let i=0;i<decodeTable_length;i++){
    str=str.replaceAll(decodeTable[i][0],decodeTable[i][1]);
  }

return str;
  
}

async function textNodesUnder(el){
  if(fixingDecode){return;}
  if(decodeCount>10){return;}
  decodeCount++;
  fixingDecode=true;
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()){ 
  a.push(n);
    let ntext=n.textContent;
  
  ntext=await fixDecode(ntext);
    
  if(ntext!=n.textContent){
   await setTextContent(n,ntext);
  }
    
  };
  fixingDecode=false;
  return a;
}
setInterval(async function(){
  await textNodesUnder(document.firstElementChild);
},1000);
textNodesUnder(document.firstElementChild);