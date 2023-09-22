function unaccent(text){
  let vowelsMap=[
    [
      "ÀÁÂÃÄÅ",
      "àáâãäå",
      "Ç",
      "ç",
      "Ð",
      "ð",
      "ÈÉÊË",
      "èéêë",
      "ÌÍÎÏ",
      "ìíîï",
      "Ñ",
      "ñ",
      "ÒÓÔÕÖØ",
      "òóôõöø",
      "ÙÚÛÜ",
      "ùûü",
      "Ý",
      "ýÿ"
    ],
    [
      "A",
      "a",
      "C",
      "c",
      "D",
      "d",
      "E",
      "e",
      "I",
      "i",
      "N",
      "n",
      "O",
      "o",
      "U",
      "u",
      "Y",
      "y"
    ]
  ]

  const vowelsMap_length=vowelsMap[0].length;
  for(let i=0;i<vowelsMap_length;i++){
    let accents = vowelsMap[0][i];
    let letter = vowelsMap[1][i];
    const accents_length=accents.length;
    for(let x=0;x<accents_length;x++){
      text = text.replaceAll(accents[x],letter);
    }
  }
  return text;  
}

function unaccentNodesUnder(el){
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()){ 
  a.push(n);
    let ntext=n.textContent;
  
  ntext=unaccent(ntext);
    
  if(ntext!=n.textContent){
    n.textContent=ntext;
  }
    
  };
  return a;
}

unaccentNodesUnder(document.body);
