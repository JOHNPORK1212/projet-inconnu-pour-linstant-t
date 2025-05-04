const data = {
    color: [
      '<img src="marron.png">',
      '<img src="marronclair.png">',
      '<img src="beige.png">',
      '<img src="bleu.png">',
      '<img src="bleuclair.png">',
      '<img src="jaune.png">',
      '<img src="mauve.png">',
      '<img src="orange.png">',
      '<img src="rouge.png">',
      '<img src="vert.png">',
      '<img src="violet.png">',
      '<img src="vertfonce.png">',
    
    ],
    face: [
      '<img src="visage1.png">',
      '<img src="visage2.png">'
    ],
    hat: [
      '<img src="chapeau.png">',
      //'<img src="chapeau2.png">'
    ]
  };
  
  const index = {
    color: 0,
    face: 0,
    hat: 0
  };
  
  function updatePart(part) {
    const element = document.getElementById(part);
    element.innerHTML = data[part][index[part]] || '';
  }
  
  function prev(part) {
    index[part] = (index[part] - 1 + data[part].length) % data[part].length;
    updatePart(part);
  }
  
  function next(part) {
    index[part] = (index[part] + 1) % data[part].length;
    updatePart(part);
  }
  

  updatePart('color');
  updatePart('face');
  updatePart('hat');
