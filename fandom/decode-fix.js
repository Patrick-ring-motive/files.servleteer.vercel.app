globalThis.test='async';
console.lag=async function(){
  return console.log(...arguments);
}
console.test=function(){
  if(globalThis.test=='false'){
    return;
  }else{
    if(globalThis.test=='async'){
      return console.lag(...arguments);
    }else{
      return console.log(...arguments);
    }
  }
}

void async function decodeWithoutWorkers() {
  if(!self?.window){return;}
 // if (self?.window?.Worker) {return;}
  if (!globalThis.fixingDecode) {
    globalThis.fixingDecode = false;
  }
  if (!globalThis.decodeCount) {
    globalThis.decodeCount = 0;
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  globalThis.sleep = function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  async function setTextContent(n, text) {
    /*if(window.requestIdleCallback){
      return new Promise(function(resolve) {
        requestIdleCallback(function(){
          n.textContent=text;
          resolve();
        });
    });
    }else{*/
    n.textContent = text;
    return;
    //}


  }


  async function recode(str) {
    //const encoder = new TextEncoder();
    //const view = encoder.encode(str);
    let wrong = str; //String.fromCharCode(...view)
    //console.test(wrong);
    const wrongCodes = wrong.split('').map((x) => x.charCodeAt(0));
    //console.test(wrongCodes);

    const uint8 = new Uint8Array(wrongCodes.length);
    for (let i = 0; i < wrongCodes.length; i++) {
      uint8[i] = wrongCodes[i];
    }
    const decoder = new TextDecoder();
    const out = decoder.decode(uint8);
    //console.test(str);
    return out;


  }

  /*
  let wrong = 'Î•Î»Î»Î·Î½Î¹ÎºÎ¬';
  const wrongCodes = wrong.split('').map((x) => x.charCodeAt(0));
  //console.test(wrongCodes);
  
  const uint8 = new Uint8Array(wrongCodes.length);
  for(let i=0;i<wrongCodes.length;i++){
  uint8[i] = wrongCodes[i];
  }
  const decoder = new TextDecoder();
  const out = decoder.decode(uint8); 
  console.test(out);
  */

  if (!globalThis.startDecode) {
    globalThis.startDecode = 0;
  }
  if (!globalThis.incrementDecode) {
    globalThis.incrementDecode = 1000;
  }
  async function fixDecode(str) {
    if (!globalThis.decodeTable) {
      globalThis.decodeTable = [];



      for (let i = startDecode; i < (startDecode + incrementDecode); i++) {
        try {
          let char = String.fromCharCode(i);
          const encoder = new TextEncoder();
          const view = encoder.encode(char);
          decodeTable.push([String.fromCharCode(...view), char]);
        } catch (e) {
          continue;
        }
      }
      let codes = [
        ['Î•', 'Ε'],
        ['ÑŠ', 'ъ'],
        ['Ñ€', 'р'],
        ['â€”', '—'],
        ['â€•', '―'],
        ['â€¦', '…'],
        ['â†‘', '↑'],
        ['Â† ', '←'],
        ['Â†’', '→'],
        ['â€œ', '“'],
        ['â€ ', '” '],
        ['â€', '”'],
        ['â€™', '’'],
        ['â€‰•â€‰', ' • '],
        ['â€‰', ' '],
        ['â€¢', '•'],
        ['â€“', '–'],
        ['Â&', '&'],
        ['Ã©', 'é'],
        ['â€‹', ''],
        ['Â', '']
      ];
      const codes_length = codes.length;
      for (let i = 0; i < codes_length; i++) {
        decodeTable.push(codes[i]);
      }

    }



    const decodeTable_length = decodeTable.length;
    for (let i = 0; i < decodeTable_length; i++) {
      try {
        if (str.includes(decodeTable[i][0])) {
          str = str.replaceAll(decodeTable[i][0], decodeTable[i][1]);
        }
      } catch (e) {
        continue
      }
    }
    startDecode += incrementDecode;
    return str;

  }

  async function textNodesUnder(el) {
    if (fixingDecode) {
      return;
    }
    // if(decodeCount>10){return;}
    //  decodeCount++;
    fixingDecode = true;
    var n, walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    while (n = walk.nextNode()) {

      let ntext = n.textContent;
      const oldText = ntext;
      ntext = await fixDecode(ntext);


      if (ntext != oldText) {
        await setTextContent(n, ntext);
        if (getRandomInt(10) == 5) {
          await sleep(200);
        }
      }

    };
    fixingDecode = false;
    return;
  }
  addEventListener("load", (event) => {
    setInterval(async function() {
      await textNodesUnder(document.firstElementChild);
    }, 1000);
    textNodesUnder(document.firstElementChild);
  });

}?.();



globalThis.AsyncFunction = async function () {}.constructor;
globalThis.await=_=>_;
globalThis.async=async a=>await a();



void function DedicatedWorker() {
  /** 
  This Code only runs inside the worker
  */
    if (!self?.DedicatedWorkerGlobalScope) { return; }
    let functions = {};
    self.onmessage = function (e) {
        console.test('Worker: Message received from main script');
        let currentFunction=functions[e.data[1]];
      console.test('Data recieved from main script: ');
      console.test(e.data);
        if(currentFunction instanceof AsyncFunction){
            async(async I=>postMessage([e.data[0],await currentFunction(...(e.data[2]))]));
        }else{
            postMessage([e.data[0],currentFunction(...(e.data[2]))]);
        }
    }
    functions={
        multiply:function(num1,num2){
            const result = num1 * num2;
            if (isNaN(result)) {
                return 'Please write two numbers';
            } else {
                const workerResult = 'Result: ' + result;
                console.test('Worker: Posting message back to main script');
                return result;
            }
        },
        fixDecode:async function (str) {
    if (!globalThis.decodeTable) {
      globalThis.decodeTable = [];



      for (let i = 0; i < 150000; i++) {
        try {
          let char = String.fromCharCode(i);
          const encoder = new TextEncoder();
          const view = encoder.encode(char);
          decodeTable.push([String.fromCharCode(...view), char]);
        } catch (e) {
          continue;
        }
      }
      let codes = [
        ['Î•', 'Ε'],
        ['ÑŠ', 'ъ'],
        ['Ñ€', 'р'],
        ['â€”', '—'],
        ['â€•', '―'],
        ['â€¦', '…'],
        ['â†‘', '↑'],
        ['Â† ', '←'],
        ['Â†’', '→'],
        ['â€œ', '“'],
        ['â€ ', '” '],
        ['â€', '”'],
        ['â€™', '’'],
        ['â€‰•â€‰', ' • '],
        ['â€‰', ' '],
        ['â€¢', '•'],
        ['â€“', '–'],
        ['Â&', '&'],
        ['Ã©', 'é'],
        ['â€‹', ''],
        ['Â', '']
      ];
      const codes_length = codes.length;
      for (let i = 0; i < codes_length; i++) {
        decodeTable.push(codes[i]);
      }

    }



    const decodeTable_length = decodeTable.length;
    for (let i = 0; i < decodeTable_length; i++) {
      try {
        if (str.includes(decodeTable[i][0])) {
          str = str.replaceAll(decodeTable[i][0], decodeTable[i][1]);
        }
      } catch (e) {
        continue;
      }
    }
    return str;

  },
      fixDecodeList:async function(strList){
        let resultList=[];
        const strList_length = strList.length;
        for(let i = 0;i<strList_length;i++){
          let originalText=strList[i];
          let alteredText=await functions.fixDecode(originalText);
          if(originalText!=alteredText){
            resultList.push([i,alteredText]);
          }
        }
        console.test('Sending result List');
        console.test(resultList);
        return resultList;
      }
    }
  /** 
  End of code only running inside worker
  */
}?.();

void async function DedicatedWindow() {
  /** 
  This is all just setting up the worker so that it can talk to the window
  */
    if (!self?.window?.Worker) {return;}

    if(!globalThis.workerMessageMap){
        globalThis.workerMessageMap = new Map();
    }
    function getWorkerMessageId(){
        let wmi = ('WorkerMessageId' + new Date().getTime() + "" + performance.now() + "" + Math.random()).replaceAll('.', '_');
        let wmip = {};
        wmip.promise=new Promise((resolve) => { wmip.resolve = resolve; });
        workerMessageMap.set(wmi,wmip);
        return wmi;
    }

  if(!globalThis.decodeWorker){
    try{
    globalThis.decodeWorker = new Worker(document?.currentScript?.src);
    }catch(e){
      let text = await (await fetch(document?.currentScript?.src)).text();
      let blob = new Blob([text], {type: 'text/javascript'});
      globalThis.decodeWorker = new Worker(URL.createObjectURL(blob));
    }
  }
  
    async function processWorkerMessage(func,values){
        let workerId = getWorkerMessageId();
        let workerFunction = func;
        globalThis.decodeWorker.postMessage(
          JSON.parse(
          JSON.stringify(
            [workerId,workerFunction,values]
          )
          )
        );
        let workerPromise = workerMessageMap.get(workerId).promise;
        let workerReturnValue = await workerPromise;
        setTimeout(X=>workerMessageMap.delete(workerId),100);
        return workerReturnValue;
    }
    globalThis.decodeWorker.onmessage = async function (e) {
        let workerId = e.data[0];
        let workerReturnValue = e.data[1];
        workerMessageMap.get(workerId).resolve(workerReturnValue);
        console.test('Message received from worker');
    }
/** 
All the worker Stuff is set up on the window side 
*/

    async function multiply(num1,num2){
        console.test('Message posted to worker');
        let multiple = await processWorkerMessage('multiply',Array.from(arguments));
        console.test(multiple);
    }

  //multiply(7,11);


  async function fixDecodeSeparateThread(strList){
    let alteredList = await processWorkerMessage('fixDecodeList',Array.from(arguments));
    return alteredList;
  }
  if(!globalThis.fixingDecodeThreaded){
    globalThis.fixingDecodeThreaded=false;
  }
  
  async function DoDecodingWork(){
    if(globalThis.fixingDecodeThreaded){return;}
    globalThis.fixingDecodeThreaded=true;
    let nodeList=[];
    let strList=[];
    var n, walk = document.createTreeWalker(document.firstElementChild, NodeFilter.SHOW_TEXT, null, false);
    while (n = walk.nextNode()) {

      nodeList.push(n);
      strList.push(n.textContent);


    }

    let resultList=await fixDecodeSeparateThread(strList);
    console.test(resultList);

    const resultList_length=resultList.length;
    for(let i = 0;i<resultList_length;i++){
      const nodeIndex=resultList[i][0];
      const nodeText=resultList[i][1];
      nodeList[nodeIndex].textContent=nodeText;
    }
    globalThis.fixingDecodeThreaded=false;
  }
  setInterval(function(){DoDecodingWork();},1000);
  DoDecodingWork();
}?.();
