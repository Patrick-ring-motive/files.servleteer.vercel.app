if(!globalThis.fixingDecode){
  globalThis.fixingDecode=false;
}
if(!globalThis.decodeCount){
  globalThis.decodeCount=0;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

globalThis.sleep=function(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function setTextContent(n,text){
/*if(window.requestIdleCallback){
  return new Promise(function(resolve) {
    requestIdleCallback(function(){
      n.textContent=text;
      resolve();
    });
});
}else{*/
   n.textContent=text;
  return;
//}
  
  
}


async function recode(str){
//const encoder = new TextEncoder();
//const view = encoder.encode(str);
let wrong = str;//String.fromCharCode(...view)
//console.log(wrong);
const wrongCodes = wrong.split('').map((x) => x.charCodeAt(0));
//console.log(wrongCodes);

const uint8 = new Uint8Array(wrongCodes.length);
for(let i=0;i<wrongCodes.length;i++){
uint8[i] = wrongCodes[i];
}
const decoder = new TextDecoder();
const out = decoder.decode(uint8); 
//console.log(str);
return out;

  
}

/*
let wrong = 'Î•Î»Î»Î·Î½Î¹ÎºÎ¬';
const wrongCodes = wrong.split('').map((x) => x.charCodeAt(0));
//console.log(wrongCodes);

const uint8 = new Uint8Array(wrongCodes.length);
for(let i=0;i<wrongCodes.length;i++){
uint8[i] = wrongCodes[i];
}
const decoder = new TextDecoder();
const out = decoder.decode(uint8); 
console.log(out);
*/

let startDecode = 0;
let incrementDecode = 1000;
async function fixDecode(str){
if(!globalThis.decodeTable){
globalThis.decodeTable=[];

  

for(let i=startDecode;i<(startDecode+incrementDecode);i++){try{
let char = String.fromCharCode(i);
const encoder = new TextEncoder();
const view = encoder.encode(char);
decodeTable.push([String.fromCharCode(...view),char]);
}catch(e){continue;}}
let codes = [
         ['Î•','Ε'],
         ['ÑŠ','ъ'],
         ['Ñ€','р'],
         ['â€”','—'],
         ['â€•','―'],
         ['â€¦','…'],
         ['â†‘','↑'],
         ['Â† ','←'],
         ['Â†’','→'],
         ['â€œ','“'],
         ['â€ ','” '],
         ['â€','”'],
         ['â€™', '’'],
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
  for(let i=0;i<decodeTable_length;i++){try{
    if(str.includes(decodeTable[i][0])){
    str=str.replaceAll(decodeTable[i][0],decodeTable[i][1]);
    }
  }catch(e){continue}}
startDecode+=incrementDecode;
return str;
  
}

async function textNodesUnder(el){
  if(fixingDecode){return;}
 // if(decodeCount>10){return;}
//  decodeCount++;
  fixingDecode=true;
  var n, walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()){ 
  
  let ntext=n.textContent;
  const oldText=ntext;
  ntext=await fixDecode(ntext);

    
  if(ntext!=oldText){
   await setTextContent(n,ntext);
    if(getRandomInt(10)==5){
      await sleep(200);
    }
  }
    
  };
  fixingDecode=false;
  return ;
}
addEventListener("load", (event) => {
setInterval(async function(){
  await textNodesUnder(document.firstElementChild);
},1000);
textNodesUnder(document.firstElementChild);
  });
