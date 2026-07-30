
const THEMES = {
  "Nombres et calculs": "🔢",
  "Espace et géométrie": "📐",
  "Données et probabilités": "📊",
  "Proportionnalité et fonctions": "%",
  "Algorithmique": "🐱",

  "Nombres entiers et décimaux": "🔢",
  "Fractions": "🔢",
  "Longueurs et aires": "📐",
  "Repérage dans le temps et durées": "🔢",
  "Organisation et gestion de données": "📊",
  "Proportionnalité": "%",
  "Géométrie plane et espace": "📐",
  "Calcul mental": "🔢"
};

const WORKSHEET_COLORS = {
  "6e": "#ea580c",
  "5e": "#2563eb",
  "4e": "#dc2626",
  "3e": "#16a34a"
};

const DOMAIN_COLORS = {
  "Nombres et calculs": "#2563eb",
  "Espace et géométrie": "#7c3aed",
  "Données et probabilités": "#ea580c",
  "Proportionnalité et fonctions": "#059669",
  "Algorithmique": "#f59e0b",
  "Nombres entiers et décimaux": "#2563eb",
  "Fractions": "#7c3aed",
  "Longueurs et aires": "#ea580c",
  "Repérage dans le temps et durées": "#0891b2",
  "Organisation et gestion de données": "#db2777",
  "Proportionnalité": "#059669",
  "Géométrie plane et espace": "#4f46e5",
  "Calcul mental": "#dc2626"
};

const themeToggleButton=document.getElementById("theme-btn");
const mobileMenuButton=document.getElementById("menu-btn");
const mainNavigation=document.querySelector(".nav-links");
const siteFavicon=document.querySelector('link[rel="icon"]');
const savedSiteTheme=localStorage.getItem("theme");
const initialSiteTheme=savedSiteTheme||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
function applySiteTheme(theme){
  document.documentElement.setAttribute("data-theme",theme);
  if(siteFavicon) siteFavicon.href=`../assets/favicon-${theme}.svg`;
}
applySiteTheme(initialSiteTheme);
themeToggleButton?.addEventListener("click",()=>{
  const theme=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";
  applySiteTheme(theme);
  localStorage.setItem("theme",theme);
  if(document.getElementById("training")?.classList.contains("active")&&currentQuiz[index]){
    renderQuestionVisual(currentQuiz[index]);
  }
});
mobileMenuButton?.addEventListener("click",event=>{
  event.stopPropagation();
  const isOpen=mainNavigation?.classList.toggle("open")||false;
  mobileMenuButton.setAttribute("aria-expanded",String(isOpen));
});
document.addEventListener("click",event=>{
  if(mainNavigation?.classList.contains("open")&&!mainNavigation.contains(event.target)){
    mainNavigation.classList.remove("open");
    mobileMenuButton?.setAttribute("aria-expanded","false");
  }
});

const NOTIONS = {
"5e":{
"Nombres et calculs":[
"Critères de divisibilité par 2, 5 et 10","Quotient et reste d’une division euclidienne","Factorisation avec les tables","Produits liés aux tables","Multiplier et diviser par 10, 100, 1 000","Addition et soustraction de décimaux","Calculs mêlant entiers et décimaux","Addition à trou","Tables de multiplication","Fractions simples et écritures décimales","Nombre quotient","Repérage sur une droite graduée","Fractions égales","Comparer deux fractions","Nombres mixtes","Addition et soustraction de fractions simples","Prendre une fraction d’un nombre","Prendre 1 %, 10 % ou 50 %","Écritures multiples d’un nombre","Unités d’aire et de volume","Suites de motifs évolutifs"
],
"Espace et géométrie":[
"Placer un point d’abscisse décimale","Repérer un nombre décimal","Vues d’empilements de cubes","Dénombrer des cubes","Reconnaître un solide en perspective","Patron d’un cube","Symétrie axiale sur quadrillage","Construire un symétrique","Angles usuels","Mesures d’angles","Triangles particuliers","Somme des angles d’un triangle","Médiatrice et cercle circonscrit","Reconnaître des quadrilatères","Parallélogrammes particuliers"
],
"Données et probabilités":[
"Échelle de probabilités","Écriture d’une probabilité","Relier une expression de chance à une probabilité"
],
"Proportionnalité et fonctions":[
"Reconnaître une situation de proportionnalité","Résoudre un problème de proportionnalité","Calculer un pourcentage"
],
"Algorithmique":[
"Exécuter une séquence Scratch","Comprendre une boucle répéter","Suivre la valeur d’une variable"
]},
"4e":{
"Nombres et calculs":[
"Sommes et différences de nombres relatifs","Opposé d’un nombre et somme d’opposés","Tables de multiplication","Multiplier et diviser par 10, 100, 1 000","Multiplications à trou","Multiplication comme addition répétée","Addition et soustraction de fractions","Comparer des fractions","Fraction comme quotient","Fraction d’un nombre","Carrés parfaits de 0 à 12","Puissances simples","Valeur d’expressions numériques","Équations simples","Écriture 3x","Réduction d’expressions littérales","Réduction d’expressions comportant des carrés","Double, triple, moitié, prédécesseur, successeur et carré","Tester une égalité"
],
"Espace et géométrie":[
"Symétrie centrale d’un point","Placer un nombre relatif sur une droite graduée","Repérer un nombre relatif","Coordonnées dans un repère orthogonal","Reconnaître des solides","Volumes du cube, du pavé, du prisme et du cylindre","Base d’un prisme en perspective","Aires des figures usuelles","Symétrie axiale et demi-tour","Images de figures par transformation","Reconnaître un parallélogramme","Parallélogrammes particuliers","Droites remarquables dans un triangle"
],
"Données et probabilités":[
"Calculer une moyenne","Effectif manquant dans un tableau","Calculer une fréquence simple"
],
"Proportionnalité et fonctions":[
"Calculer un pourcentage simple","Compléter une égalité de pourcentages"
],
"Algorithmique":[
"Calculer avec une variable Scratch","Comprendre une boucle Scratch","Suivre une position dans Scratch"
]}
,
"3e":{
"Nombres et calculs":[
"Opérations sur les fractions","Puissance comme multiplication itérée","Multiplication de puissances d’un même nombre","Multiplication de puissances de même exposant","Écriture scientifique","Carrés parfaits de 0 à 12","Décomposition en facteurs premiers","Simplification de fractions","Dénominateur commun","Critères de divisibilité par 2, 3, 5 et 9","Équations simples","Simplification d’expressions littérales","Réduction d’expressions comportant des carrés","Valeur d’une expression algébrique","Nature d’une expression littérale","Développer et factoriser","Expression d’un nombre pair ou impair","Opposé d’une expression"
],
"Espace et géométrie":[
"Placer un nombre relatif sur une droite graduée","Repérer un nombre relatif","Coordonnées dans un repère orthogonal","Reconnaître des solides","Volume d’une pyramide ou d’un cône","Nature d’une face de pyramide","Patrons de pyramides","Triangle rectangle et cercle circonscrit","Égalité de Pythagore","Théorème de Thalès","Rapports trigonométriques","Droite des milieux","Symétrie axiale, demi-tour et translation"
],
"Données et probabilités":[
"Calculer une moyenne","Déterminer une médiane","Calculer l’étendue d’une série","Calculer une probabilité"
],
"Proportionnalité et fonctions":[
"Partager une somme selon un ratio","Partager une masse selon un ratio","Partage proportionnel à des âges","Calculer un pourcentage","Échelle d’une carte","Augmentation ou diminution en pourcentage","Calculer l’image d’un nombre","Calculer un antécédent avec une fonction linéaire","Calculer un antécédent avec une fonction affine","Lire une image ou un antécédent dans un tableau","Lire graphiquement une image","Lire graphiquement un antécédent","Interpréter l’égalité f(a) = b","Déterminer le coefficient d’une fonction linéaire","Reconnaître une fonction linéaire ou affine","Calculer une vitesse moyenne"
],
"Algorithmique":[
"Exécuter un programme Scratch avec une expression","Comprendre des boucles imbriquées","Interpréter une condition Scratch"
]}

,
"6e":{
"Nombres entiers et décimaux":[
"Restituer automatiquement des résultats usuels","Équivalences d’écritures décimales","Fractions décimales et écritures décimales","Multiplier un décimal par 1, 10, 100 ou 1 000","Diviser un décimal par 1, 10, 100 ou 1 000"
],
"Fractions":[
"Reconnaître une fraction dans plusieurs représentations","Relations entre fractions usuelles","Passer d’une écriture fractionnaire à une écriture décimale","Multiplier une fraction par un entier","Calculer une fraction d’une quantité"
],
"Longueurs et aires":[
"Unités de longueur","Relations entre unités de longueur","Convertir des longueurs","Utiliser le compas pour reporter une longueur","Périmètre du carré et du rectangle","Comparer des aires","Unités d’aire","Calculer une aire sur quadrillage","Relations entre unités d’aire"
],
"Repérage dans le temps et durées":[
"Lire l’heure","Placer les aiguilles d’une horloge","Unités de durée","Années bissextiles, siècles et millénaires","Relations entre fractions d’heure"
],
"Organisation et gestion de données":[
"Lire un tableau","Lire un diagramme en barres","Lire un diagramme circulaire","Lire une courbe"
],
"Proportionnalité":[
"Repérer des relations multiplicatives simples","Comprendre les expressions fois plus ou fois moins"
],
"Géométrie plane et espace":[
"Lexique et codage géométriques","Reconnaître un carré, un rectangle et un triangle","Axes de symétrie","Coder des angles droits et des longueurs égales","Reconnaître des solides usuels"
],
"Calcul mental":[
"Ajouter ou soustraire un entier à un décimal","Ajouter un entier avec retenue","Multiplier un décimal par 10, 100 ou 1 000","Diviser un décimal par 10, 100 ou 1 000","Tables de multiplication","Doubles et moitiés","Somme de plusieurs nombres","Ordre de grandeur","Produit simple"
],
"Algorithmique":[
"Exécuter une séquence Scratch","Comprendre une boucle répéter","Suivre la valeur d’une variable"
]}

};

function rand(a,b){return Math.floor(Math.random()*(b-a+1))+a}
function fmt(n){return String(Math.round(n*1000)/1000).replace(".",",")}
function displayNumber(n){return fmt(n).replace("-","−")}
function parenthesizedIfNegative(n){return n<0?`(${displayNumber(n)})`:displayNumber(n)}
function q(text,answer,explanation,alts=[],meta={}){return {text,answer:String(answer),explanation,alts:alts.map(String),...meta}}
function gcd(a,b){while(b){[a,b]=[b,a%b]}return Math.abs(a)}
function simp(n,d){let g=gcd(n,d); return `${n/g}/${d/g}`}
function piTerm(coefficient){return coefficient===1?"π":`${coefficient}π`}
function quadraticExpression(quadraticCoefficient,linearCoefficient,constant=0){
  const terms=[];
  const addTerm=(coefficient,variable="")=>{
    if(coefficient===0)return;
    const absolute=Math.abs(coefficient);
    const body=variable&&absolute===1?variable:`${absolute}${variable}`;
    if(!terms.length)terms.push(coefficient<0?`−${body}`:body);
    else terms.push(`${coefficient<0?"−":"+"} ${body}`);
  };
  addTerm(quadraticCoefficient,"x²");
  addTerm(linearCoefficient,"x");
  addTerm(constant);
  return terms.join(" ")||"0";
}
function divis(n){let a=[];if(n%2===0)a.push("2");if(n%5===0)a.push("5");if(n%10===0)a.push("10");return a.length?a.join(","):"aucun"}
function makeGraphReadingQuestion(reading){
  const quadratic=Math.random()<.5;
  const targetX=quadratic?rand(1,2):rand(-2,2);
  const graph=quadratic
    ?{kind:"quadratic",a:Math.random()<.5?1:-1,b:rand(-1,1)}
    :{kind:"affine",a:[-2,-1,1,2][rand(0,3)],b:rand(-1,1)};
  const targetY=graph.kind==="quadratic"
    ?graph.a*targetX*targetX+graph.b
    :graph.a*targetX+graph.b;
  if(reading==="image"){
    return q(
      `À l’aide de la courbe représentative de f, lis l’image de ${targetX}.`,
      targetY,
      `À l’abscisse ${targetX}, la courbe a pour ordonnée ${targetY}. Donc f(${targetX}) = ${targetY}.`,
      [],
      {graph}
    );
  }
  const alternatives=graph.kind==="quadratic"?[-targetX]:[];
  return q(
    `À l’aide de la courbe représentative de f, donne un antécédent de ${targetY}.`,
    targetX,
    `La courbe passe par le point (${targetX} ; ${targetY}) : ${targetX} est donc un antécédent de ${targetY}.`,
    alternatives,
    {graph}
  );
}

function escapeXml(value){
  return String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}[char]));
}
function geometrySvg(label,body,viewBox="0 0 320 200"){
  return `<svg class="geometry-svg" viewBox="${viewBox}" role="img" aria-label="${escapeXml(label)}"><title>${escapeXml(label)}</title>${body}</svg>`;
}
let activeGeometryBoard=null;
let geometryBoardSequence=0;
function clearActiveGeometryBoard(){
  if(activeGeometryBoard&&window.JXG?.JSXGraph){
    try{window.JXG.JSXGraph.freeBoard(activeGeometryBoard)}catch(error){console.warn("Impossible de libérer la figure JSXGraph.",error)}
  }
  activeGeometryBoard=null;
}
function geometryPalette(){
  const styles=getComputedStyle(document.documentElement);
  return {
    accent:styles.getPropertyValue("--accent").trim()||"#7c3aed",
    accentLight:styles.getPropertyValue("--accent-light").trim()||"#ede9fe",
    border:styles.getPropertyValue("--card-border").trim()||"#dce3ee",
    text:styles.getPropertyValue("--text-primary").trim()||"#172033",
    secondary:styles.getPropertyValue("--text-secondary").trim()||"#52637b"
  };
}
function jsxPoint(board,coordinates,name,palette,labelOffset=[8,8]){
  return board.create("point",coordinates,{
    name,
    fixed:true,
    highlight:false,
    size:2.5,
    face:"o",
    fillColor:palette.accent,
    strokeColor:palette.accent,
    label:{color:palette.text,fontSize:14,cssStyle:"font-weight:700",offset:labelOffset}
  });
}
function jsxSegment(board,start,end,palette,attributes={}){
  return board.create("segment",[start,end],{
    fixed:true,
    highlight:false,
    strokeColor:palette.text,
    strokeWidth:2.4,
    ...attributes
  });
}
function jsxRightAngleMarker(board,x,y,palette){
  return board.create("curve",[[x,x+.5,x+.5],[y+.5,y+.5,y]],{
    fixed:true,
    highlight:false,
    strokeColor:palette.accent,
    strokeWidth:2
  });
}
function jsxText(board,x,y,text,palette,attributes={}){
  return board.create("text",[x,y,text],{
    fixed:true,
    highlight:false,
    color:palette.accent,
    fontSize:13,
    cssStyle:"font-weight:700",
    anchorX:"middle",
    anchorY:"middle",
    ...attributes
  });
}
function jsxTriangle(board,coordinates,names,palette,labelOffsets=[]){
  const points=coordinates.map((coordinates,index)=>jsxPoint(board,coordinates,names[index],palette,labelOffsets[index]));
  board.create("polygon",points,{
    fixed:true,
    highlight:false,
    fillColor:palette.accent,
    fillOpacity:.07,
    borders:{strokeColor:palette.text,strokeWidth:2.4,highlight:false},
    vertices:{fixed:true,highlight:false}
  });
  return points;
}
function thalesFigureData(exercise){
  if(exercise.thales)return exercise.thales;
  const [am,ab,ac]=questionNumbers(exercise.text);
  return {am,ab,an:exercise.answer,ac,unknown:"AN"};
}
function thalesLengthLabel(name,value,unknown){
  return `${name} = ${name===unknown?"?":`${value} cm`}`;
}
function trigonometryFigureData(exercise){
  if(exercise.trigonometry)return exercise.trigonometry;
  const [ab,ac,bc]=questionNumbers(exercise.text);
  return {ab,ac,bc,unknown:null,known:["AB","AC","BC"]};
}
function trigonometryLengthLabel(data,name,value){
  if(name===data.unknown)return `${name} = ?`;
  if(data.known===name||Array.isArray(data.known)&&data.known.includes(name))return `${name} = ${value} cm`;
  return "";
}
function renderJsxGeometry(exercise,host){
  const supportedNotions=new Set(["Somme des angles d’un triangle","Égalité de Pythagore","Théorème de Thalès","Rapports trigonométriques"]);
  if(!supportedNotions.has(exercise.notion)||!window.JXG?.JSXGraph)return false;
  const palette=geometryPalette();
  const boardId=`geometry-board-${++geometryBoardSequence}`;
  host.innerHTML=`<div id="${boardId}" class="geometry-board jxgbox" role="img"></div>`;
  const container=host.firstElementChild;
  const labels={
    "Somme des angles d’un triangle":"Triangle avec deux angles connus et un angle inconnu",
    "Égalité de Pythagore":"Triangle ABC rectangle en A, sans égalité indiquée",
    "Théorème de Thalès":"Configuration de Thalès avec une longueur inconnue",
    "Rapports trigonométriques":"Triangle ABC rectangle en A avec une longueur à calculer"
  };
  if(exercise.notion==="Théorème de Thalès")labels[exercise.notion]=`Configuration de Thalès avec ${thalesFigureData(exercise).unknown} inconnue`;
  container.setAttribute("aria-label",labels[exercise.notion]);
  try{
    const board=window.JXG.JSXGraph.initBoard(boardId,{
      renderer:"svg",
      boundingbox:[-5.8,4.6,5.8,-3.6],
      keepaspectratio:true,
      axis:false,
      showNavigation:false,
      showCopyright:false,
      showInfobox:false,
      pan:{enabled:false},
      zoom:{enabled:false},
      keyboard:{enabled:false}
    });
    activeGeometryBoard=board;
    const values=questionNumbers(exercise.text);
    if(exercise.notion==="Somme des angles d’un triangle"){
      const [A,B,C]=jsxTriangle(board,[[-4,-2.1],[.2,3.05],[4.1,-2.1]],["","",""],palette);
      board.create("angle",[C,A,B],{name:"",withLabel:false,radius:.75,fixed:true,highlight:false,strokeColor:palette.accent,fillColor:palette.accent,fillOpacity:.12});
      board.create("angle",[B,C,A],{name:"",withLabel:false,radius:.75,fixed:true,highlight:false,strokeColor:palette.accent,fillColor:palette.accent,fillOpacity:.12});
      board.create("angle",[A,B,C],{name:"",withLabel:false,radius:.65,fixed:true,highlight:false,strokeColor:palette.text,fillColor:palette.border,fillOpacity:.2});
      jsxText(board,-3.25,-1.62,`${values[0]}°`,palette);
      jsxText(board,3.25,-1.62,`${values[1]}°`,palette);
      jsxText(board,.2,2.18,"?",palette,{color:palette.text,fontSize:16});
    }else if(exercise.notion==="Égalité de Pythagore"){
      const [A,B,C]=jsxTriangle(board,[[-3.4,-2.3],[-3.4,3],[4,-2.3]],["A","B","C"],palette,[[10,-14],[10,10],[10,-12]]);
      jsxRightAngleMarker(board,A.X(),A.Y(),palette);
    }else if(exercise.notion==="Théorème de Thalès"){
      const {am,ab,an,ac,unknown}=thalesFigureData(exercise),visualRatio=.42;
      const [A,B,C]=jsxTriangle(board,[[0,3.4],[-4.2,-2.5],[4.4,-2.5]],["A","B","C"],palette,[[8,13],[-17,-2],[13,-2]]);
      const M=jsxPoint(board,[A.X()+visualRatio*(B.X()-A.X()),A.Y()+visualRatio*(B.Y()-A.Y())],"M",palette,[-22,7]);
      const N=jsxPoint(board,[A.X()+visualRatio*(C.X()-A.X()),A.Y()+visualRatio*(C.Y()-A.Y())],"N",palette,[13,7]);
      jsxSegment(board,M,N,palette,{strokeColor:palette.accent});
      jsxText(board,-2.15,2.45,thalesLengthLabel("AM",am,unknown),palette,{color:unknown==="AM"?palette.text:palette.accent});
      jsxText(board,-4.25,-.45,thalesLengthLabel("AB",ab,unknown),palette,{color:unknown==="AB"?palette.text:palette.accent});
      jsxText(board,2.15,2.45,thalesLengthLabel("AN",an,unknown),palette,{color:unknown==="AN"?palette.text:palette.accent});
      jsxText(board,4.35,-.45,thalesLengthLabel("AC",ac,unknown),palette,{color:unknown==="AC"?palette.text:palette.accent});
    }else{
      const data=trigonometryFigureData(exercise),{ab,ac,bc}=data;
      const [A,B,C]=jsxTriangle(board,[[-3.5,-2.3],[-3.5,2.8],[4,-2.3]],["A","B","C"],palette,[[10,-14],[10,10],[10,-12]]);
      jsxRightAngleMarker(board,A.X(),A.Y(),palette);
      board.create("angle",[A,B,C],{name:"",withLabel:false,radius:.7,fixed:true,highlight:false,strokeColor:palette.accent,fillColor:palette.accent,fillOpacity:.12});
      const abLabel=trigonometryLengthLabel(data,"AB",ab),acLabel=trigonometryLengthLabel(data,"AC",ac),bcLabel=trigonometryLengthLabel(data,"BC",bc);
      if(abLabel)jsxText(board,-4.35,.2,abLabel,palette,{color:data.unknown==="AB"?palette.text:palette.accent});
      if(acLabel)jsxText(board,.2,-2.75,acLabel,palette,{color:data.unknown==="AC"?palette.text:palette.accent});
      if(bcLabel)jsxText(board,1.45,1.55,bcLabel,palette,{color:data.unknown==="BC"?palette.text:palette.accent});
      jsxText(board,-2.87,1.61,"B",palette,{fontSize:16});
      board.create("curve",[[-3.06,-2.87,-2.68],[1.85,1.98,1.85]],{
        fixed:true,
        highlight:false,
        strokeColor:palette.text,
        strokeWidth:1.8
      });
    }
    board.update();
    host.insertAdjacentHTML("beforeend",`<small class="geometry-note">Schéma non à l’échelle.</small>`);
    return true;
  }catch(error){
    console.warn("JSXGraph indisponible : utilisation de la figure SVG de secours.",error);
    clearActiveGeometryBoard();
    host.innerHTML="";
    return false;
  }
}
function scratchTokensMarkup(value,variableMode="dropdown"){
  const pattern=/([−-]?\d+(?:[.,]\d+)?|compteur|résultat|nombre|points|score|réponse|\bx\b)/giu;
  let markup="",lastIndex=0;
  for(const match of String(value).matchAll(pattern)){
    markup+=escapeXml(String(value).slice(lastIndex,match.index));
    const token=match[0],normalized=token.toLowerCase();
    if(/^[−\-\d]/.test(token))markup+=`<span class="scratch-input">${escapeXml(token)}</span>`;
    else if(normalized==="réponse")markup+=`<span class="scratch-reporter scratch-sensing-reporter">${escapeXml(token)}</span>`;
    else if(variableMode==="reporter")markup+=`<span class="scratch-reporter scratch-variable-reporter">${escapeXml(token)}</span>`;
    else if(variableMode==="plain")markup+=escapeXml(token);
    else markup+=`<span class="scratch-variable-token">${escapeXml(token)}<span aria-hidden="true">⌄</span></span>`;
    lastIndex=match.index+token.length;
  }
  return markup+escapeXml(String(value).slice(lastIndex));
}
function scratchBlockTextMarkup(block){
  const text=String(block.text);
  if(block.type==="event"&&text==="quand le drapeau vert est cliqué"){
    return `quand <span class="scratch-flag" aria-label="drapeau vert">⚑</span> est cliqué`;
  }
  const condition=text.match(/^si (.+) alors$/);
  if(block.type==="control"&&condition){
    return `si <span class="scratch-reporter scratch-condition">${scratchTokensMarkup(condition[1],"reporter")}</span> alors`;
  }
  const assignment=text.match(/^(mettre .+? à )(.+)$/);
  if(block.type==="variables"&&assignment&&/[×+−*/]|modulo/.test(assignment[2])){
    return `${scratchTokensMarkup(assignment[1])}<span class="scratch-reporter scratch-operator-reporter">${scratchTokensMarkup(assignment[2],"reporter")}</span>`;
  }
  const variableMode=block.type==="looks"?"reporter":block.type==="variables"?"dropdown":"plain";
  return scratchTokensMarkup(text,variableMode);
}
function scratchProgramMarkup(blocks){
  const root=[],branches=[root],controls=[];
  blocks.forEach(block=>{
    const type=block.type||"variables";
    const isControlStart=type==="control"&&/^(répéter|si )/.test(block.text);
    if(isControlStart){
      const node={kind:"control",block,then:[],otherwise:null};
      branches.at(-1).push(node);
      controls.push(node);
      branches.push(node.then);
    }else if(type==="control"&&block.text==="sinon"&&controls.length){
      const node=controls.at(-1);
      node.otherwise=[];
      branches[branches.length-1]=node.otherwise;
    }else if(/^fin de (?:la boucle|la condition)/.test(block.text)&&controls.length){
      controls.pop();
      branches.pop();
    }else{
      branches.at(-1).push({kind:"block",block});
    }
  });
  const renderBlock=(block,extraClass="")=>{
    const type=block.type||"variables";
    const classes=["scratch-block",`scratch-${type}`];
    if(extraClass)classes.push(extraClass);
    return `<div class="${classes.join(" ")}">${scratchBlockTextMarkup(block)}</div>`;
  };
  const renderNodes=nodes=>nodes.map(node=>{
    if(node.kind==="block")return renderBlock(node.block);
    const thenBranch=`<div class="scratch-control-body">${renderNodes(node.then)}</div>`;
    const elseBranch=node.otherwise===null?"":`${renderBlock({type:"control",text:"sinon"},"scratch-control-middle")}<div class="scratch-control-body">${renderNodes(node.otherwise)}</div>`;
    const footerClass=String(node.block.text).startsWith("répéter")?" scratch-loop-footer":"";
    return `<div class="scratch-control-stack">${renderBlock(node.block,"scratch-control-start")}${thenBranch}${elseBranch}<div class="scratch-control-footer${footerClass}" aria-hidden="true"></div></div>`;
  }).join("");
  const content=renderNodes(root);
  return `<div class="scratch-program" role="img" aria-label="Programme Scratch">${content}</div>`;
}
function questionNumbers(text){
  return (String(text).match(/-?\d+(?:[.,]\d+)?/g)||[]).map(value=>Number(value.replace(",",".")));
}
function numberLineSvg(exercise){
  const value=Number(String(exercise.answer).replace(",","."));
  const range=Math.max(5,Math.ceil(Math.abs(value))+1),left=28,right=292,y=100;
  const position=left+(value+range)/(2*range)*(right-left),tickStep=Math.max(1,Math.ceil(range/5));
  let ticks="";
  for(let n=-range;n<=range;n+=tickStep){
    const x=left+(n+range)/(2*range)*(right-left);
    ticks+=`<line class="geo-line" x1="${x}" y1="${y-5}" x2="${x}" y2="${y+5}"/><text class="geo-label" x="${x}" y="${y+22}">${n}</text>`;
  }
  return geometrySvg("Droite graduée",`<defs><marker id="geo-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path class="geo-fill" d="M0,0 L7,3.5 L0,7 Z"/></marker></defs><line class="geo-line" x1="${left}" y1="${y}" x2="${right}" y2="${y}" marker-end="url(#geo-arrow)"/>${ticks}<circle class="geo-point" cx="${position}" cy="${y}" r="6"/><text class="geo-accent-label" x="${position}" y="${y-14}">A</text>`);
}
function coordinateSvg(exercise){
  const values=questionNumbers(exercise.text),coordinateMatch=exercise.text.match(/A\((-?\d+(?:[.,]\d+)?);(-?\d+(?:[.,]\d+)?)\)/);
  const x=coordinateMatch?Number(coordinateMatch[1].replace(",",".")):(values[0]??0);
  const y=coordinateMatch?Number(coordinateMatch[2].replace(",",".")):(values[1]??0);
  const originX=160,originY=110,step=16,pointX=originX+x*step,pointY=originY-y*step;
  let grid="",ticks="";
  for(let n=-6;n<=6;n++){
    const gx=originX+n*step,gy=originY-n*step;
    grid+=`<line class="geo-grid" x1="${gx}" y1="14" x2="${gx}" y2="206"/><line class="geo-grid" x1="64" y1="${gy}" x2="256" y2="${gy}"/>`;
    if(n!==0)ticks+=`<text class="geo-small-label" x="${gx}" y="${originY+14}">${n}</text><text class="geo-small-label geo-y-label" x="${originX-8}" y="${gy+3}">${n}</text>`;
  }
  return geometrySvg("Repère orthogonal avec le point A",`<defs><marker id="axis-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path class="geo-fill" d="M0,0 L7,3.5 L0,7 Z"/></marker></defs>${grid}<line class="geo-axis" x1="58" y1="${originY}" x2="266" y2="${originY}" marker-end="url(#axis-arrow)"/><line class="geo-axis" x1="${originX}" y1="212" x2="${originX}" y2="8" marker-end="url(#axis-arrow)"/>${ticks}<text class="geo-label" x="${originX+10}" y="${originY+16}">O</text><circle class="geo-point" cx="${pointX}" cy="${pointY}" r="6"/><text class="geo-accent-label" x="${pointX-12}" y="${pointY-10}">A</text>`,"0 0 320 220");
}
function functionGraphSvg(exercise){
  const graph=exercise.graph,originX=180,originY=130,step=22,min=-5,max=5;
  const toX=x=>originX+x*step,toY=y=>originY-y*step;
  let grid="",labels="";
  for(let n=min;n<=max;n++){
    const gx=toX(n),gy=toY(n);
    grid+=`<line class="geo-grid" x1="${gx}" y1="${toY(max)}" x2="${gx}" y2="${toY(min)}"/><line class="geo-grid" x1="${toX(min)}" y1="${gy}" x2="${toX(max)}" y2="${gy}"/>`;
    if(n!==0)labels+=`<text class="geo-small-label graph-label" x="${gx}" y="${originY+13}">${n}</text><text class="geo-small-label geo-y-label graph-label" x="${originX-7}" y="${gy}">${n}</text>`;
  }
  const sections=[];let current=[];
  for(let i=0;i<=200;i++){
    const x=min+(max-min)*i/200;
    const y=graph.kind==="quadratic"?graph.a*x*x+graph.b:graph.a*x+graph.b;
    if(y>=min&&y<=max)current.push(`${toX(x).toFixed(1)},${toY(y).toFixed(1)}`);
    else if(current.length){sections.push(current);current=[]}
  }
  if(current.length)sections.push(current);
  const curves=sections.map(points=>`<polyline class="geo-accent function-curve" points="${points.join(" ")}"/>`).join("");
  return geometrySvg(
    "Courbe représentative d’une fonction dans un repère gradué",
    `<defs><marker id="graph-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path class="geo-fill" d="M0,0 L7,3.5 L0,7 Z"/></marker></defs>${grid}<line class="geo-axis" x1="${toX(min)-5}" y1="${originY}" x2="${toX(max)+12}" y2="${originY}" marker-end="url(#graph-arrow)"/><line class="geo-axis" x1="${originX}" y1="${toY(min)+5}" x2="${originX}" y2="${toY(max)-12}" marker-end="url(#graph-arrow)"/>${labels}<text class="geo-label" x="${originX+10}" y="${originY+14}">O</text><text class="geo-label" x="${toX(max)+16}" y="${originY+13}">x</text><text class="geo-label" x="${originX+12}" y="${toY(max)-14}">y</text>${curves}<text class="geo-accent-label graph-curve-label" x="286" y="40">C<tspan dy="3" font-size="9">f</tspan></text>`,
    "0 0 360 260"
  );
}
function angleSvg(exercise){
  const angle=Number(exercise.answer);
  if(angle===180)return geometrySvg("Schéma d’un angle plat, sans mesure indiquée",`<line class="geo-line" x1="35" y1="120" x2="285" y2="120"/><circle class="geo-point" cx="160" cy="120" r="4"/><path class="geo-accent geo-dash" d="M88 116 A72 72 0 0 1 232 116"/><text class="geo-unknown-label" x="160" y="63">?</text>`);
  if(angle===360)return geometrySvg("Schéma d’un angle plein, sans mesure indiquée",`<circle class="geo-accent" cx="160" cy="102" r="62"/><path class="geo-line" d="M160 102 L222 102"/><path class="geo-point" d="M218 94 L232 102 L218 110 Z"/><text class="geo-unknown-label" x="160" y="185">?</text>`);
  return geometrySvg("Schéma d’un angle droit, sans mesure indiquée",`<path class="geo-line" d="M75 160 L75 55 M75 160 L245 160"/><path class="geo-accent" d="M75 138 L97 138 L97 160"/><text class="geo-unknown-label" x="120" y="125">?</text>`);
}
function triangleSvg(exercise){
  const notion=exercise.notion,numbers=questionNumbers(exercise.text);
  if(notion==="Égalité de Pythagore"){
    return geometrySvg("Triangle ABC rectangle en A",`<path class="geo-line" d="M75 160 L75 45 L255 160 Z"/><path class="geo-accent" d="M75 140 L95 140 L95 160"/><text class="geo-label" x="62" y="177">A</text><text class="geo-label" x="61" y="39">B</text><text class="geo-label" x="263" y="177">C</text>`);
  }
  if(notion==="Triangle rectangle et cercle circonscrit"){
    return geometrySvg("Triangle rectangle inscrit dans un cercle, centre non indiqué",`<circle class="geo-accent" cx="160" cy="105" r="72"/><path class="geo-line" d="M88 105 L160 33 L232 105 Z"/><path class="geo-accent" d="M150 43 L160 53 L170 43"/><text class="geo-unknown-label" x="160" y="123">?</text>`);
  }
  if(notion==="Droite des milieux"){
    return geometrySvg("Segment joignant les milieux de deux côtés d’un triangle",`<path class="geo-line" d="M52 165 L160 35 L268 165 Z"/><line class="geo-accent" x1="106" y1="100" x2="214" y2="100"/><circle class="geo-point" cx="106" cy="100" r="4"/><circle class="geo-point" cx="214" cy="100" r="4"/><path class="geo-tick" d="M74 128 l8 7 M128 68 l8 7 M184 68 l8 7 M238 128 l8 7"/><text class="geo-label" x="96" y="91">M</text><text class="geo-label" x="224" y="91">N</text>`);
  }
  if(notion==="Droites remarquables dans un triangle"){
    const answer=exercise.answer;
    let special="";
    if(answer==="médiane")special=`<line class="geo-accent" x1="160" y1="35" x2="160" y2="165"/><circle class="geo-point" cx="160" cy="165" r="4"/><path class="geo-tick" d="M101 157 l7 12 M212 157 l7 12"/>`;
    else if(answer==="hauteur")special=`<line class="geo-accent geo-dash" x1="160" y1="35" x2="160" y2="165"/><path class="geo-accent" d="M160 148 L177 148 L177 165"/>`;
    else special=`<line class="geo-accent geo-dash" x1="160" y1="72" x2="160" y2="190"/><circle class="geo-point" cx="160" cy="165" r="4"/><path class="geo-accent" d="M160 148 L177 148 L177 165"/>`;
    return geometrySvg("Triangle et droite remarquable",`<path class="geo-line" d="M52 165 L160 35 L268 165 Z"/>${special}`);
  }
  const first=numbers[0],second=numbers[1],kind=exercise.text;
  if(kind.includes("équilatéral"))return geometrySvg("Triangle équilatéral avec angle inconnu",`<path class="geo-line" d="M70 175 L160 19.1154 L250 175 Z"/><path class="geo-tick" d="M110 94 L120 100 M200 100 L210 94 M160 169 L160 181"/><path class="geo-accent" d="M94 175 A24 24 0 0 0 82 154.2"/><text class="geo-unknown-label" x="101" y="153">?</text>`);
  if(kind.includes("isocèle rectangle"))return geometrySvg("Triangle isocèle rectangle avec angle aigu inconnu",`<path class="geo-line" d="M70 165 L70 45 L190 165 Z"/><path class="geo-accent" d="M70 145 L90 145 L90 165"/><path class="geo-tick" d="M62 102 l16 0 M125 157 l10 10"/><text class="geo-unknown-label" x="81" y="71">?</text>`);
  if(kind.includes("rectangle"))return geometrySvg("Triangle rectangle avec angle droit inconnu",`<path class="geo-line" d="M70 165 L70 45 L255 165 Z"/><text class="geo-unknown-label" x="92" y="142">?</text>`);
  return geometrySvg("Triangle avec deux angles connus et un angle inconnu",`<path class="geo-line" d="M55 165 L150 40 L265 165 Z"/><path class="geo-accent" d="M78 165 A24 24 0 0 1 70 146 M236 165 A28 28 0 0 0 246 144 M137 56 A22 22 0 0 1 164 58"/><text class="geo-accent-label" x="82" y="145">${first??"α"}°</text><text class="geo-accent-label" x="228" y="142">${second??"β"}°</text><text class="geo-unknown-label" x="151" y="72">?</text>`);
}
function mediatrixSvg(){
  return geometrySvg("Médiatrice d’un segment",`<line class="geo-line" x1="55" y1="125" x2="265" y2="125"/><line class="geo-accent geo-dash" x1="160" y1="30" x2="160" y2="185"/><circle class="geo-point" cx="160" cy="125" r="4"/><path class="geo-accent" d="M160 107 L178 107 L178 125"/><path class="geo-tick" d="M103 117 l8 16 M209 117 l8 16"/><text class="geo-label" x="45" y="146">A</text><text class="geo-label" x="272" y="146">B</text><text class="geo-accent-label" x="172" y="145">M</text>`);
}
function segmentContextSvg(){
  return geometrySvg("Segment AB et son milieu M, sans droite tracée",`<line class="geo-line" x1="55" y1="112" x2="265" y2="112"/><circle class="geo-point" cx="55" cy="112" r="4"/><circle class="geo-point" cx="160" cy="112" r="4"/><circle class="geo-point" cx="265" cy="112" r="4"/><path class="geo-tick" d="M103 104 l8 16 M209 104 l8 16"/><text class="geo-label" x="55" y="138">A</text><text class="geo-label" x="160" y="138">M</text><text class="geo-label" x="265" y="138">B</text>`);
}
function areaSvg(exercise){
  const values=questionNumbers(exercise.text);
  if(exercise.text.includes("disque"))return geometrySvg("Disque et rayon",`<circle class="geo-line" cx="160" cy="100" r="62"/><circle class="geo-point" cx="160" cy="100" r="4"/><line class="geo-accent geo-dash" x1="160" y1="100" x2="222" y2="100"/><text class="geo-accent-label" x="191" y="88">r = ${values[0]} cm</text>`);
  if(exercise.text.includes("rectangle"))return geometrySvg("Rectangle avec ses dimensions",`<rect class="geo-line" x="65" y="50" width="190" height="110"/><text class="geo-accent-label" x="160" y="184">${values[0]} cm</text><text class="geo-accent-label" x="42" y="108" transform="rotate(-90 42 108)">${values[1]} cm</text>`);
  return geometrySvg("Triangle avec base et hauteur",`<path class="geo-line" d="M55 165 L185 35 L265 165 Z"/><line class="geo-accent geo-dash" x1="185" y1="35" x2="185" y2="165"/><path class="geo-accent" d="M185 148 L202 148 L202 165"/><text class="geo-accent-label" x="160" y="188">b = ${values[0]} cm</text><text class="geo-accent-label" x="198" y="102">h = ${values[1]} cm</text>`);
}
function perimeterSvg(exercise){
  const values=questionNumbers(exercise.text);
  if(exercise.text.includes("carré"))return geometrySvg("Carré avec la longueur du côté indiquée",`<rect class="geo-line geo-surface" x="90" y="35" width="140" height="140"/><text class="geo-accent-label" x="160" y="192">${values[0]} cm</text>`);
  return geometrySvg("Rectangle avec sa longueur et sa largeur indiquées",`<rect class="geo-line geo-surface" x="55" y="55" width="210" height="110"/><text class="geo-accent-label" x="160" y="187">${values[0]} cm</text><text class="geo-accent-label" x="34" y="110" transform="rotate(-90 34 110)">${values[1]} cm</text>`);
}
function compareAreasSvg(exercise){
  const values=questionNumbers(exercise.text);
  return geometrySvg("Deux rectangles A et B avec leurs dimensions",`<rect class="geo-line geo-surface" x="24" y="60" width="118" height="84"/><rect class="geo-line geo-surface" x="178" y="60" width="118" height="84"/><text class="geo-label" x="83" y="42">A</text><text class="geo-label" x="237" y="42">B</text><text class="geo-accent-label" x="83" y="162">${values[0]} × ${values[1]}</text><text class="geo-accent-label" x="237" y="162">${values[2]} × ${values[3]}</text>`);
}
function gridAreaSvg(exercise){
  const [columns,rows]=questionNumbers(exercise.text),left=60,top=24,width=200,height=160,cellWidth=width/columns,cellHeight=height/rows;
  let grid=`<rect class="geo-surface" x="${left}" y="${top}" width="${width}" height="${height}"/>`;
  for(let column=0;column<=columns;column++){
    const x=left+column*cellWidth;
    grid+=`<line class="geo-grid-strong" x1="${x}" y1="${top}" x2="${x}" y2="${top+height}"/>`;
  }
  for(let row=0;row<=rows;row++){
    const y=top+row*cellHeight;
    grid+=`<line class="geo-grid-strong" x1="${left}" y1="${y}" x2="${left+width}" y2="${y}"/>`;
  }
  return geometrySvg(`Rectangle quadrillé de ${columns} carreaux sur ${rows}`,grid);
}
function thalesSvg(exercise){
  const {am,ab,an,ac,unknown}=thalesFigureData(exercise);
  const label=(name,value)=>`<text class="${name===unknown?"geo-unknown-label":"geo-accent-label"}"`;
  return geometrySvg(`Configuration de Thalès avec ${unknown} inconnue`,`<path class="geo-line" d="M160 25 L58 180 L262 180 Z"/><line class="geo-accent" x1="117" y1="90" x2="203" y2="90"/><path class="geo-parallel" d="M151 90 l8 -5 l8 5 M151 180 l8 -5 l8 5"/><circle class="geo-point" cx="117" cy="90" r="4"/><circle class="geo-point" cx="203" cy="90" r="4"/><text class="geo-label" x="160" y="10">A</text><text class="geo-label" x="45" y="191">B</text><text class="geo-label" x="275" y="191">C</text><text class="geo-label" x="103" y="83">M</text><text class="geo-label" x="217" y="83">N</text>${label("AM",am)} x="91" y="48">${thalesLengthLabel("AM",am,unknown)}</text>${label("AB",ab)} x="66" y="132">${thalesLengthLabel("AB",ab,unknown)}</text>${label("AN",an)} x="229" y="48">${thalesLengthLabel("AN",an,unknown)}</text>${label("AC",ac)} x="255" y="132">${thalesLengthLabel("AC",ac,unknown)}</text>`);
}
function trigonometrySvg(exercise){
  const data=trigonometryFigureData(exercise),{ab,ac,bc}=data;
  const sideLabel=(name,value,x,y)=>{
    const text=trigonometryLengthLabel(data,name,value);
    return text?`<text class="${name===data.unknown?"geo-unknown-label":"geo-accent-label"}" x="${x}" y="${y}">${text}</text>`:"";
  };
  return geometrySvg(`Triangle ABC rectangle en A avec ${data.unknown||"des longueurs données"} à calculer`,`<path class="geo-line geo-surface" d="M62 170 L62 45 L262 170 Z"/><path class="geo-accent" d="M62 150 L82 150 L82 170"/><path class="geo-accent" d="M62 72 A27 27 0 0 1 88 62"/><text class="geo-label" x="48" y="184">A</text><text class="geo-label" x="48" y="34">B</text><text class="geo-label" x="276" y="184">C</text>${sideLabel("AB",ab,40,108)}${sideLabel("AC",ac,162,188)}${sideLabel("BC",bc,180,96)}<text class="geo-unknown-label" x="94" y="103">B</text><path class="geo-angle-hat" d="M88 95 L94 90 L100 95"/>`);
}
function symmetryShapeSvg(exercise){
  const source=exercise.text.toLowerCase();
  if(source.includes("carré"))return geometrySvg("Carré sans axes tracés",`<rect class="geo-line geo-surface" x="90" y="35" width="140" height="140"/>`);
  if(source.includes("rectangle"))return geometrySvg("Rectangle sans axes tracés",`<rect class="geo-line geo-surface" x="55" y="60" width="210" height="105"/>`);
  if(source.includes("cercle"))return geometrySvg("Cercle sans axes tracés",`<circle class="geo-line geo-surface" cx="160" cy="105" r="72"/>`);
  return geometrySvg("Triangle équilatéral sans axes tracés",`<path class="geo-line geo-surface" d="M58 172 L160 32 L262 172 Z"/>`);
}
function solidSvg(exercise){
  const source=exercise.text.toLowerCase(),values=questionNumbers(exercise.text);
  if(source.includes("cylindre"))return geometrySvg("Cylindre avec les dimensions données",`<ellipse class="geo-line geo-surface" cx="160" cy="48" rx="58" ry="20"/><path class="geo-line" d="M102 48 V150 M218 48 V150"/><ellipse class="geo-line geo-surface" cx="160" cy="150" rx="58" ry="20"/><line class="geo-accent geo-dash" x1="160" y1="48" x2="218" y2="48"/><line class="geo-accent geo-dash" x1="232" y1="48" x2="232" y2="150"/><text class="geo-accent-label" x="185" y="36">r = ${values[0]} cm</text><text class="geo-accent-label" x="253" y="99">h = ${values[1]} cm</text>`);
  if(source.includes("cône"))return geometrySvg("Cône",`<ellipse class="geo-line" cx="160" cy="155" rx="65" ry="21"/><path class="geo-line" d="M95 155 L160 35 L225 155"/><line class="geo-accent geo-dash" x1="160" y1="35" x2="160" y2="155"/>`);
  if(source.includes("pyramide"))return geometrySvg("Pyramide avec aire de base et hauteur données",`<path class="geo-line" d="M62 150 L220 150 L258 120 L103 120 Z M160 35 L62 150 M160 35 L220 150 M160 35 L258 120 M160 35 L103 120"/><line class="geo-accent geo-dash" x1="160" y1="35" x2="160" y2="135"/><text class="geo-accent-label" x="183" y="84">h = ${values[1]} cm</text><text class="geo-accent-label" x="163" y="174">Aire de base = ${values[0]} cm²</text>`);
  if(source.includes("boule"))return geometrySvg("Boule",`<circle class="geo-line" cx="160" cy="105" r="70"/><ellipse class="geo-accent geo-dash" cx="160" cy="105" rx="70" ry="24"/><path class="geo-accent" d="M110 55 A70 70 0 0 0 110 155"/>`);
  if(source.includes("prisme"))return geometrySvg("Prisme droit",`<path class="geo-line" d="M70 150 L70 70 L130 35 L130 115 Z M70 70 L190 70 L250 35 L130 35 M190 70 L190 150 L250 115 L250 35 M70 150 L190 150 M130 115 L250 115"/>`);
  const label=source.includes("pavé")?"Pavé droit":"Cube";
  return geometrySvg(label,`<path class="geo-line" d="M72 70 H205 V170 H72 Z M115 35 H248 V135 H205 M72 70 L115 35 M205 70 L248 35 M205 170 L248 135"/>${values.length&&exercise.text.includes("cm")?`<text class="geo-accent-label" x="160" y="192">${values.slice(0,3).join(" × ")} cm</text>`:""}`);
}
function quadrilateralSvg(exercise){
  const source=`${exercise.text} ${exercise.answer}`.toLowerCase();
  if(source.includes("carré"))return geometrySvg("Carré",`<rect class="geo-line" x="95" y="40" width="130" height="130"/><path class="geo-accent" d="M95 55 H110 V40 M210 40 V55 H225 M225 155 H210 V170 M110 170 V155 H95"/><path class="geo-tick" d="M155 35 l10 10 M155 165 l10 10 M90 100 l10 10 M220 100 l10 10"/>`);
  if(source.includes("rectangle"))return geometrySvg("Rectangle",`<rect class="geo-line" x="55" y="60" width="210" height="105"/><path class="geo-accent" d="M55 76 H71 V60 M249 60 V76 H265 M265 149 H249 V165 M71 165 V149 H55"/>`);
  if(source.includes("losange"))return geometrySvg("Losange",`<path class="geo-line" d="M160 30 L260 105 L160 180 L60 105 Z"/><path class="geo-tick" d="M105 63 l9 11 M206 72 l9 -11 M105 147 l9 -11 M206 138 l9 11"/>`);
  if(source.includes("parallélogramme"))return geometrySvg("Parallélogramme",`<path class="geo-line" d="M95 45 H260 L225 165 H60 Z"/><path class="geo-parallel" d="M155 45 l8 -5 l8 5 M145 165 l8 -5 l8 5 M76 99 l-5 8 l7 8 M242 91 l-5 8 l7 8"/>`);
  return geometrySvg("Triangle",`<path class="geo-line" d="M55 165 L160 35 L265 165 Z"/>`);
}
function axesSvg(exercise){
  const source=exercise.text.toLowerCase(),base=source.includes("carré")?`<rect class="geo-line" x="95" y="40" width="130" height="130"/>`:source.includes("rectangle")?`<rect class="geo-line" x="60" y="65" width="200" height="100"/>`:source.includes("cercle")?`<circle class="geo-line" cx="160" cy="105" r="70"/>`:`<path class="geo-line" d="M60 170 L160 35 L260 170 Z"/>`;
  const count=exercise.answer==="une infinité"?4:Number(exercise.answer);
  const axes=[`<line class="geo-accent geo-dash" x1="160" y1="18" x2="160" y2="192"/>`,`<line class="geo-accent geo-dash" x1="45" y1="105" x2="275" y2="105"/>`,`<line class="geo-accent geo-dash" x1="75" y1="20" x2="245" y2="190"/>`,`<line class="geo-accent geo-dash" x1="245" y1="20" x2="75" y2="190"/>`].slice(0,count).join("");
  return geometrySvg("Figure et axes de symétrie",base+axes);
}
function transformationSvg(exercise){
  const answer=exercise.answer;
  if(answer==="une droite")return geometrySvg("Symétrie axiale définie par une droite",`<path class="geo-line" d="M55 145 L90 75 L125 145 Z M195 145 L230 75 L265 145 Z"/><line class="geo-accent geo-dash" x1="160" y1="25" x2="160" y2="180"/><path class="geo-accent geo-dash" d="M125 105 H195"/>`);
  if(answer==="un point")return geometrySvg("Demi-tour défini par un point",`<path class="geo-line" d="M55 75 L95 45 L125 95 Z M195 115 L225 165 L265 135 Z"/><circle class="geo-point" cx="160" cy="105" r="5"/><text class="geo-accent-label" x="173" y="110">O</text><path class="geo-accent geo-dash" d="M110 80 L210 130"/>`);
  return geometrySvg("Translation définie par un vecteur",`<rect class="geo-line" x="50" y="90" width="70" height="55"/><rect class="geo-line" x="205" y="45" width="70" height="55"/><defs><marker id="vector-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path class="geo-fill" d="M0,0 L7,3.5 L0,7 Z"/></marker></defs><line class="geo-accent" x1="115" y1="82" x2="205" y2="55" marker-end="url(#vector-arrow)"/><text class="geo-accent-label" x="158" y="55">u⃗</text>`);
}
function geometryQuestionSvg(exercise){
  const notion=exercise.notion;
  if(notion.includes("abscisse")||notion.includes("nombre relatif"))return numberLineSvg(exercise);
  if(notion.includes("Coordonnées")||notion.includes("Symétrie centrale"))return coordinateSvg(exercise);
  if(notion==="Angles usuels")return angleSvg(exercise);
  if(notion==="Somme des angles d’un triangle"||notion==="Triangles particuliers")return triangleSvg(exercise);
  if(notion==="Médiatrice et cercle circonscrit")return segmentContextSvg();
  if(notion==="Aires des figures usuelles")return areaSvg(exercise);
  if(notion==="Périmètre du carré et du rectangle")return perimeterSvg(exercise);
  if(notion==="Comparer des aires")return compareAreasSvg(exercise);
  if(notion==="Calculer une aire sur quadrillage")return gridAreaSvg(exercise);
  if(notion==="Volumes du cube, du pavé, du prisme et du cylindre"||notion==="Volume d’une pyramide ou d’un cône")return solidSvg(exercise);
  if(notion==="Axes de symétrie")return symmetryShapeSvg(exercise);
  if(notion==="Égalité de Pythagore"||notion==="Triangle rectangle et cercle circonscrit"||notion==="Droite des milieux")return triangleSvg(exercise);
  if(notion==="Théorème de Thalès")return thalesSvg(exercise);
  if(notion==="Rapports trigonométriques")return trigonometrySvg(exercise);
  return "";
}
function figureChoiceShapeSvg(shape){
  const drawings={
    carré:`<rect x="31" y="17" width="38" height="38"/>`,
    rectangle:`<rect x="21" y="20" width="58" height="32"/>`,
    triangle:`<path d="M50 12 L78 57 L22 57 Z"/>`,
    "triangle équilatéral":`<path d="M20 58 L50 6.038 L80 58 Z"/><path class="figure-choice-wire" d="M32 34 L39 38 M61 38 L68 34 M50 53 L50 63"/>`,
    "triangle isocèle rectangle":`<path d="M22 58 L22 16 L64 58 Z"/><path class="figure-choice-wire" d="M22 48 H32 V58 M17 36 H27 M42 53 V63"/>`,
    "triangle rectangle":`<path d="M18 58 L18 12 L84 58 Z"/><path class="figure-choice-wire" d="M18 48 H28 V58"/>`,
    cube:`<path class="figure-choice-wire" d="M24 24 H62 V58 H24 Z M38 12 H76 V46 H62 M24 24 L38 12 M62 24 L76 12 M62 58 L76 46"/>`,
    "pavé droit":`<path class="figure-choice-wire" d="M16 28 H66 V57 H16 Z M34 13 H84 V42 H66 M16 28 L34 13 M66 28 L84 13 M66 57 L84 42"/>`,
    cylindre:`<ellipse cx="50" cy="18" rx="25" ry="8"/><path class="figure-choice-wire" d="M25 18 V52 M75 18 V52"/><ellipse cx="50" cy="52" rx="25" ry="8"/>`,
    cône:`<ellipse cx="50" cy="54" rx="29" ry="8"/><path class="figure-choice-wire" d="M21 54 L50 10 L79 54"/>`,
    boule:`<circle cx="50" cy="35" r="27"/><ellipse class="figure-choice-wire figure-choice-dash" cx="50" cy="35" rx="27" ry="9"/>`,
    pyramide:`<path d="M20 52 L64 58 L82 45 L38 40 Z"/><path class="figure-choice-wire" d="M51 10 L20 52 M51 10 L64 58 M51 10 L82 45 M51 10 L38 40"/><path class="figure-choice-wire figure-choice-dash" d="M38 40 L82 45"/>`,
    "prisme droit":`<path d="M19 53 L35 19 L51 53 Z M51 53 L67 19 L83 53 Z"/><path class="figure-choice-wire" d="M19 53 L51 53 M35 19 L67 19 M51 53 L83 53"/>`
  };
  return `<svg viewBox="0 0 100 70" aria-hidden="true" focusable="false"><g>${drawings[shape]||""}</g></svg>`;
}
function optionalSolidChoiceQuestion(description,answer,solidChoices){
  const question=`Quel solide possède ${description} ?`,feminine=["boule","pyramide"].includes(answer);
  if(Math.random()>=.67)return q(question,answer,`Il s’agit ${feminine?"d’une":"d’un"} ${answer}.`);
  const distractors=shuffleQuestions(solidChoices.filter(solid=>solid!==answer)).slice(0,2);
  const figureChoices=shuffleQuestions([answer,...distractors]);
  const correctLetter=String.fromCharCode(65+figureChoices.indexOf(answer));
  return q(question,answer,`La figure ${correctLetter} représente ${feminine?"une":"un"} ${answer}.`,[correctLetter],{figureChoices});
}
function renderFigureChoices(exercise,host){
  host.innerHTML=`<div class="figure-choice-grid" role="group" aria-label="Choisis une figure">${exercise.figureChoices.map((choice,index)=>`
    <button class="figure-choice" type="button" data-figure-answer="${escapeXml(choice)}" aria-label="Figure ${String.fromCharCode(65+index)}" aria-pressed="false">
      <strong aria-hidden="true">${String.fromCharCode(65+index)}</strong>
      ${figureChoiceShapeSvg(choice)}
    </button>
  `).join("")}</div>`;
  host.querySelectorAll(".figure-choice").forEach(button=>button.addEventListener("click",()=>{
    if(answered)return;
    host.querySelectorAll(".figure-choice").forEach(choice=>{
      const selected=choice===button;
      choice.classList.toggle("selected",selected);
      choice.setAttribute("aria-pressed",String(selected));
    });
    document.getElementById("answerInput").value=button.dataset.figureAnswer;
  }));
}
function renderQuestionVisual(exercise){
  const host=document.getElementById("questionVisual");
  const notion=exercise.notion;
  clearActiveGeometryBoard();
  if(exercise.textOnly){
    host.innerHTML="";
    return;
  }
  if(exercise.figureChoices){
    renderFigureChoices(exercise,host);
    return;
  }
  if(exercise.scratchBlocks){
    host.innerHTML=scratchProgramMarkup(exercise.scratchBlocks);
    return;
  }
  if(exercise.graph){
    host.innerHTML=functionGraphSvg(exercise);
    return;
  }
  if(notion==="Repérage sur une droite graduée"
    ||notion==="Placer un point d’abscisse décimale"
    ||notion==="Repérer un nombre décimal"
    ||notion==="Placer un nombre relatif sur une droite graduée"
    ||notion==="Repérer un nombre relatif"){
    host.innerHTML=numberLineSvg(exercise);
    return;
  }
  if(notion==="Coordonnées dans un repère orthogonal"
    ||notion==="Symétrie centrale d’un point"){
    host.innerHTML=coordinateSvg(exercise);
    return;
  }
  if(renderJsxGeometry(exercise,host))return;
  host.innerHTML=geometryQuestionSvg(exercise);
}

const G5 = [
{theme:"Nombres et calculs", notion:"Critères de divisibilité par 2, 5 et 10", make:()=>{let n=rand(12,999);return q(`Le nombre ${n} est-il divisible par 2, 5 ou 10 ? Donne toutes les réponses possibles.`, divis(n), `On observe le chiffre des unités : ${n%10}.`)}},
{theme:"Nombres et calculs", notion:"Quotient et reste d’une division euclidienne", make:()=>{let b=rand(3,9),quo=rand(2,15),r=rand(0,b-1),a=b*quo+r;return q(`Dans la division euclidienne de ${a} par ${b}, donne le quotient et le reste.`,`${quo};${r}`,`${a} = ${b} × ${quo} + ${r}.`,["q="+quo+" r="+r,quo+","+r])}},
{theme:"Nombres et calculs", notion:"Factorisation avec les tables", make:()=>{let a=rand(2,9),b=rand(2,9),n=a*b;return q(`Complète : ${n} = ${a} × …`,b,`${n} = ${a} × ${b}.`)}},
{theme:"Nombres et calculs", notion:"Produits liés aux tables", make:()=>{let a=rand(2,9),b=rand(2,9),d=[0.1,10,100][rand(0,2)];let x=a*d,y=b/d;return q(`Calcule : ${fmt(x)} × ${fmt(y)}`,a*b,`On peut regrouper les facteurs pour retrouver ${a} × ${b}.`)}},
{theme:"Nombres et calculs", notion:"Multiplier et diviser par 10, 100, 1 000", make:()=>{let n=rand(12,999)/10, p=[10,100,1000][rand(0,2)],op=Math.random()<.5?"×":"÷",ans=op==="×"?n*p:n/p;return q(`Calcule : ${fmt(n)} ${op} ${p}`,fmt(ans),`La virgule se décale de ${String(p).length-1} rang(s).`)}},
{theme:"Nombres et calculs", notion:"Addition et soustraction de décimaux", make:()=>{let a=rand(10,150)/10,b=rand(10,90)/10,op=Math.random()<.5?"+":"−",ans=op==="+"?a+b:a-b;return q(`Calcule : ${fmt(a)} ${op} ${fmt(b)}`,fmt(ans),`On aligne les virgules puis on effectue le calcul.`)}},
{theme:"Nombres et calculs", notion:"Addition à trou", make:()=>{let a=rand(1,20),x=rand(1,20),c=a+x;return q(`Complète : ${a} + … = ${c}`,x,`Le nombre manquant vaut ${c} − ${a} = ${x}.`)}},
{theme:"Nombres et calculs", notion:"Fractions simples et écritures décimales", make:()=>{let opts=[[1,2,.5],[1,4,.25],[3,4,.75],[1,5,.2],[3,5,.6]];let [a,b,v]=opts[rand(0,opts.length-1)];return q(`Donne l’écriture décimale de ${a}/${b}.`,fmt(v),`${a} ÷ ${b} = ${fmt(v)}.`)}},
{theme:"Nombres et calculs", notion:"Fractions égales", make:()=>{let a=rand(1,5),b=rand(a+1,9),k=rand(2,5);return q(`Complète : ${a}/${b} = …/${b*k}`,a*k,`On multiplie le numérateur et le dénominateur par ${k}.`)}},
{theme:"Nombres et calculs", notion:"Comparer deux fractions", make:()=>{let d=rand(3,12),a=rand(1,d-1),b=rand(1,d-1);while(a===b)b=rand(1,d-1);return q(`Compare avec < ou > : ${a}/${d} … ${b}/${d}`,a>b?">":"<",`Les dénominateurs sont identiques : on compare les numérateurs.`)}},
{theme:"Nombres et calculs", notion:"Addition et soustraction de fractions simples", make:()=>{let d=[4,5,6,8,10][rand(0,4)],a=rand(1,d-2),b=rand(1,d-a-1);return q(`Calcule : ${a}/${d} + ${b}/${d}`,`${a+b}/${d}`,`On conserve le dénominateur et on additionne les numérateurs.`)}},
{theme:"Nombres et calculs", notion:"Prendre une fraction d’un nombre", make:()=>{let d=[2,3,4,5][rand(0,3)],n=d*rand(2,12),a=rand(1,d-1);return q(`Calcule ${a}/${d} de ${n}.`,a*n/d,`${n} ÷ ${d} × ${a} = ${a*n/d}.`)}},
{theme:"Nombres et calculs", notion:"Prendre 1 %, 10 % ou 50 %", make:()=>{let p=[1,10,50][rand(0,2)],n=p===1?100*rand(1,9):10*rand(2,30);return q(`Calcule ${p} % de ${n}.`,n*p/100,`${p} % de ${n} = ${n} × ${p}/100.`)}},
{theme:"Nombres et calculs", notion:"Écritures multiples d’un nombre", make:()=>{let n=rand(12,99)/10;return q(`Écris ${fmt(n)} sous la forme d’une fraction décimale.`,`${Math.round(n*10)}/10`,`${fmt(n)} = ${Math.round(n*10)}/10.`)}},
{theme:"Nombres et calculs", notion:"Unités d’aire et de volume", make:()=>{let n=rand(1,20);return q(`Convertis ${n} dm² en cm².`,n*100,`1 dm² = 100 cm², donc ${n} dm² = ${n*100} cm².`)}},
{theme:"Nombres et calculs", notion:"Suites de motifs évolutifs", make:()=>{let a=rand(2,6),step=rand(2,5),rank=rand(4,8);return q(`Une suite commence par ${a} et augmente de ${step} à chaque étape. Quel est le terme à l’étape ${rank} ?`,a+(rank-1)*step,`${a} + (${rank} − 1) × ${step} = ${a+(rank-1)*step}.`)}},
{theme:"Espace et géométrie", notion:"Placer un point d’abscisse décimale", make:()=>{let n=rand(-20,50)/10;return q(`Quelle est l’abscisse du point situé à ${Math.abs(n)} unité(s) ${n>=0?"à droite":"à gauche"} de 0 ?`,fmt(n),`À droite de 0, l’abscisse est positive ; à gauche, elle est négative.`)}},
{theme:"Espace et géométrie", notion:"Angles usuels", make:()=>{let choices=[["angle droit",90],["angle plat",180],["angle plein",360]];let [name,v]=choices[rand(0,2)];return q(`Quelle est la mesure d’un ${name} ?`,v,`Un ${name} mesure ${v}°.`)}},
{theme:"Espace et géométrie", notion:"Somme des angles d’un triangle", make:()=>{let a=rand(25,80),b=rand(25,80);while(a+b>=160)b=rand(25,80);return q(`Dans un triangle, deux angles mesurent ${a}° et ${b}°. Quelle est la mesure du troisième ?`,180-a-b,`La somme des angles d’un triangle vaut 180° : 180 − ${a} − ${b} = ${180-a-b}°.`)}},
{theme:"Espace et géométrie", notion:"Triangles particuliers", make:()=>{
  if(Math.random()>=.67){
    const kind=["équilatéral","isocèle rectangle","rectangle"][rand(0,2)],answer=kind==="équilatéral"?"60":kind==="isocèle rectangle"?"45":"90";
    return q(
      `Quelle mesure d’angle caractéristique associe-t-on à un triangle ${kind} ?`,
      answer,
      kind==="équilatéral"?"Ses trois angles mesurent 60°.":kind==="isocèle rectangle"?"Ses deux angles aigus mesurent 45°.":"Il possède un angle droit de 90°.",
      [answer+"°"],
      {textOnly:true}
    );
  }
  const items=[
    ["trois côtés de même longueur","triangle équilatéral"],
    ["un angle droit et deux côtés de même longueur","triangle isocèle rectangle"],
    ["un angle droit et trois côtés de longueurs différentes","triangle rectangle"]
  ],[description,answer]=items[rand(0,items.length-1)];
  const figureChoices=shuffleQuestions(["triangle équilatéral","triangle isocèle rectangle","triangle rectangle"]);
  const correctLetter=String.fromCharCode(65+figureChoices.indexOf(answer));
  return q(`Quel triangle possède ${description} ?`,answer,`La figure ${correctLetter} représente un ${answer}.`,[correctLetter],{figureChoices});
}},
{theme:"Espace et géométrie", notion:"Reconnaître un solide en perspective", make:()=>{let items=[["6 faces carrées","cube"],["2 bases circulaires et une surface courbe","cylindre"],["6 faces rectangulaires dont certaines ont des dimensions différentes","pavé droit"]],[desc,ans]=items[rand(0,2)];return optionalSolidChoiceQuestion(desc,ans,["cube","cylindre","pavé droit"])}},
{theme:"Espace et géométrie", notion:"Médiatrice et cercle circonscrit", make:()=>q(`Comment s’appelle la droite perpendiculaire à un segment et passant par son milieu ?`,`médiatrice`,`C’est la médiatrice du segment.`)},
{theme:"Données et probabilités", notion:"Échelle de probabilités", make:()=>{let p=[0,0.25,0.5,0.75,1][rand(0,4)];let ans=p===0?"impossible":p===1?"certain":p===.5?"autant de chances":"possible";return q(`Un événement a une probabilité de ${fmt(p)}. Comment peut-on le qualifier ?`,ans,`0 signifie impossible, 1 certain, et 0,5 autant de chances de se produire que de ne pas se produire.`)}},
{theme:"Données et probabilités", notion:"Écriture d’une probabilité", make:()=>{let total=[4,5,8,10][rand(0,3)],fav=rand(1,total-1);return q(`Une urne contient ${total} boules dont ${fav} rouges. Quelle est la probabilité de tirer une boule rouge ?`,`${fav}/${total}`,`Il y a ${fav} issues favorables sur ${total} issues possibles.`)}},
{theme:"Données et probabilités", notion:"Relier une expression de chance à une probabilité", make:()=>{let items=[["une chance sur quatre","1/4"],["une chance sur deux","1/2"],["trois chances sur quatre","3/4"]];let [txt,ans]=items[rand(0,2)];return q(`Écris sous forme de fraction : « ${txt} ».`,ans,`« ${txt} » correspond à ${ans}.`)}},
{theme:"Proportionnalité et fonctions", notion:"Reconnaître une situation de proportionnalité", make:()=>{let k=rand(2,6),a=rand(2,8),b=a*k;return q(`3 objets coûtent ${3*k} €. ${a} objets coûtent ${b} €. Cette situation est-elle proportionnelle ?`,`oui`,`Le prix par objet est constant : ${k} €.`)}},
{theme:"Proportionnalité et fonctions", notion:"Résoudre un problème de proportionnalité", make:()=>{let k=rand(2,8),a=rand(2,9);return q(`${a} cahiers coûtent ${a*k} €. Combien coûtent ${a+2} cahiers ?`,(a+2)*k,`Un cahier coûte ${k} €, donc ${a+2} cahiers coûtent ${(a+2)*k} €.`)}},
{theme:"Proportionnalité et fonctions", notion:"Calculer un pourcentage", make:()=>{let n=20*rand(2,15),p=[10,20,25,50][rand(0,3)];return q(`Calcule ${p} % de ${n}.`,n*p/100,`${n} × ${p}/100 = ${n*p/100}.`)}},

{theme:"Algorithmique",notion:"Exécuter une séquence Scratch",interactiveOnly:true,make:()=>{let first=rand(10,50),second=rand(10,50);return q(`Observe le programme Scratch. De combien de pas le lutin avance-t-il au total ?`,first+second,`Le lutin avance de ${first} + ${second} = ${first+second} pas.`,[],{scratchBlocks:[{type:"event",text:"quand le drapeau vert est cliqué"},{type:"motion",text:`avancer de ${first} pas`},{type:"motion",text:`avancer de ${second} pas`}]})}},
{theme:"Algorithmique",notion:"Comprendre une boucle répéter",interactiveOnly:true,make:()=>{let repetitions=rand(2,6),steps=rand(5,20);return q(`Observe le programme Scratch. De combien de pas le lutin avance-t-il au total ?`,repetitions*steps,`Le bloc « avancer de ${steps} pas » est exécuté ${repetitions} fois : ${repetitions} × ${steps} = ${repetitions*steps}.`,[],{scratchBlocks:[{type:"event",text:"quand le drapeau vert est cliqué"},{type:"control",text:`répéter ${repetitions} fois`},{type:"motion",indent:1,text:`avancer de ${steps} pas`},{type:"control",text:"fin de la boucle"}]})}},
{theme:"Algorithmique",notion:"Suivre la valeur d’une variable",interactiveOnly:true,make:()=>{let start=rand(1,20),change=rand(2,10);return q(`Observe le programme Scratch. Quelle est la valeur finale de la variable score ?`,start+change,`Le score vaut d’abord ${start}, puis on lui ajoute ${change} : il vaut ${start+change}.`,[],{scratchBlocks:[{type:"event",text:"quand le drapeau vert est cliqué"},{type:"variables",text:`mettre score à ${start}`},{type:"variables",text:`ajouter ${change} à score`}]})}}
];

const G4 = [
{theme:"Nombres et calculs",notion:"Sommes et différences de nombres relatifs",make:()=>{let a=rand(-12,12),b=rand(-12,12),op=Math.random()<.5?"+":"−",ans=op==="+"?a+b:a-b;return q(`Calcule : ${a} ${op} (${b})`,ans,`On effectue le calcul sur les nombres relatifs : ${ans}.`)}},
{theme:"Nombres et calculs",notion:"Opposé d’un nombre et somme d’opposés",make:()=>{let a=rand(-20,20);if(a===0)a=7;return q(`Quel est l’opposé de ${a} ?`,-a,`Deux nombres opposés ont une somme nulle.`)}},
{theme:"Nombres et calculs",notion:"Multiplier et diviser par 10, 100, 1 000",make:()=>{let n=rand(12,999)/10,p=[10,100,1000][rand(0,2)],op=Math.random()<.5?"×":"÷",ans=op==="×"?n*p:n/p;return q(`Calcule : ${fmt(n)} ${op} ${p}`,fmt(ans),`La virgule se décale de ${String(p).length-1} rang(s).`)}},
{theme:"Nombres et calculs",notion:"Multiplications à trou",make:()=>{let a=rand(2,12),b=rand(2,12);return q(`Complète : ${a} × … = ${a*b}`,b,`${a*b} ÷ ${a} = ${b}.`)}},
{theme:"Nombres et calculs",notion:"Multiplication comme addition répétée",make:()=>{let a=rand(2,8),b=rand(2,8);return q(`Écris ${a} + ${a} + ${a} + ${a} sous forme d’un produit.`,`4×${a}`,`Le nombre ${a} est additionné 4 fois.`,[`${a}×4`])}},
{theme:"Nombres et calculs",notion:"Addition et soustraction de fractions",make:()=>{let d1=[2,3,4,5,6][rand(0,4)],d2=[2,3,4,5,6][rand(0,4)],a=rand(1,d1-1),b=rand(1,d2-1),op=Math.random()<.5?"+":"−";let n=op==="+"?a*d2+b*d1:a*d2-b*d1,d=d1*d2;return q(`Calcule et simplifie : ${a}/${d1} ${op} ${b}/${d2}`,simp(n,d),`On prend le dénominateur commun ${d}, puis on simplifie.`)}},
{theme:"Nombres et calculs",notion:"Comparer des fractions",make:()=>{let a=rand(1,8),b=rand(2,9),c=rand(1,8),d=rand(2,9);while(a*d===c*b){c=rand(1,8)}return q(`Compare avec < ou > : ${a}/${b} … ${c}/${d}`,a*d>c*b?">":"<",`On compare les produits en croix : ${a}×${d} et ${c}×${b}.`)}},
{theme:"Nombres et calculs",notion:"Fraction comme quotient",make:()=>{let a=rand(1,20),b=rand(2,10);return q(`Quel nombre multiplié par ${b} donne ${a} ? Donne la réponse sous forme de fraction.`,`${a}/${b}`,`${a}/${b} est le quotient de ${a} par ${b}.`)}},
{theme:"Nombres et calculs",notion:"Fraction d’un nombre",make:()=>{let d=[2,3,4,5,6][rand(0,4)],n=d*rand(2,12),a=rand(1,d-1);return q(`Calcule ${a}/${d} de ${n}.`,a*n/d,`${n} ÷ ${d} × ${a} = ${a*n/d}.`)}},
{theme:"Nombres et calculs",notion:"Carrés parfaits de 0 à 12",make:()=>{let a=rand(0,12);return q(`Calcule ${a}².`,a*a,`${a}² = ${a} × ${a} = ${a*a}.`)}},
{theme:"Nombres et calculs",notion:"Puissances simples",make:()=>{let a=[2,3,5][rand(0,2)],e=rand(2,4);return q(`Calcule ${a}^${e}.`,a**e,`${a}^${e} est le produit de ${e} facteurs égaux à ${a}.`)}},
{theme:"Nombres et calculs",notion:"Valeur d’expressions numériques",make:()=>{let a=rand(2,10),b=rand(2,10),c=rand(2,10);return q(`Calcule : ${a} + ${b} × ${c}`,a+b*c,`On effectue la multiplication avant l’addition.`)}},
{theme:"Nombres et calculs",notion:"Équations simples",make:()=>{let type=rand(0,2),x=rand(-9,15),a=rand(2,9);if(type===0)return q(`Résous : x + ${a} = ${x+a}`,x,`On soustrait ${a} aux deux membres.`);if(type===1)return q(`Résous : ${a}x = ${a*x}`,x,`On divise les deux membres par ${a}.`);return q(`Résous : ${a} − x = ${a-x}`,x,`On cherche le nombre qui vérifie l’égalité.`)}},
{theme:"Nombres et calculs",notion:"Écriture 3x",make:()=>{let a=rand(2,9);return q(`Écris sans signe × : ${a} × x`,`${a}x`,`Le signe de multiplication est sous-entendu entre un nombre et une lettre.`)}},
{theme:"Nombres et calculs",notion:"Réduction d’expressions littérales",make:()=>{let a=rand(1,8),b=rand(1,8);return q(`Réduis : ${a}x + ${b}x`,`${a+b}x`,`On additionne les coefficients : ${a}+${b}=${a+b}.`,[],{mathMode:"reduced"})}},
{theme:"Nombres et calculs",notion:"Réduction d’expressions comportant des carrés",make:()=>{let a=rand(1,6),b=rand(1,7),c=rand(1,6),d=rand(1,7),answer=quadraticExpression(a+c,b+d);return q(`Réduis : ${a}x² + ${b}x + ${c}x² + ${d}x`,answer,`On regroupe les termes en x² et les termes en x : ${answer}.`,[],{mathMode:"reduced"})}},
{theme:"Nombres et calculs",notion:"Double, triple, moitié, prédécesseur, successeur et carré",make:()=>{let n=rand(2,30),types=[["double",2*n],["triple",3*n],["moitié",n/2],["prédécesseur",n-1],["successeur",n+1],["carré",n*n]],z=types[rand(0,5)];if(z[0]==="moitié"&&n%2)n++;return q(`Donne le ${z[0]} de ${n}.`,z[0]==="moitié"?n/2:z[1],`Le ${z[0]} de ${n} vaut ${z[0]==="moitié"?n/2:z[1]}.`)}},
{theme:"Nombres et calculs",notion:"Tester une égalité",make:()=>{let a=rand(1,8),b=rand(1,8),x=rand(1,8),right=a*x+b+(Math.random()<.5?0:rand(1,4));return q(`Pour x = ${x}, l’égalité ${a}x + ${b} = ${right} est-elle vraie ?`,a*x+b===right?"oui":"non",`Le membre de gauche vaut ${a*x+b}.`)}},

{theme:"Espace et géométrie",notion:"Symétrie centrale d’un point",make:()=>{let x=rand(-5,5),y=rand(-5,5);return q(`Le point A(${x};${y}) a pour symétrique A' par rapport à l’origine O. Quelles sont les coordonnées de A' ?`,`${-x};${-y}`,`Une symétrie centrale de centre O change les deux signes.`,[`(${-x};${-y})`,`${-x},${-y}`])}},
{theme:"Espace et géométrie",notion:"Placer un nombre relatif sur une droite graduée",make:()=>{let n=rand(-20,20)/2;return q(`Un point est situé à ${Math.abs(n)} unité(s) ${n>=0?"à droite":"à gauche"} de 0. Quelle est son abscisse ?`,fmt(n),`À droite de 0 l’abscisse est positive ; à gauche elle est négative.`)}},
{theme:"Espace et géométrie",notion:"Coordonnées dans un repère orthogonal",make:()=>{let x=rand(-6,6),y=rand(-6,6);return q(`Un point est à l’abscisse ${x} et à l’ordonnée ${y}. Écris ses coordonnées.`,`${x};${y}`,`On écrit d’abord l’abscisse, puis l’ordonnée.`,[`(${x};${y})`,`${x},${y}`])}},
{theme:"Espace et géométrie",notion:"Reconnaître des solides",make:()=>{let items=[["deux bases circulaires parallèles","cylindre"],["deux bases triangulaires identiques et trois faces rectangulaires","prisme droit"],["six faces carrées","cube"],["six faces rectangulaires dont certaines ont des dimensions différentes","pavé droit"]],[description,answer]=items[rand(0,3)];return optionalSolidChoiceQuestion(description,answer,["cylindre","prisme droit","cube","pavé droit"])}},
{theme:"Espace et géométrie",notion:"Volumes du cube, du pavé, du prisme et du cylindre",make:()=>{let type=rand(0,2);if(type===0){let a=rand(2,8);return q(`Calcule le volume d’un cube d’arête ${a} cm.`,a**3,`V = ${a}³ = ${a**3} cm³.`)}if(type===1){let l=rand(2,9),w=rand(2,8),h=rand(2,7);return q(`Calcule le volume d’un pavé droit de dimensions ${l} cm, ${w} cm et ${h} cm.`,l*w*h,`V = ${l} × ${w} × ${h} = ${l*w*h} cm³.`)}let r=rand(1,5),h=rand(2,10),coefficient=r*r*h,answer=piTerm(coefficient);return q(`Donne l’expression exacte du volume d’un cylindre de rayon ${r} cm et de hauteur ${h} cm.`,answer,`V = π × ${r}² × ${h} = ${answer} cm³.`,[answer.replace("π","pi")])}},
{theme:"Espace et géométrie",notion:"Aires des figures usuelles",make:()=>{let type=rand(0,2);if(type===0){let b=rand(3,12),h=rand(2,10);return q(`Calcule l’aire d’un triangle de base ${b} cm et de hauteur ${h} cm.`,b*h/2,`A = base × hauteur ÷ 2 = ${b*h/2} cm².`)}if(type===1){let l=rand(3,12),w=rand(2,10);return q(`Calcule l’aire d’un rectangle de longueur ${l} cm et de largeur ${w} cm.`,l*w,`A = ${l} × ${w} = ${l*w} cm².`)}let r=rand(1,6),coefficient=r*r,answer=piTerm(coefficient);return q(`Donne l’aire exacte d’un disque de rayon ${r} cm.`,answer,`A = π × ${r}² = ${answer} cm².`,[answer.replace("π","pi")])}},
{theme:"Espace et géométrie",notion:"Reconnaître un parallélogramme",make:()=>q(`Quel quadrilatère a ses côtés opposés parallèles deux à deux ?`,`parallélogramme`,`C’est la définition d’un parallélogramme.`)},
{theme:"Espace et géométrie",notion:"Parallélogrammes particuliers",make:()=>{let items=[["quatre angles droits","rectangle"],["quatre côtés de même longueur","losange"],["quatre angles droits et quatre côtés égaux","carré"]],z=items[rand(0,2)];return q(`Quel parallélogramme possède ${z[0]} ?`,z[1],`Il s’agit d’un ${z[1]}.`)}},
{theme:"Espace et géométrie",notion:"Droites remarquables dans un triangle",make:()=>{let items=[["passe par un sommet et le milieu du côté opposé","médiane"],["est perpendiculaire à un côté et passe par le sommet opposé","hauteur"],["est perpendiculaire à un côté et passe par son milieu","médiatrice"]],z=items[rand(0,2)];return q(`Comment s’appelle la droite qui ${z[0]} ?`,z[1],`C’est une ${z[1]}.`)}},

{theme:"Données et probabilités",notion:"Calculer une moyenne",make:()=>{let a=rand(5,18),b=rand(5,18),c=rand(5,18);return q(`Calcule la moyenne de ${a}, ${b} et ${c}.`,fmt((a+b+c)/3),`(${a}+${b}+${c}) ÷ 3 = ${fmt((a+b+c)/3)}.`)}},
{theme:"Données et probabilités",notion:"Effectif manquant dans un tableau",make:()=>{let total=rand(20,50),a=rand(5,12),b=rand(5,12);while(a+b>=total)b=rand(3,8);return q(`Un groupe compte ${total} élèves. ${a} ont choisi A et ${b} ont choisi B. Combien ont choisi C ?`,total-a-b,`${total} − (${a} + ${b}) = ${total-a-b}.`,[],{allowNumericExpression:true})}},
{theme:"Données et probabilités",notion:"Calculer une fréquence simple",make:()=>{let total=[20,25,40,50][rand(0,3)],fav=rand(1,total-1);return q(`Dans un groupe de ${total} élèves, ${fav} ont choisi l’option A. Donne la fréquence sous forme de fraction.`,`${fav}/${total}`,`La fréquence est effectif de A ÷ effectif total.`)}},

{theme:"Proportionnalité et fonctions",notion:"Calculer un pourcentage simple",make:()=>{let p=[1,10,20,25,50][rand(0,4)],n=p===1?100*rand(1,9):20*rand(2,15);return q(`Calcule ${p} % de ${n}.`,n*p/100,`${n} × ${p}/100 = ${n*p/100}.`)}},
{theme:"Proportionnalité et fonctions",notion:"Compléter une égalité de pourcentages",make:()=>{let p=[10,20,25,50][rand(0,3)],n=[40,60,80,100,120,200][rand(0,5)];return q(`Complète : ${p} % de ${n} = …`,n*p/100,`${p}/100 × ${n} = ${n*p/100}.`)}},

{theme:"Algorithmique",notion:"Calculer avec une variable Scratch",interactiveOnly:true,make:()=>{let start=rand(2,15),factor=rand(2,5),change=rand(1,8),answer=start*factor+change;return q(`Observe le programme Scratch. Quelle est la valeur finale de la variable nombre ?`,answer,`On calcule d’abord ${start} × ${factor} = ${start*factor}, puis on ajoute ${change} : ${answer}.`,[],{scratchBlocks:[{type:"event",text:"quand le drapeau vert est cliqué"},{type:"variables",text:`mettre nombre à ${start}`},{type:"variables",text:`mettre nombre à nombre × ${factor}`},{type:"variables",text:`ajouter ${change} à nombre`}]})}},
{theme:"Algorithmique",notion:"Comprendre une boucle Scratch",interactiveOnly:true,make:()=>{let start=rand(0,10),repetitions=rand(3,7),change=rand(2,6),answer=start+repetitions*change;return q(`Observe le programme Scratch. Quelle est la valeur finale de score ?`,answer,`On ajoute ${change} à score ${repetitions} fois : ${start} + ${repetitions} × ${change} = ${answer}.`,[],{scratchBlocks:[{type:"event",text:"quand le drapeau vert est cliqué"},{type:"variables",text:`mettre score à ${start}`},{type:"control",text:`répéter ${repetitions} fois`},{type:"variables",indent:1,text:`ajouter ${change} à score`},{type:"control",text:"fin de la boucle"}]})}},
{theme:"Algorithmique",notion:"Suivre une position dans Scratch",interactiveOnly:true,make:()=>{let start=rand(-50,20),repetitions=rand(2,5),change=rand(5,20),answer=start+repetitions*change;return q(`Observe le programme Scratch. Quelle est l’abscisse x finale du lutin ?`,answer,`L’abscisse finale est ${start} + ${repetitions} × ${change} = ${answer}.`,[],{scratchBlocks:[{type:"event",text:"quand le drapeau vert est cliqué"},{type:"motion",text:`aller à x : ${start} y : 0`},{type:"control",text:`répéter ${repetitions} fois`},{type:"motion",indent:1,text:`ajouter ${change} à x`},{type:"control",text:"fin de la boucle"}]})}}
];


const G3 = [
{theme:"Nombres et calculs",notion:"Opérations sur les fractions",make:()=>{let d1=[2,3,4,5,6][rand(0,4)],d2=[2,3,4,5,6][rand(0,4)],a=rand(1,d1-1),b=rand(1,d2-1),op=["+","−","×","÷"][rand(0,3)],n,d;if(op==="+"){n=a*d2+b*d1;d=d1*d2}else if(op==="−"){n=a*d2-b*d1;d=d1*d2}else if(op==="×"){n=a*b;d=d1*d2}else{n=a*d2;d=d1*b}return q(`Calcule et simplifie : ${a}/${d1} ${op} ${b}/${d2}`,simp(n,d),`On applique la règle de calcul adaptée puis on simplifie.`)}},
{theme:"Nombres et calculs",notion:"Puissance comme multiplication itérée",make:()=>{let a=[2,3,4,5][rand(0,3)],e=rand(2,5);return q(`Écris ${a} × ${Array(e-1).fill(a).join(" × ")} sous forme d’une puissance.`,`${a}^${e}`,`Le facteur ${a} apparaît ${e} fois.`)}},
{theme:"Nombres et calculs",notion:"Multiplication de puissances d’un même nombre",make:()=>{let a=[2,3,5][rand(0,2)],m=rand(1,5),n=rand(1,5);return q(`Simplifie : ${a}^${m} × ${a}^${n}`,`${a}^${m+n}`,`On additionne les exposants : ${m}+${n}=${m+n}.`)}},
{theme:"Nombres et calculs",notion:"Multiplication de puissances de même exposant",make:()=>{let a=rand(2,6),b=rand(2,6),n=rand(2,4);return q(`Simplifie : ${a}^${n} × ${b}^${n}`,`${a*b}^${n}`,`a^n × b^n = (ab)^n.`)}},
{theme:"Nombres et calculs",notion:"Écriture scientifique",make:()=>{let coefficient=rand(1,9),exponent=[-5,-4,-3,-2,2,3,4,5][rand(0,7)],value=exponent>0?`${coefficient}${"0".repeat(exponent)}`:`0,${"0".repeat(-exponent-1)}${coefficient}`,answer=`${coefficient}×10^${exponent}`;return q(`Écris ${value} en notation scientifique.`,answer,`Le nombre s’écrit ${coefficient} × 10^${exponent}.`,[`${coefficient}*10^${exponent}`,`${coefficient}·10^${exponent}`])}},
{theme:"Nombres et calculs",notion:"Carrés parfaits de 0 à 12",make:()=>{let a=rand(0,12);return q(`Calcule ${a}².`,a*a,`${a}² = ${a} × ${a} = ${a*a}.`)}},
{theme:"Nombres et calculs",notion:"Décomposition en facteurs premiers",make:()=>{let p=[2,3,5][rand(0,2)],qv=[2,3,5,7][rand(0,3)],r=[2,3,5][rand(0,2)],n=p*qv*r;return q(`Décompose ${n} en produit de facteurs premiers.`,primeFactorString(n),`${n} = ${primeFactorString(n)}.`)}},
{theme:"Nombres et calculs",notion:"Simplification de fractions",make:()=>{let a=rand(2,12),b=rand(2,12),k=rand(2,6);return q(`Simplifie la fraction ${a*k}/${b*k}.`,simp(a*k,b*k),`On divise le numérateur et le dénominateur par leur plus grand diviseur commun.`)}},
{theme:"Nombres et calculs",notion:"Dénominateur commun",make:()=>{let d1=[2,3,4,5,6][rand(0,4)],d2=[2,3,4,5,6][rand(0,4)];return q(`Donne un dénominateur commun possible à ${1}/${d1} et ${1}/${d2}.`,lcm(d1,d2),`Le plus petit dénominateur commun est ${lcm(d1,d2)}.`)}},
{theme:"Nombres et calculs",notion:"Critères de divisibilité par 2, 3, 5 et 9",make:()=>{let n=rand(100,999);return q(`Parmi 2, 3, 5 et 9, indique tous les diviseurs de ${n}.`,divis2359(n),`On applique les critères de divisibilité.`)}},
{theme:"Nombres et calculs",notion:"Équations simples",make:()=>{let type=rand(0,2),x=rand(-9,15),a=rand(2,9),b=rand(-8,8);if(type===0)return q(`Résous : ${a}x = ${displayNumber(a*x)}`,x,`On divise les deux membres par ${a}.`);if(type===1)return q(`Résous : x + ${parenthesizedIfNegative(b)} = ${displayNumber(x+b)}`,x,`On soustrait ${parenthesizedIfNegative(b)} aux deux membres.`);return q(`Résous : ${a}x + ${parenthesizedIfNegative(b)} = ${displayNumber(a*x+b)}`,x,`On isole d’abord ${a}x, puis on divise par ${a}.`)}},
{theme:"Nombres et calculs",notion:"Simplification d’expressions littérales",make:()=>{let a=rand(1,8),b=rand(1,8),c=rand(1,8);return q(`Réduis : ${a}x + ${b}x − ${c}`,`${a+b}x-${c}`,`On regroupe les termes en x : ${a}+${b}=${a+b}.`,[`${a+b}x − ${c}`],{mathMode:"reduced"})}},
{theme:"Nombres et calculs",notion:"Réduction d’expressions comportant des carrés",make:()=>{let a=rand(2,8),b=rand(1,8),c=rand(1,8),d=rand(1,9),e=rand(1,8);while(a===c)c=rand(1,8);while(b===e)e=rand(1,8);let answer=quadraticExpression(a-c,b-e,d);return q(`Réduis : ${a}x² + ${b}x − ${c}x² − ${e}x + ${d}`,answer,`On regroupe séparément les termes en x², les termes en x et la constante : ${answer}.`,[],{mathMode:"reduced"})}},
{theme:"Nombres et calculs",notion:"Valeur d’une expression algébrique",make:()=>{let a=rand(1,6),b=rand(-6,6),x=rand(-4,6);return q(`Calcule ${a}x + ${parenthesizedIfNegative(b)} pour x = ${displayNumber(x)}.`,a*x+b,`${a} × ${parenthesizedIfNegative(x)} + ${parenthesizedIfNegative(b)} = ${displayNumber(a*x+b)}.`)}},
{theme:"Nombres et calculs",notion:"Nature d’une expression littérale",make:()=>{let items=[["3x + 2","somme"],["5(x + 4)","produit"],["7x − 1","différence"]],z=items[rand(0,2)];return q(`Quelle est la nature de l’expression ${z[0]} ?`,z[1],`L’opération principale est une ${z[1]}.`)}},
{theme:"Nombres et calculs",notion:"Développer et factoriser",make:()=>{if(Math.random()<.5){let a=rand(2,7),b=rand(1,9);return q(`Développe : ${a}(x + ${b})`,`${a}x+${a*b}`,`${a}(x+${b})=${a}x+${a*b}.`,[`${a}x + ${a*b}`],{mathMode:"developed"})}let a=rand(2,7),b=rand(1,9);return q(`Factorise : ${a}x + ${a*b}`,`${a}(x+${b})`,`On met ${a} en facteur.`,[`${a}(x + ${b})`],{mathMode:"factorized"})}},
{theme:"Nombres et calculs",notion:"Expression d’un nombre pair ou impair",make:()=>{let even=Math.random()<.5;return q(`Donne une expression littérale d’un nombre ${even?"pair":"impair"}.`,even?"2n":"2n+1",even?"Tout nombre pair s’écrit 2n.":"Tout nombre impair s’écrit 2n+1.",even?["2×n"]:["2n + 1"],{parity:even?"even":"odd"})}},
{theme:"Nombres et calculs",notion:"Opposé d’une expression",make:()=>{let a=rand(1,9),b=rand(1,9);return q(`Donne l’opposé de ${a} − ${b}x.`,`${-a}+${b}x`,`On change le signe de chaque terme.`,[`${b}x-${a}`,`${b}x − ${a}`],{mathMode:"reduced"})}},

{theme:"Espace et géométrie",notion:"Placer un nombre relatif sur une droite graduée",make:()=>{let n=rand(-20,20)/2;return q(`Un point est situé à ${Math.abs(n)} unité(s) ${n>=0?"à droite":"à gauche"} de 0. Quelle est son abscisse ?`,fmt(n),`À droite de 0 l’abscisse est positive ; à gauche elle est négative.`)}},
{theme:"Espace et géométrie",notion:"Coordonnées dans un repère orthogonal",make:()=>{let x=rand(-6,6),y=rand(-6,6);return q(`Un point a pour abscisse ${x} et pour ordonnée ${y}. Écris ses coordonnées.`,`${x};${y}`,`On écrit d’abord l’abscisse, puis l’ordonnée.`,[`(${x};${y})`,`${x},${y}`])}},
{theme:"Espace et géométrie",notion:"Reconnaître des solides",make:()=>{let items=[["une base polygonale et des faces triangulaires","pyramide"],["une base circulaire et un sommet","cône"],["deux bases circulaires parallèles","cylindre"],["deux bases triangulaires identiques et trois faces rectangulaires","prisme droit"]],[description,answer]=items[rand(0,3)];return optionalSolidChoiceQuestion(description,answer,["pyramide","cône","cylindre","prisme droit"])}},
{theme:"Espace et géométrie",notion:"Volume d’une pyramide ou d’un cône",make:()=>{let base=rand(12,60),h=3*rand(1,4),volume=base*(h/3);return q(`Une pyramide a une aire de base de ${base} cm² et une hauteur de ${h} cm. Calcule son volume.`,volume,`V = aire de base × hauteur ÷ 3 = ${base} × ${h/3} = ${volume} cm³.`)}},
{theme:"Espace et géométrie",notion:"Nature d’une face de pyramide",make:()=>q(`Quelle est la nature d’une face latérale d’une pyramide ?`,`triangle`,`Les faces latérales d’une pyramide sont des triangles.`)},
{theme:"Espace et géométrie",notion:"Triangle rectangle et cercle circonscrit",make:()=>q(`Dans un triangle rectangle, où se situe le centre du cercle circonscrit ?`,`milieu de l’hypoténuse`,`Dans un triangle rectangle, le centre du cercle circonscrit est le milieu de l’hypoténuse.`)},
{theme:"Espace et géométrie",notion:"Égalité de Pythagore",make:()=>{let a=rand(3,8),b=rand(a+1,12);return q(`Dans le triangle ABC rectangle en A, écris l’égalité de Pythagore.`,`BC²=AB²+AC²`,`L’hypoténuse est [BC].`,["BC^2=AB^2+AC^2"])}},
{theme:"Espace et géométrie",notion:"Théorème de Thalès",make:()=>{
  const k=rand(2,5),am=rand(2,6),an=rand(2,7),ab=am*k,ac=an*k;
  const lengths={AM:am,AB:ab,AN:an,AC:ac},unknown=["AM","AB","AN","AC"][rand(0,3)];
  const known=Object.entries(lengths).filter(([name])=>name!==unknown).map(([name,value])=>`${name} = ${value} cm`);
  const calculations={
    AM:`AM = AB × AN ÷ AC = ${ab} × ${an} ÷ ${ac} = ${am} cm`,
    AB:`AB = AM × AC ÷ AN = ${am} × ${ac} ÷ ${an} = ${ab} cm`,
    AN:`AN = AC × AM ÷ AB = ${ac} × ${am} ÷ ${ab} = ${an} cm`,
    AC:`AC = AN × AB ÷ AM = ${an} × ${ab} ÷ ${am} = ${ac} cm`
  };
  return q(
    `Dans le triangle ABC, M appartient à [AB], N appartient à [AC] et (MN) est parallèle à (BC). On donne ${known.slice(0,-1).join(", ")} et ${known[known.length-1]}. Calcule ${unknown}.`,
    lengths[unknown],
    `D’après Thalès, AM/AB = AN/AC. Donc ${calculations[unknown]}.`,
    [],
    {thales:{am,ab,an,ac,unknown}}
  );
}},
{theme:"Espace et géométrie",notion:"Rapports trigonométriques",make:()=>{
  const k=rand(1,4),ab=3*k,ac=4*k,bc=5*k;
  const variants=[
    {unknown:"AB",known:"BC",ratio:"cos",fraction:"3/5",definition:"AB/BC",calculation:`AB = BC × 3/5 = ${bc} × 3/5 = ${ab} cm`},
    {unknown:"AB",known:"AC",ratio:"tan",fraction:"4/3",definition:"AC/AB",calculation:`AB = AC ÷ (4/3) = ${ac} ÷ (4/3) = ${ab} cm`},
    {unknown:"AC",known:"BC",ratio:"sin",fraction:"4/5",definition:"AC/BC",calculation:`AC = BC × 4/5 = ${bc} × 4/5 = ${ac} cm`},
    {unknown:"AC",known:"AB",ratio:"tan",fraction:"4/3",definition:"AC/AB",calculation:`AC = AB × 4/3 = ${ab} × 4/3 = ${ac} cm`},
    {unknown:"BC",known:"AC",ratio:"sin",fraction:"4/5",definition:"AC/BC",calculation:`BC = AC ÷ (4/5) = ${ac} ÷ (4/5) = ${bc} cm`},
    {unknown:"BC",known:"AB",ratio:"cos",fraction:"3/5",definition:"AB/BC",calculation:`BC = AB ÷ (3/5) = ${ab} ÷ (3/5) = ${bc} cm`}
  ];
  const selected=variants[rand(0,variants.length-1)],lengths={AB:ab,AC:ac,BC:bc};
  return q(
    `ABC est rectangle en A. On donne ${selected.ratio}(AB̂C) = ${selected.fraction} et ${selected.known} = ${lengths[selected.known]} cm. Calcule ${selected.unknown}.`,
    lengths[selected.unknown],
    `${selected.ratio}(AB̂C) = ${selected.definition} = ${selected.fraction}. Donc ${selected.calculation}.`,
    [],
    {trigonometry:{ab,ac,bc,unknown:selected.unknown,known:selected.known}}
  );
}},
{theme:"Espace et géométrie",notion:"Droite des milieux",make:()=>q(`Dans un triangle, que peut-on dire du segment joignant les milieux de deux côtés ?`,`il est parallèle au troisième côté`,`La droite des milieux est parallèle au troisième côté et le segment mesure la moitié de ce côté.`)},
{theme:"Espace et géométrie",notion:"Symétrie axiale, demi-tour et translation",make:()=>{let items=[["symétrie axiale","une droite"],["demi-tour","un point"],["translation","un vecteur"]],z=items[rand(0,2)];return q(`Quel élément définit une ${z[0]} ?`,z[1],`Une ${z[0]} est définie par ${z[1]}.`)}},

{theme:"Données et probabilités",notion:"Calculer une moyenne",make:()=>{let a=rand(5,18),b=rand(5,18),c=rand(5,18),d=rand(5,18);return q(`Calcule la moyenne de ${a}, ${b}, ${c} et ${d}.`,fmt((a+b+c+d)/4),`On additionne les quatre valeurs puis on divise par 4.`)}},
{theme:"Données et probabilités",notion:"Déterminer une médiane",make:()=>{let vals=[rand(1,6),rand(7,12),rand(13,18),rand(19,24),rand(25,30)];return q(`Donne la médiane de la série : ${vals.join(" ; ")}.`,vals[2],`La série comporte 5 valeurs ordonnées : la médiane est la 3e.`)}},
{theme:"Données et probabilités",notion:"Calculer l’étendue d’une série",make:()=>{let min=rand(1,10),max=rand(15,35);return q(`Une série a pour minimum ${min} et pour maximum ${max}. Quelle est son étendue ?`,max-min,`Étendue = maximum − minimum = ${max-min}.`)}},
{theme:"Données et probabilités",notion:"Calculer une probabilité",make:()=>{let favorable=rand(2,9),other=rand(2,9),total=favorable+other;return q(`Une urne contient ${favorable} boules rouges et ${other} boules bleues. Quelle est la probabilité de tirer une boule rouge ?`,simp(favorable,total),`Il y a ${favorable} issues favorables sur ${total} boules, soit ${simp(favorable,total)}.`)}},

{theme:"Proportionnalité et fonctions",notion:"Partager une somme selon un ratio",make:()=>{let a=rand(1,5),b=rand(1,5),u=rand(5,20),total=(a+b)*u;return q(`Partage ${total} € selon le ratio ${a}:${b}. Donne les deux parts.`,`${a*u};${b*u}`,`Il y a ${a+b} parts égales, chacune vaut ${u} €.`,[`${a*u},${b*u}`])}},
{theme:"Proportionnalité et fonctions",notion:"Partager une masse selon un ratio",make:()=>{let a=rand(1,4),b=rand(1,4),c=rand(1,4),u=rand(2,10),total=(a+b+c)*u;return q(`Partage ${total} kg selon le ratio ${a}:${b}:${c}.`,`${a*u};${b*u};${c*u}`,`Il y a ${a+b+c} parts égales de ${u} kg.`,[`${a*u},${b*u},${c*u}`])}},
{theme:"Proportionnalité et fonctions",notion:"Partage proportionnel à des âges",make:()=>{let total=rand(3,10)*50;return q(`Deux personnes âgées de 20 ans et 30 ans se partagent ${total} € proportionnellement à leur âge. Donne leurs parts.`,`${total*2/5};${total*3/5}`,`Le ratio est 20:30 = 2:3.`,[`${total*2/5},${total*3/5}`])}},
{theme:"Proportionnalité et fonctions",notion:"Calculer un pourcentage",make:()=>{let p=[10,20,25,30,40,50][rand(0,5)],n=20*rand(2,20);return q(`Calcule ${p} % de ${n}.`,n*p/100,`${n} × ${p}/100 = ${n*p/100}.`)}},
{theme:"Proportionnalité et fonctions",notion:"Échelle d’une carte",make:()=>{let scale=[10000,25000,50000][rand(0,2)],cm=rand(2,12),m=cm*scale,km=m/100000;return q(`Sur une carte à l’échelle 1:${scale}, deux villes sont distantes de ${cm} cm. Quelle est la distance réelle en km ?`,fmt(km),`${cm} × ${scale} cm = ${fmt(km)} km.`)}},
{theme:"Proportionnalité et fonctions",notion:"Augmentation ou diminution en pourcentage",make:()=>{let n=rand(50,300),p=[10,20,25][rand(0,2)],up=Math.random()<.5,coefficient=up?1+p/100:1-p/100,ans=n*coefficient;return q(`Une valeur de ${n} ${up?"augmente":"diminue"} de ${p} %. Quelle est la nouvelle valeur ?`,fmt(ans),`On multiplie par ${fmt(coefficient)} : ${n} × ${fmt(coefficient)} = ${fmt(ans)}.`,[],{allowNumericExpression:true})}},
{theme:"Proportionnalité et fonctions",notion:"Calculer l’image d’un nombre",isFunction:true,make:()=>{let a=rand(2,7),b=rand(-8,8),x=rand(-5,6),sign=b>=0?`+ ${b}`:`− ${Math.abs(b)}`;return q(`On définit f(x) = ${a}x ${sign}. Calcule f(${x}).`,a*x+b,`f(${x}) = ${a} × (${x}) ${sign} = ${a*x+b}.`)}},
{theme:"Proportionnalité et fonctions",notion:"Calculer un antécédent avec une fonction linéaire",isFunction:true,make:()=>{let a=[-6,-5,-4,-3,-2,2,3,4,5,6][rand(0,9)],x=rand(-6,6),image=a*x,coefficient=displayNumber(a);return q(`La fonction linéaire f est définie par f(x) = ${coefficient}x. Calcule l’antécédent de ${displayNumber(image)} par f.`,x,`On résout ${coefficient}x = ${displayNumber(image)} : x = ${displayNumber(image)} ÷ ${parenthesizedIfNegative(a)} = ${displayNumber(x)}.`,[],{allowNumericExpression:true})}},
{theme:"Proportionnalité et fonctions",notion:"Calculer un antécédent avec une fonction affine",isFunction:true,make:()=>{let a=[-6,-5,-4,-3,-2,2,3,4,5,6][rand(0,9)],b=rand(-8,8),x=rand(-6,6);while(b===0)b=rand(-8,8);let image=a*x+b,coefficient=displayNumber(a),sign=b>0?`+ ${b}`:`− ${Math.abs(b)}`,intermediate=image-b;return q(`La fonction affine f est définie par f(x) = ${coefficient}x ${sign}. Calcule l’antécédent de ${displayNumber(image)} par f.`,x,`On résout ${coefficient}x ${sign} = ${displayNumber(image)}. Donc ${coefficient}x = ${displayNumber(intermediate)}, puis x = ${displayNumber(intermediate)} ÷ ${parenthesizedIfNegative(a)} = ${displayNumber(x)}.`,[],{allowNumericExpression:true})}},
{theme:"Proportionnalité et fonctions",notion:"Lire une image ou un antécédent dans un tableau",isFunction:true,make:()=>{let x1=rand(-6,-1),x2=rand(0,3),x3=rand(4,8),a=rand(2,5),b=rand(-5,5),values=[a*x1+b,a*x2+b,a*x3+b],askImage=Math.random()<.5;if(askImage)return q(`Le tableau donne x : ${x1} ; ${x2} ; ${x3} et f(x) : ${values.join(" ; ")}. Quelle est l’image de ${x2} ?`,values[1],`Dans le tableau, à ${x2} correspond ${values[1]} : f(${x2}) = ${values[1]}.`);return q(`Le tableau donne x : ${x1} ; ${x2} ; ${x3} et f(x) : ${values.join(" ; ")}. Quel est l’antécédent de ${values[2]} ?`,x3,`Dans le tableau, ${values[2]} est l’image de ${x3}.`)}},
{theme:"Proportionnalité et fonctions",notion:"Lire graphiquement une image",isFunction:true,interactiveOnly:true,make:()=>makeGraphReadingQuestion("image")},
{theme:"Proportionnalité et fonctions",notion:"Lire graphiquement un antécédent",isFunction:true,interactiveOnly:true,make:()=>makeGraphReadingQuestion("antecedent")},
{theme:"Proportionnalité et fonctions",notion:"Interpréter l’égalité f(a) = b",isFunction:true,make:()=>{let antecedent=rand(-6,8),image=rand(-15,20),askImage=Math.random()<.5;return askImage?q(`On sait que f(${antecedent}) = ${image}. Quelle est l’image de ${antecedent} ?`,image,`L’égalité f(${antecedent}) = ${image} signifie que l’image de ${antecedent} est ${image}.`):q(`On sait que f(${antecedent}) = ${image}. Donne un antécédent de ${image}.`,antecedent,`${antecedent} est un antécédent de ${image} par f.`)}},
{theme:"Proportionnalité et fonctions",notion:"Déterminer le coefficient d’une fonction linéaire",isFunction:true,make:()=>{let coefficient=rand(2,8),x=rand(2,7),image=coefficient*x;return q(`La fonction linéaire f vérifie f(${x}) = ${image}. Détermine son coefficient.`,coefficient,`Pour une fonction linéaire, f(x) = ax. Donc a = ${image} ÷ ${x} = ${coefficient}.`)}},
{theme:"Proportionnalité et fonctions",notion:"Reconnaître une fonction linéaire ou affine",isFunction:true,make:()=>{let a=rand(2,8),b=rand(1,9),linear=Math.random()<.5;return linear?q(`La fonction définie par f(x) = ${a}x est-elle linéaire ou affine non linéaire ?`,`linéaire`,`Une fonction de la forme f(x) = ax est linéaire.`,["lineaire"]):q(`La fonction définie par f(x) = ${a}x + ${b} est-elle linéaire ou affine non linéaire ?`,`affine non linéaire`,`Elle est de la forme ax + b avec b ≠ 0 : elle est affine, mais pas linéaire.`,["affine","affine non lineaire"])}},
{theme:"Proportionnalité et fonctions",notion:"Calculer une vitesse moyenne",make:()=>{let speed=[30,40,50,60,70,80,90][rand(0,6)],duration=rand(2,4),distance=speed*duration;return q(`Un véhicule parcourt ${distance} km en ${duration} h à vitesse constante. Quelle est sa vitesse moyenne en km·h⁻¹ ?`,speed,`Vitesse = distance ÷ durée = ${distance} ÷ ${duration} = ${speed} km·h⁻¹.`)}},

{theme:"Algorithmique",notion:"Exécuter un programme Scratch avec une expression",interactiveOnly:true,make:()=>{let x=rand(-5,8),a=rand(2,6),b=rand(-8,8),answer=a*x+b,sign=b>=0?`+ ${b}`:`− ${Math.abs(b)}`;return q(`Dans ce programme Scratch, la réponse saisie est ${displayNumber(x)}. Quelle valeur le lutin annonce-t-il ?`,answer,`Le programme calcule ${a} × (${displayNumber(x)}) ${sign} = ${displayNumber(answer)}.`,[],{scratchBlocks:[{type:"event",text:"quand le drapeau vert est cliqué"},{type:"sensing",text:"demander un nombre et attendre"},{type:"variables",text:`mettre résultat à ${a} × réponse ${sign}`},{type:"looks",text:"dire résultat"}]})}},
{theme:"Algorithmique",notion:"Comprendre des boucles imbriquées",interactiveOnly:true,make:()=>{let outer=rand(2,5),inner=rand(2,5),change=rand(1,4),answer=outer*inner*change;return q(`Observe le programme Scratch. Quelle est la valeur finale de compteur ?`,answer,`Le changement est exécuté ${outer} × ${inner} = ${outer*inner} fois, donc compteur vaut ${outer*inner} × ${change} = ${answer}.`,[],{scratchBlocks:[{type:"event",text:"quand le drapeau vert est cliqué"},{type:"variables",text:"mettre compteur à 0"},{type:"control",text:`répéter ${outer} fois`},{type:"control",indent:1,text:`répéter ${inner} fois`},{type:"variables",indent:2,text:`ajouter ${change} à compteur`},{type:"control",indent:1,text:"fin de la boucle intérieure"},{type:"control",text:"fin de la boucle extérieure"}]})}},
{theme:"Algorithmique",notion:"Interpréter une condition Scratch",interactiveOnly:true,make:()=>{let number=rand(10,99),even=number%2===0;return q(`Dans ce programme Scratch, la réponse saisie est ${number}. Quel mot le lutin annonce-t-il ?`,even?"pair":"impair",`Le reste de la division de ${number} par 2 vaut ${number%2} : le nombre est ${even?"pair":"impair"}.`,[],{scratchBlocks:[{type:"event",text:"quand le drapeau vert est cliqué"},{type:"sensing",text:"demander un nombre et attendre"},{type:"control",text:"si réponse modulo 2 = 0 alors"},{type:"looks",indent:1,text:"dire pair"},{type:"control",text:"sinon"},{type:"looks",indent:1,text:"dire impair"},{type:"control",text:"fin de la condition"}]})}}
];

function lcm(a,b){return Math.abs(a*b)/gcd(a,b)}
function primeFactorString(n){
  let x=n,p=2,parts=[];
  while(x>1){let c=0;while(x%p===0){x/=p;c++}if(c)parts.push(c===1?`${p}`:`${p}^${c}`);p++}
  return parts.join("×")
}
function divis2359(n){
  let a=[]; if(n%2===0)a.push("2"); if(n%3===0)a.push("3"); if(n%5===0)a.push("5"); if(n%9===0)a.push("9");
  return a.length?a.join(","):"aucun"
}


const G6 = [
{theme:"Nombres entiers et décimaux",notion:"Restituer automatiquement des résultats usuels",make:()=>{let a=[10,100,1000][rand(0,2)],b=[10,100,1000][rand(0,2)];return q(`Calcule : 1/${a} × ${b}`,fmt(b/a),`On utilise les relations entre dixièmes, centièmes et millièmes.`)}},
{theme:"Nombres entiers et décimaux",notion:"Équivalences d’écritures décimales",make:()=>{let n=rand(1,999);let d=[10,100,1000][rand(0,2)];return q(`Donne l’écriture décimale de ${n}/${d}.`,fmt(n/d),`${n} ÷ ${d} = ${fmt(n/d)}.`)}},
{theme:"Nombres entiers et décimaux",notion:"Fractions décimales et écritures décimales",make:()=>{let v=rand(1,999)/100;return q(`Écris ${fmt(v)} sous forme d’une fraction décimale.`,`${Math.round(v*100)}/100`,`${fmt(v)} = ${Math.round(v*100)}/100.`)}},
{theme:"Nombres entiers et décimaux",notion:"Multiplier un décimal par 1, 10, 100 ou 1 000",make:()=>{let n=rand(1,999)/10,p=[1,10,100,1000][rand(0,3)];return q(`Calcule : ${fmt(n)} × ${p}`,fmt(n*p),`La virgule se décale selon le nombre de zéros.`)}},
{theme:"Nombres entiers et décimaux",notion:"Diviser un décimal par 1, 10, 100 ou 1 000",make:()=>{let n=rand(10,999),p=[1,10,100,1000][rand(0,3)];return q(`Calcule : ${n} ÷ ${p}`,fmt(n/p),`La virgule se décale vers la gauche.`)}},

{theme:"Fractions",notion:"Reconnaître une fraction dans plusieurs représentations",make:()=>{let items=[["une moitié","1/2"],["un quart","1/4"],["trois quarts","3/4"],["un cinquième","1/5"]],z=items[rand(0,3)];return q(`Écris sous forme de fraction : ${z[0]}.`,z[1],`${z[0]} s’écrit ${z[1]}.`)}},
{theme:"Fractions",notion:"Relations entre fractions usuelles",make:()=>{let items=[["1/2","2/4"],["1/4","2/8"],["3/4","6/8"],["1/5","2/10"]],z=items[rand(0,3)];return q(`Complète : ${z[0]} = …`,z[1],`On multiplie le numérateur et le dénominateur par le même nombre.`)}},
{theme:"Fractions",notion:"Passer d’une écriture fractionnaire à une écriture décimale",make:()=>{let opts=[[1,2,.5],[1,4,.25],[3,4,.75],[1,5,.2],[3,5,.6],[1,10,.1]];let z=opts[rand(0,opts.length-1)];return q(`Donne l’écriture décimale de ${z[0]}/${z[1]}.`,fmt(z[2]),`${z[0]} ÷ ${z[1]} = ${fmt(z[2])}.`)}},
{theme:"Fractions",notion:"Multiplier une fraction par un entier",make:()=>{let d=[2,3,4,5][rand(0,3)],a=rand(1,d-1),n=d*rand(2,8);return q(`Calcule : ${a}/${d} × ${n}`,a*n/d,`${n} ÷ ${d} × ${a} = ${a*n/d}.`)}},
{theme:"Fractions",notion:"Calculer une fraction d’une quantité",make:()=>{let d=[2,3,4,5][rand(0,3)],a=rand(1,d-1),n=d*rand(2,12);return q(`Calcule ${a}/${d} de ${n}.`,a*n/d,`${n} ÷ ${d} × ${a} = ${a*n/d}.`)}},

{theme:"Longueurs et aires",notion:"Unités de longueur",make:()=>{let items=[["1 km",1000,"m"],["1 m",100,"cm"],["1 cm",10,"mm"],["1 dm",10,"cm"]],z=items[rand(0,3)];return q(`Complète : ${z[0]} = … ${z[2]}`,z[1],`${z[0]} = ${z[1]} ${z[2]}.`,[`${z[1]} ${z[2]}`])}},
{theme:"Longueurs et aires",notion:"Convertir des longueurs",make:()=>{let n=rand(1,30),type=rand(0,2);if(type===0)return q(`Convertis ${n} m en cm.`,n*100,`1 m = 100 cm.`);if(type===1)return q(`Convertis ${n} cm en mm.`,n*10,`1 cm = 10 mm.`);return q(`Convertis ${n} km en m.`,n*1000,`1 km = 1 000 m.`)}},
{theme:"Longueurs et aires",notion:"Périmètre du carré et du rectangle",make:()=>{if(Math.random()<.5){let c=rand(2,15);return q(`Calcule le périmètre d’un carré de côté ${c} cm.`,4*c,`P = 4 × ${c} = ${4*c} cm.`)}let l=rand(3,15),w=rand(2,10);return q(`Calcule le périmètre d’un rectangle de longueur ${l} cm et de largeur ${w} cm.`,2*(l+w),`P = 2 × (${l}+${w}) = ${2*(l+w)} cm.`)}},
{theme:"Longueurs et aires",notion:"Comparer des aires",make:()=>{let a=rand(2,10),b=rand(2,10),c=rand(2,10),d=rand(2,10);while(a*b===c*d)d=rand(2,10);return q(`Quel rectangle a la plus grande aire : A (${a}×${b}) ou B (${c}×${d}) ?`,a*b>c*d?"A":"B",`Aire A = ${a*b}, aire B = ${c*d}.`)}},
{theme:"Longueurs et aires",notion:"Unités d’aire",make:()=>q(`Combien de cm² y a-t-il dans 1 dm² ?`,100,`1 dm = 10 cm, donc 1 dm² = 10 × 10 = 100 cm².`)},
{theme:"Longueurs et aires",notion:"Calculer une aire sur quadrillage",make:()=>{let l=rand(2,10),w=rand(2,10);return q(`Un rectangle occupe ${l} carreaux de longueur et ${w} carreaux de largeur. Quelle est son aire en carreaux ?`,l*w,`${l} × ${w} = ${l*w}.`)}},

{theme:"Repérage dans le temps et durées",notion:"Lire l’heure",make:()=>{let h=rand(1,12),m=[0,15,30,45][rand(0,3)];return q(`Une horloge indique ${h} h ${String(m).padStart(2,"0")}. Combien de minutes se sont écoulées depuis ${h} h ?`,m,`${m} minute(s) se sont écoulées.`)}},
{theme:"Repérage dans le temps et durées",notion:"Unités de durée",make:()=>{let items=[["1 heure",60,"minutes"],["1 minute",60,"secondes"],["1 jour",24,"heures"],["1 semaine",7,"jours"]],z=items[rand(0,3)];return q(`Complète : ${z[0]} = … ${z[2]}`,z[1],`${z[0]} = ${z[1]} ${z[2]}.`,[`${z[1]} ${z[2]}`])}},
{theme:"Repérage dans le temps et durées",notion:"Années bissextiles, siècles et millénaires",make:()=>{let type=rand(0,2);if(type===0)return q(`Combien d’années compte un siècle ?`,100,`Un siècle compte 100 ans.`);if(type===1)return q(`Combien d’années compte un millénaire ?`,1000,`Un millénaire compte 1 000 ans.`);return q(`Combien de jours compte une année bissextile ?`,366,`Une année bissextile compte 366 jours.`)}},
{theme:"Repérage dans le temps et durées",notion:"Relations entre fractions d’heure",make:()=>{let items=[["une demi-heure",30],["un quart d’heure",15],["trois quarts d’heure",45]],z=items[rand(0,2)];return q(`Combien de minutes représente ${z[0]} ?`,z[1],`${z[0]} représente ${z[1]} minutes.`)}},

{theme:"Organisation et gestion de données",notion:"Lire un tableau",make:()=>{let a=rand(5,20),b=rand(5,20);return q(`Dans un tableau, la catégorie A compte ${a} élèves et la catégorie B ${b}. Quel est l’effectif total ?`,a+b,`${a}+${b}=${a+b}.`)}},
{theme:"Organisation et gestion de données",notion:"Lire un diagramme en barres",make:()=>{let a=rand(3,15),b=rand(3,15);return q(`Une barre représente ${a} élèves et une autre ${b}. Quel est l’écart entre les deux effectifs ?`,Math.abs(a-b),`On calcule la différence : ${Math.abs(a-b)}.`)}},

{theme:"Proportionnalité",notion:"Repérer des relations multiplicatives simples",make:()=>{let a=rand(2,9),k=rand(2,6);return q(`Par quel nombre faut-il multiplier ${a} pour obtenir ${a*k} ?`,k,`${a} × ${k} = ${a*k}.`)}},
{theme:"Proportionnalité",notion:"Comprendre les expressions fois plus ou fois moins",make:()=>{let n=rand(3,20),k=rand(2,5),up=Math.random()<.5;return q(`Quel nombre est ${k} fois ${up?"plus grand":"plus petit"} que ${n*k}?`,up?n*k*k:n,up?`On multiplie ${n*k} par ${k}.`:`On divise ${n*k} par ${k}.`)}},

{theme:"Géométrie plane et espace",notion:"Reconnaître un carré, un rectangle et un triangle",make:()=>{
  const items=[
    ["quatre côtés égaux et quatre angles droits","carré"],
    ["quatre angles droits et deux longueurs de côtés différentes","rectangle"],
    ["trois côtés","triangle"]
  ],[description,answer]=items[rand(0,items.length-1)];
  if(Math.random()>=.67)return q(`Quelle figure possède ${description} ?`,answer,`Il s’agit d’un ${answer}.`);
  const figureChoices=shuffleQuestions(["carré","rectangle","triangle"]);
  const correctLetter=String.fromCharCode(65+figureChoices.indexOf(answer));
  return q(`Quelle figure possède ${description} ?`,answer,`La figure ${correctLetter} est un ${answer}.`,[correctLetter],{figureChoices});
}},
{theme:"Géométrie plane et espace",notion:"Axes de symétrie",make:()=>{let items=[["carré",4],["rectangle",2],["triangle équilatéral",3],["cercle","une infinité"]],z=items[rand(0,3)];return q(`Combien d’axes de symétrie possède un ${z[0]} ?`,z[1],`Un ${z[0]} possède ${z[1]} axe(s) de symétrie.`)}},
{theme:"Géométrie plane et espace",notion:"Reconnaître des solides usuels",make:()=>{let items=[["6 faces carrées","cube"],["2 bases circulaires et une surface courbe","cylindre"],["une base circulaire et un sommet","cône"],["une surface entièrement courbe","boule"]],[description,answer]=items[rand(0,3)];return optionalSolidChoiceQuestion(description,answer,["cube","cylindre","cône","boule"])}},

{theme:"Calcul mental",notion:"Ajouter ou soustraire un entier à un décimal",make:()=>{let a=rand(10,150)/10,b=rand(1,20),op=Math.random()<.5?"+":"−";return q(`Calcule mentalement : ${fmt(a)} ${op} ${b}`,fmt(op==="+"?a+b:a-b),`On agit sur la partie entière du nombre décimal.`)}},
{theme:"Calcul mental",notion:"Tables de multiplication",make:()=>{let a=rand(2,12),b=rand(2,12);return q(`Calcule : ${a} × ${b}`,a*b,`${a} × ${b} = ${a*b}.`)}},
{theme:"Calcul mental",notion:"Doubles et moitiés",make:()=>{let n=2*rand(2,50),double=Math.random()<.5;return q(`Calcule ${double?"le double":"la moitié"} de ${n}.`,double?2*n:n/2,double?`${n} × 2 = ${2*n}.`:`${n} ÷ 2 = ${n/2}.`)}},
{theme:"Calcul mental",notion:"Somme de plusieurs nombres",make:()=>{let a=rand(5,40),b=rand(5,40),c=rand(5,40);return q(`Calcule mentalement : ${a} + ${b} + ${c}`,a+b+c,`On peut regrouper les nombres de façon pratique.`)}},
{theme:"Calcul mental",notion:"Ordre de grandeur",make:()=>{let a=rand(41,99),b=rand(41,99);return q(`Donne un ordre de grandeur de ${a} + ${b}, à la dizaine près.`,Math.round(a/10)*10+Math.round(b/10)*10,`On arrondit chaque nombre à la dizaine la plus proche.`)}},
{theme:"Calcul mental",notion:"Produit simple",make:()=>{let a=[25,50,100][rand(0,2)],b=rand(2,12);return q(`Calcule mentalement : ${a} × ${b}`,a*b,`On utilise une décomposition simple.`)}},

{theme:"Algorithmique",notion:"Exécuter une séquence Scratch",interactiveOnly:true,make:()=>{let first=rand(5,30),second=rand(5,30);return q(`Observe le programme Scratch. De combien de pas le lutin avance-t-il au total ?`,first+second,`Le lutin avance de ${first} + ${second} = ${first+second} pas.`,[],{scratchBlocks:[{type:"event",text:"quand le drapeau vert est cliqué"},{type:"motion",text:`avancer de ${first} pas`},{type:"motion",text:`avancer de ${second} pas`}]})}},
{theme:"Algorithmique",notion:"Comprendre une boucle répéter",interactiveOnly:true,make:()=>{let repetitions=rand(2,5),seconds=rand(1,4);return q(`Observe le programme Scratch. Pendant combien de secondes le lutin attend-il au total ?`,repetitions*seconds,`Le lutin attend ${seconds} seconde(s), ${repetitions} fois : ${repetitions} × ${seconds} = ${repetitions*seconds}.`,[],{scratchBlocks:[{type:"event",text:"quand le drapeau vert est cliqué"},{type:"control",text:`répéter ${repetitions} fois`},{type:"control",indent:1,text:`attendre ${seconds} seconde(s)`},{type:"control",text:"fin de la boucle"}]})}},
{theme:"Algorithmique",notion:"Suivre la valeur d’une variable",interactiveOnly:true,make:()=>{let start=rand(1,15),change=rand(1,10);return q(`Observe le programme Scratch. Quelle est la valeur finale de la variable points ?`,start+change,`La variable passe de ${start} à ${start} + ${change} = ${start+change}.`,[],{scratchBlocks:[{type:"event",text:"quand le drapeau vert est cliqué"},{type:"variables",text:`mettre points à ${start}`},{type:"variables",text:`ajouter ${change} à points`}]})}}
];

const GENERATORS = {"6e":G6,"5e":G5,"4e":G4,"3e":G3};
const LEVEL_SEQUENCE=["6e","5e","4e","3e"];
Object.entries(GENERATORS).forEach(([level,generators])=>{
  generators.forEach(generator=>{generator.sourceLevel=level});
});
const SIXTH_GRADE_THEME_EQUIVALENTS={
  "Nombres entiers et décimaux":"Nombres et calculs",
  "Fractions":"Nombres et calculs",
  "Repérage dans le temps et durées":"Nombres et calculs",
  "Calcul mental":"Nombres et calculs",
  "Longueurs et aires":"Espace et géométrie",
  "Géométrie plane et espace":"Espace et géométrie",
  "Organisation et gestion de données":"Données et probabilités",
  "Proportionnalité":"Proportionnalité et fonctions"
};

const CHOICE_CATEGORIES=[
  {
    id:"numbers",
    icon:THEMES["Nombres et calculs"],
    label:"Nombres et calculs",
    themes:["Nombres et calculs","Nombres entiers et décimaux","Fractions","Repérage dans le temps et durées","Calcul mental"]
  },
  {
    id:"algebra",
    icon:THEMES["Proportionnalité et fonctions"],
    label:"Calcul littéral et fonctions",
    themes:["Proportionnalité et fonctions","Proportionnalité"]
  },
  {
    id:"geometry",
    icon:THEMES["Espace et géométrie"],
    label:"Espace, géométrie et grandeurs",
    themes:["Espace et géométrie","Longueurs et aires","Géométrie plane et espace"]
  },
  {
    id:"statistics",
    icon:THEMES["Données et probabilités"],
    label:"Probabilités et statistiques",
    themes:["Données et probabilités","Organisation et gestion de données"]
  },
  {
    id:"scratch",
    icon:THEMES.Algorithmique,
    label:"Algorithmique Scratch",
    themes:["Algorithmique"]
  }
];
const CHOICE_CATEGORY_BY_THEME=new Map(
  CHOICE_CATEGORIES.flatMap(category=>category.themes.map(theme=>[theme,category.id]))
);

let state = JSON.parse(localStorage.getItem("mathsAutoCycle4")||'{"selectedLevel":"5e","points":0,"levels":{"6e":{"sessions":0,"questions":0,"correct":0,"history":[],"byTheme":{},"byNotion":{},"dates":[]},"5e":{"sessions":0,"questions":0,"correct":0,"history":[],"byTheme":{},"byNotion":{},"dates":[]},"4e":{"sessions":0,"questions":0,"correct":0,"history":[],"byTheme":{},"byNotion":{},"dates":[]},"3e":{"sessions":0,"questions":0,"correct":0,"history":[],"byTheme":{},"byNotion":{},"dates":[]}}}');
if(!state.levels){
  const old={sessions:state.sessions||0,questions:state.questions||0,correct:state.correct||0,history:state.history||[],byTheme:state.byTheme||{},byNotion:state.byNotion||{},dates:state.dates||[]};
  state={selectedLevel:"5e",points:state.points||0,levels:{"6e":{sessions:0,questions:0,correct:0,history:[],byTheme:{},byNotion:{},dates:[]},"5e":old,"4e":{sessions:0,questions:0,correct:0,history:[],byTheme:{},byNotion:{},dates:[]},"3e":{sessions:0,questions:0,correct:0,history:[],byTheme:{},byNotion:{},dates:[]}}};
}
if(!state.levels["6e"]) state.levels["6e"]={sessions:0,questions:0,correct:0,history:[],byTheme:{},byNotion:{},dates:[]};
if(!state.levels["3e"]) state.levels["3e"]={sessions:0,questions:0,correct:0,history:[],byTheme:{},byNotion:{},dates:[]};
let currentLevel=state.selectedLevel||"5e";
let currentQuiz=[],quizReview=[],index=0,score=0,answered=false,nextQuestionTimer=null,pointsMilestoneTimer=null;
let printableSheets=[],printableLevel="";
let selectedChoiceNotions=new Set();

function levelState(){return state.levels[currentLevel]}
function pointsMilestoneMessage(points){
  const specialMessages={
    500:"Bravo ! Tes efforts réguliers portent leurs fruits. Continue comme ça !",
    1000:"Formidable ! Tu construis des automatismes de plus en plus solides.",
    1500:"Excellent travail ! Ta persévérance te fait vraiment progresser.",
    2000:"Impressionnant ! Tu as déjà parcouru beaucoup de chemin en mathématiques."
  };
  const recurringMessages=[
    "Quel beau parcours ! Chaque exercice réussi renforce tes connaissances.",
    "Superbe progression ! Ta régularité est une vraie force.",
    "Félicitations ! Continue à avancer avec la même détermination."
  ];
  return specialMessages[points]||recurringMessages[(points/500-1)%recurringMessages.length];
}
function closePointsMilestone(){
  clearTimeout(pointsMilestoneTimer);
  pointsMilestoneTimer=null;
  document.getElementById("pointsMilestone").classList.add("hidden");
}
function showReachedPointsMilestone(previousPoints,currentPoints){
  const previousStep=Math.floor(previousPoints/500);
  const currentStep=Math.floor(currentPoints/500);
  if(currentStep<=previousStep)return;
  const milestone=currentStep*500;
  document.getElementById("pointsMilestoneTitle").textContent=`Palier atteint : ${milestone.toLocaleString("fr-FR")} points !`;
  document.getElementById("pointsMilestoneMessage").textContent=pointsMilestoneMessage(milestone);
  document.getElementById("pointsMilestone").classList.remove("hidden");
  clearTimeout(pointsMilestoneTimer);
  pointsMilestoneTimer=setTimeout(closePointsMilestone,6500);
}
function cancelScheduledNextQuestion(){
  if(nextQuestionTimer===null)return;
  clearTimeout(nextQuestionTimer);
  nextQuestionTimer=null;
}
function scheduleNextQuestion(){
  cancelScheduledNextQuestion();
  nextQuestionTimer=setTimeout(()=>{
    nextQuestionTimer=null;
    next();
  },3000);
}
document.querySelectorAll(".nav-btn").forEach(b=>b.onclick=()=>showView(b.dataset.view));
document.querySelectorAll(".level-btn").forEach(b=>b.onclick=()=>selectLevel(b.dataset.level));
document.querySelectorAll("[data-return-home]").forEach(b=>b.onclick=()=>showView("home"));

function selectLevel(level){
  currentLevel=level; state.selectedLevel=level; save();
  document.querySelectorAll(".level-btn").forEach(b=>b.classList.toggle("selected",b.dataset.level===level));
  document.getElementById("notionsLevelLabel").textContent=level;
  document.getElementById("worksheetLevelLabel").textContent=level;
  preparePrintableSheets();
  makeChoiceMenu(); renderNotions(); renderAll();
}
function showView(id){
  if(id!=="training")cancelScheduledNextQuestion();
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.view===id));
  if(id==="progress") renderProgress();
  if(id==="worksheets"&&printableLevel!==currentLevel) preparePrintableSheets();
  window.scrollTo(0,0);
}
function availableThemes(){
  return Object.keys(NOTIONS[currentLevel]);
}
function choiceGroupsForCurrentLevel(){
  const notionsByCategory=new Map(CHOICE_CATEGORIES.map(category=>[category.id,[]]));
  const seenByCategory=new Map(CHOICE_CATEGORIES.map(category=>[category.id,new Set()]));
  GENERATORS[currentLevel].forEach(generator=>{
    const categoryId=CHOICE_CATEGORY_BY_THEME.get(generator.theme);
    if(!categoryId||seenByCategory.get(categoryId).has(generator.notion))return;
    seenByCategory.get(categoryId).add(generator.notion);
    notionsByCategory.get(categoryId).push(generator.notion);
  });
  return CHOICE_CATEGORIES
    .map(category=>({...category,notions:notionsByCategory.get(category.id)}))
    .filter(category=>category.notions.length);
}
function updateChoiceSelection(){
  const checkboxes=[...document.querySelectorAll("[data-choice-notion]")];
  selectedChoiceNotions=new Set(
    checkboxes.filter(checkbox=>checkbox.checked).map(checkbox=>checkbox.dataset.choiceNotion)
  );
  const count=selectedChoiceNotions.size;
  document.getElementById("choiceStatus").textContent=count
    ?`${count} type${count>1?"s":""} d’exercice${count>1?"s":""} sélectionné${count>1?"s":""}`
    :"Aucun exercice sélectionné";
  document.getElementById("startChoice").disabled=count===0;
}
function makeChoiceMenu(){
  selectedChoiceNotions=new Set();
  const groups=choiceGroupsForCurrentLevel();
  document.getElementById("choiceGroups").innerHTML=groups.map(category=>{
    const panelId=`choice-panel-${category.id}`;
    const choices=category.notions.map((notion,notionIndex)=>{
      const inputId=`choice-${category.id}-${notionIndex}`;
      return `<label class="choice-option" for="${inputId}"><input id="${inputId}" type="checkbox" data-choice-notion="${escapeXml(notion)}"><span>${escapeXml(notion)}</span></label>`;
    }).join("");
    return `<section class="choice-group" data-choice-group="${category.id}">
      <button class="choice-group-toggle" type="button" aria-expanded="false" aria-controls="${panelId}">
        <span><span aria-hidden="true">${category.icon}</span> ${category.label}</span>
        <span class="choice-arrow" aria-hidden="true">▼</span>
      </button>
      <div class="choice-panel" id="${panelId}" hidden>
        <button class="choice-check-all" type="button" data-choice-category="${category.id}">Tout cocher / décocher</button>
        <div class="choice-options">${choices}</div>
      </div>
    </section>`;
  }).join("");
  document.querySelectorAll(".choice-group-toggle").forEach(button=>{
    button.onclick=()=>{
      const panel=document.getElementById(button.getAttribute("aria-controls"));
      const isOpen=button.getAttribute("aria-expanded")==="true";
      button.setAttribute("aria-expanded",String(!isOpen));
      button.querySelector(".choice-arrow").textContent=isOpen?"▼":"▲";
      panel.hidden=isOpen;
    };
  });
  document.querySelectorAll("[data-choice-category]").forEach(button=>{
    button.onclick=()=>{
      const checkboxes=[...document.querySelectorAll(`[data-choice-group="${button.dataset.choiceCategory}"] [data-choice-notion]`)];
      const shouldCheck=checkboxes.some(checkbox=>!checkbox.checked);
      checkboxes.forEach(checkbox=>{checkbox.checked=shouldCheck});
      updateChoiceSelection();
    };
  });
  document.querySelectorAll("[data-choice-notion]").forEach(checkbox=>{
    checkbox.onchange=updateChoiceSelection;
  });
  updateChoiceSelection();
}
document.getElementById("startRandom").onclick=()=>startQuiz("random");
document.getElementById("startReview").onclick=openReviewPlan;
document.getElementById("openProgress").onclick=()=>showView("progress");
document.getElementById("openWorksheets").onclick=()=>showView("worksheets");
document.getElementById("openNotions").onclick=()=>showView("notions");
document.getElementById("openChoices").onclick=()=>{
  makeChoiceMenu();
  document.getElementById("choiceModal").classList.remove("hidden");
};
document.getElementById("closeReviewModal").onclick=closeReviewPlan;
document.getElementById("startPreparedReview").onclick=beginCurrentQuiz;
document.getElementById("closePointsMilestone").onclick=closePointsMilestone;
document.getElementById("reviewModal").onclick=event=>{
  if(event.target===event.currentTarget)closeReviewPlan();
};
document.getElementById("closeChoiceModal").onclick=()=>document.getElementById("choiceModal").classList.add("hidden");
document.getElementById("startChoice").onclick=()=>startQuiz("choice",null,[...selectedChoiceNotions]);
document.getElementById("choiceModal").onclick=event=>{
  if(event.target===event.currentTarget)event.currentTarget.classList.add("hidden");
};
document.addEventListener("keydown",event=>{
  if(event.key!=="Escape")return;
  document.getElementById("choiceModal").classList.add("hidden");
  closeReviewPlan();
});
document.getElementById("quitQuiz").onclick=()=>showView("home");
document.getElementById("returnHome").onclick=()=>{document.getElementById("resultModal").classList.add("hidden");showView("home");renderAll()};
document.getElementById("validateAnswer").onclick=validate;
document.getElementById("answerInput").addEventListener("keydown",e=>{
  if(e.key!=="Enter"||e.isComposing)return;
  e.preventDefault();
  if(!answered)validate();
});
document.getElementById("answerInput").addEventListener("input",()=>{
  stylizeAnswerVariables();
  updateMathPreview();
});
document.querySelectorAll(".math-key").forEach(button=>button.addEventListener("click",()=>{
  const input=document.getElementById("answerInput");
  const start=input.selectionStart??input.value.length,end=input.selectionEnd??start;
  input.setRangeText(button.dataset.insert,start,end,"end");
  updateMathPreview();
  input.focus();
}));
document.getElementById("decreaseWorksheetCount").onclick=()=>changeWorksheetCount(-1);
document.getElementById("increaseWorksheetCount").onclick=()=>changeWorksheetCount(1);
document.getElementById("worksheetCount").addEventListener("change",preparePrintableSheets);
document.getElementById("worksheetCount").addEventListener("blur",preparePrintableSheets);
document.getElementById("dyslexicVersion").addEventListener("change",renderWorksheetPreview);
document.getElementById("refreshWorksheet").onclick=preparePrintableSheets;
document.getElementById("downloadWorksheets").onclick=downloadWorksheetsPdf;
document.getElementById("clearLocalData").onclick=()=>{
  const confirmed=window.confirm("Effacer définitivement vos points, votre progression et votre historique sur tous les niveaux dans ce navigateur ?");
  if(!confirmed) return;
  localStorage.removeItem("mathsAutoCycle4");
  window.location.reload();
};

function worksheetCount(){
  const input=document.getElementById("worksheetCount");
  const value=Math.min(20,Math.max(1,parseInt(input.value,10)||1));
  input.value=value;
  return value;
}
function changeWorksheetCount(change){
  document.getElementById("worksheetCount").value=worksheetCount()+change;
  preparePrintableSheets();
}
function worksheetExerciseCount(){
  return currentLevel==="4e"||currentLevel==="3e"?10:5;
}
function updateWorksheetExerciseCount(){
  const count=worksheetExerciseCount();
  document.getElementById("worksheetDescriptionCount").textContent=count;
  document.getElementById("worksheetExerciseCount").textContent=`${count} exercices par fiche`;
}
function buildRoutineFromGenerators(generators,count,minimumFunctionQuestions=0){
  const source=[...generators],pool=[...source],selected=[];
  if(!source.length)return [];
  const functionGenerators=pool.filter(generator=>generator.isFunction);
  for(let i=0;i<Math.min(minimumFunctionQuestions,functionGenerators.length,count);i++){
    const functionIndex=rand(0,functionGenerators.length-1);
    const pick=functionGenerators.splice(functionIndex,1)[0];
    pool.splice(pool.indexOf(pick),1);
    selected.push(pick);
  }
  while(selected.length<count){
    if(!pool.length)pool.push(...source);
    selected.push(pool.splice(rand(0,pool.length-1),1)[0]);
  }
  for(let i=selected.length-1;i>0;i--){
    const swapIndex=rand(0,i);
    [selected[i],selected[swapIndex]]=[selected[swapIndex],selected[i]];
  }
  return selected.map(pick=>({...pick.make(),theme:pick.theme,notion:pick.notion,sourceLevel:pick.sourceLevel}));
}
function previousLevelGenerators(level){
  const levelIndex=LEVEL_SEQUENCE.indexOf(level);
  return LEVEL_SEQUENCE.slice(0,Math.max(0,levelIndex)).flatMap(previousLevel=>GENERATORS[previousLevel]);
}
function matchesSelectedTheme(generator,theme){
  return generator.theme===theme||SIXTH_GRADE_THEME_EQUIVALENTS[generator.theme]===theme;
}
function prepareGeneratorPool(generators,{mode="random",theme=null,notions=[],printable=false}={}){
  let pool=generators.filter(generator=>!printable||!generator.interactiveOnly);
  if(mode==="theme")pool=pool.filter(generator=>matchesSelectedTheme(generator,theme));
  if(mode==="choice"){
    const selectedNotions=new Set(notions);
    pool=pool.filter(generator=>selectedNotions.has(generator.notion));
  }
  if(mode==="review"){
    pool=[...pool].sort((a,b)=>successRate(a.notion)-successRate(b.notion));
    pool=pool.slice(0,Math.max(8,Math.floor(pool.length/2)));
  }
  return pool;
}
function reviewReason(exercise){
  const results=levelState().byNotion[exercise.notion];
  let reason;
  if(!results?.q){
    return "Cette notion n’a pas encore été travaillée.";
  }else{
    const rate=results.c/results.q;
    const answers=`${results.c} bonne${results.c===1?"":"s"} réponse${results.c===1?"":"s"} sur ${results.q}`;
    if(rate<.5)reason=`${answers}.`;
    else if(rate<.8)reason=`${answers} : cette notion est encore en cours d’acquisition.`;
    else reason=`${answers} : cet exercice permettra de consolider cet acquis.`;
  }
  if(exercise.sourceLevel!==currentLevel){
    reason+=` C’est une révision de ${exercise.sourceLevel} utile pour consolider les bases du niveau ${currentLevel}.`;
  }
  return reason;
}
function openReviewPlan(){
  currentQuiz=buildMixedLevelRoutine(5,{mode:"review"});
  if(!currentQuiz.length)return;
  const previousLevelExercises=currentQuiz.filter(exercise=>exercise.sourceLevel!==currentLevel).length;
  const currentLevelExercises=currentQuiz.length-previousLevelExercises;
  document.getElementById("reviewMethodReason").innerHTML=
    `• Le site privilégie les notions les moins réussies.<br>`+
    `• Cette routine contient <b>${currentLevelExercises} exercice${currentLevelExercises>1?"s":""} de ${escapeXml(currentLevel)}</b>`+
    (previousLevelExercises
      ?` et <b>${previousLevelExercises} de révision${previousLevelExercises>1?"s":""}.</b>`
      :".");
  document.getElementById("reviewPlanList").innerHTML=currentQuiz.map((exercise,exerciseIndex)=>`
    <article class="review-plan-item">
      <span class="review-plan-number">${exerciseIndex+1}</span>
      <div>
        <span class="review-plan-theme">${escapeXml(exercise.theme)}</span>
        <h4>${escapeXml(exercise.notion)}</h4>
        <p>${escapeXml(reviewReason(exercise))}</p>
      </div>
    </article>
  `).join("");
  document.getElementById("reviewModal").classList.remove("hidden");
  document.getElementById("startPreparedReview").focus();
}
function closeReviewPlan(){
  const modal=document.getElementById("reviewModal");
  if(modal.classList.contains("hidden"))return;
  modal.classList.add("hidden");
  document.getElementById("startReview").focus();
}
function shuffleQuestions(questions){
  for(let i=questions.length-1;i>0;i--){
    const swapIndex=rand(0,i);
    [questions[i],questions[swapIndex]]=[questions[swapIndex],questions[i]];
  }
  return questions;
}
function buildMixedLevelRoutine(count,options={}){
  const currentPool=prepareGeneratorPool(GENERATORS[currentLevel],options);
  const previousPool=prepareGeneratorPool(previousLevelGenerators(currentLevel),options);
  const currentCount=previousPool.length?Math.ceil(count*.6):count;
  const previousCount=count-currentCount;
  const minimumFunctionQuestions=currentLevel==="3e"
    ?(options.printable?2:options.mode==="random"?1:0)
    :0;
  return shuffleQuestions([
    ...buildRoutineFromGenerators(currentPool,currentCount,minimumFunctionQuestions),
    ...buildRoutineFromGenerators(previousPool,previousCount)
  ]);
}
function makeRandomRoutine(){
  const count=worksheetExerciseCount();
  return buildMixedLevelRoutine(count,{mode:"random",printable:true});
}
function preparePrintableSheets(){
  updateWorksheetExerciseCount();
  printableSheets=Array.from({length:worksheetCount()},makeRandomRoutine);
  printableLevel=currentLevel;
  renderWorksheetPreview();
  document.getElementById("pdfStatus").textContent="";
}
function renderWorksheetPreview(){
  if(!printableSheets[0]) return;
  const preview=document.getElementById("worksheetPreview");
  const dyslexic=document.getElementById("dyslexicVersion").checked;
  const renderedPage=renderWorksheetPages(printableSheets[0],1,false,dyslexic)[0];
  const context=preview.getContext("2d");
  context.clearRect(0,0,preview.width,preview.height);
  context.drawImage(renderedPage,0,0);
}
function wrapCanvasText(context,text,maxWidth){
  const words=String(text).split(/\s+/),lines=[];
  let line="";
  words.forEach(word=>{
    const test=line?`${line} ${word}`:word;
    if(line&&context.measureText(test).width>maxWidth){lines.push(line);line=word}
    else line=test;
  });
  if(line) lines.push(line);
  return lines;
}
function drawLines(context,text,x,y,maxWidth,lineHeight,maxLines=4){
  const lines=wrapCanvasText(context,text,maxWidth).slice(0,maxLines);
  lines.forEach((line,i)=>context.fillText(line,x,y+i*lineHeight));
  return y+lines.length*lineHeight;
}
function drawRoundedBox(context,x,y,width,height,radius,fill,stroke){
  context.beginPath();
  context.moveTo(x+radius,y);
  context.lineTo(x+width-radius,y);
  context.quadraticCurveTo(x+width,y,x+width,y+radius);
  context.lineTo(x+width,y+height-radius);
  context.quadraticCurveTo(x+width,y+height,x+width-radius,y+height);
  context.lineTo(x+radius,y+height);
  context.quadraticCurveTo(x,y+height,x,y+height-radius);
  context.lineTo(x,y+radius);
  context.quadraticCurveTo(x,y,x+radius,y);
  context.closePath();
  if(fill){context.fillStyle=fill;context.fill()}
  if(stroke){context.strokeStyle=stroke;context.lineWidth=2;context.stroke()}
}
function renderWorksheetPages(sheet,sheetNumber,isCorrection,dyslexic=false){
  const exercisesPerPage=dyslexic?5:sheet.length;
  const pageCount=Math.ceil(sheet.length/exercisesPerPage);
  return Array.from({length:pageCount},(_,pageIndex)=>{
    const startIndex=pageIndex*exercisesPerPage;
    return renderWorksheetPage(
      sheet.slice(startIndex,startIndex+exercisesPerPage),
      sheetNumber,
      isCorrection,
      {dyslexic,pageNumber:pageIndex+1,pageCount,startIndex}
    );
  });
}
function renderWorksheetPage(sheet,sheetNumber,isCorrection,options={}){
  const {dyslexic=false,pageNumber=1,pageCount=1,startIndex=0}=options;
  const canvas=document.createElement("canvas");
  canvas.width=1240;canvas.height=1754;
  const context=canvas.getContext("2d");
  const worksheetColor=WORKSHEET_COLORS[currentLevel]||WORKSHEET_COLORS["5e"];
  const fontFamily=dyslexic?"Verdana":"Arial";
  if("letterSpacing" in context)context.letterSpacing=dyslexic?"0.8px":"0px";
  context.fillStyle=dyslexic?"#fffdf4":"#ffffff";context.fillRect(0,0,canvas.width,canvas.height);
  context.fillStyle=worksheetColor;context.font=`700 ${dyslexic?38:43}px ${fontFamily}`;
  context.fillText(isCorrection?"Corrigé":dyslexic?"Automatismes · Version dyslexique":"Automatismes Entraînement",82,100);
  context.fillStyle="#14213d";context.textAlign="right";
  context.font=`700 30px ${fontFamily}`;context.fillText(`FICHE N° ${sheetNumber}${pageCount>1?` · ${pageNumber}/${pageCount}`:""}`,1158,78);
  context.font=`20px ${fontFamily}`;context.fillText(`Niveau ${currentLevel}`,1158,112);
  context.textAlign="left";
  context.strokeStyle=worksheetColor;context.lineWidth=3;
  context.beginPath();context.moveTo(82,150);context.lineTo(1158,150);context.stroke();

  context.fillStyle="#14213d";
  if(!isCorrection){
    context.font=`22px ${fontFamily}`;context.fillText("Nom : ______________________________________",82,218);
    context.fillText("Date : ____________________",780,218);
  }

  const dense=!dyslexic&&sheet.length>5;
  const columns=dense?2:1;
  const columnGap=dense?20:0;
  const boxWidth=(1096-columnGap*(columns-1))/columns;
  sheet.forEach((exercise,i)=>{
    const column=dense?i%columns:0;
    const row=dense?Math.floor(i/columns):i;
    const x=72+column*(boxWidth+columnGap);
    const y=260+row*278;
    const dyslexicBoxFill=i%2===0?"#ffffff":"#f3f7fb";
    drawRoundedBox(context,x,y,boxWidth,246,18,isCorrection?"#f7f9fc":dyslexic?dyslexicBoxFill:"#ffffff","#dce5f1");
    drawRoundedBox(context,x+22,y+22,48,48,24,worksheetColor);
    context.fillStyle="#ffffff";context.font=`700 24px ${fontFamily}`;context.textAlign="center";
    context.fillText(String(startIndex+i+1),x+46,y+54);context.textAlign="left";
    context.fillStyle=worksheetColor;context.font=dense?`700 16px ${fontFamily}`:`700 ${dyslexic?20:19}px ${fontFamily}`;
    drawLines(context,`${exercise.theme} · ${exercise.notion}`,x+92,y+49,boxWidth-114,dense?21:dyslexic?29:25,2);
    context.fillStyle="#14213d";
    context.font=isCorrection
      ?(dense?`19px ${fontFamily}`:`${dyslexic?25:23}px ${fontFamily}`)
      :(dense?`21px ${fontFamily}`:`${dyslexic?28:26}px ${fontFamily}`);
    const questionBottom=drawLines(context,exercise.text,x+32,y+111,boxWidth-64,dense?28:dyslexic?39:(isCorrection?31:34),dense?4:3);
    if(isCorrection){
      context.fillStyle="#167333";context.font=dense?`700 19px ${fontFamily}`:`700 ${dyslexic?26:25}px ${fontFamily}`;
      context.fillText(`Réponse : ${exercise.answer}`,x+32,Math.min(y+226,Math.max(y+180,questionBottom+8)));
    }else{
      context.strokeStyle="#8b98aa";context.lineWidth=2;context.setLineDash([4,7]);
      const lineY=dense?Math.min(y+224,Math.max(y+186,questionBottom+8)):Math.max(y+186,questionBottom+28);
      context.beginPath();context.moveTo(x+32,lineY);context.lineTo(x+boxWidth-32,lineY);context.stroke();
      context.setLineDash([]);
    }
  });
  return canvas;
}
function canvasToJpegBytes(canvas){
  return new Promise((resolve,reject)=>{
    canvas.toBlob(async blob=>{
      if(!blob){reject(new Error("Impossible de créer la page PDF."));return}
      resolve(new Uint8Array(await blob.arrayBuffer()));
    },"image/jpeg",0.9);
  });
}
function asciiBytes(text){return new TextEncoder().encode(text)}
function joinBytes(parts,total){
  const result=new Uint8Array(total);let offset=0;
  parts.forEach(part=>{result.set(part,offset);offset+=part.length});
  return result;
}
function makeImagePdf(images){
  const parts=[],offsets=[0];let length=0;
  const add=part=>{parts.push(part);length+=part.length};
  const addText=text=>add(asciiBytes(text));
  const objectCount=2+images.length*3;
  add(new Uint8Array([37,80,68,70,45,49,46,52,10,37,226,227,207,211,10]));
  const beginObject=id=>{offsets[id]=length;addText(`${id} 0 obj\n`)};
  const endObject=()=>addText("endobj\n");

  beginObject(1);addText("<< /Type /Catalog /Pages 2 0 R >>\n");endObject();
  const kids=images.map((_,i)=>`${3+i*3} 0 R`).join(" ");
  beginObject(2);addText(`<< /Type /Pages /Count ${images.length} /Kids [${kids}] >>\n`);endObject();

  images.forEach((image,i)=>{
    const pageId=3+i*3,contentId=pageId+1,imageId=pageId+2;
    beginObject(pageId);
    addText(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im1 ${imageId} 0 R >> >> /Contents ${contentId} 0 R >>\n`);
    endObject();
    const stream="q\n595.28 0 0 841.89 0 0 cm\n/Im1 Do\nQ\n";
    beginObject(contentId);addText(`<< /Length ${asciiBytes(stream).length} >>\nstream\n${stream}endstream\n`);endObject();
    beginObject(imageId);
    addText(`<< /Type /XObject /Subtype /Image /Width 1240 /Height 1754 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${image.length} >>\nstream\n`);
    add(image);addText("\nendstream\n");endObject();
  });

  const xrefOffset=length;
  addText(`xref\n0 ${objectCount+1}\n0000000000 65535 f \n`);
  for(let id=1;id<=objectCount;id++) addText(`${String(offsets[id]).padStart(10,"0")} 00000 n \n`);
  addText(`trailer\n<< /Size ${objectCount+1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`);
  return joinBytes(parts,length);
}
async function downloadWorksheetsPdf(){
  const button=document.getElementById("downloadWorksheets"),status=document.getElementById("pdfStatus");
  if(printableLevel!==currentLevel||printableSheets.length!==worksheetCount()) preparePrintableSheets();
  const dyslexic=document.getElementById("dyslexicVersion").checked;
  button.disabled=true;status.textContent="Préparation du PDF…";
  await new Promise(resolve=>setTimeout(resolve,20));
  try{
    const images=[];
    for(let i=0;i<printableSheets.length;i++){
      status.textContent=`Création de la fiche ${i+1} sur ${printableSheets.length}…`;
      for(const page of renderWorksheetPages(printableSheets[i],i+1,false,dyslexic)){
        images.push(await canvasToJpegBytes(page));
      }
    }
    if(document.getElementById("includeAnswers").checked){
      for(let i=0;i<printableSheets.length;i++){
        status.textContent=`Création du corrigé ${i+1} sur ${printableSheets.length}…`;
        for(const page of renderWorksheetPages(printableSheets[i],i+1,true,dyslexic)){
          images.push(await canvasToJpegBytes(page));
        }
      }
    }
    const pdf=makeImagePdf(images),url=URL.createObjectURL(new Blob([pdf],{type:"application/pdf"}));
    const link=document.createElement("a");
    link.href=url;link.download=`automatismes-${currentLevel}-${printableSheets.length}-fiche${printableSheets.length>1?"s":""}${dyslexic?"-dyslexique":""}.pdf`;
    document.body.appendChild(link);link.click();link.remove();
    setTimeout(()=>URL.revokeObjectURL(url),30000);
    status.textContent=`PDF prêt : ${printableSheets.length} fiche${printableSheets.length>1?"s":""}${dyslexic?" en version dyslexique":""}${document.getElementById("includeAnswers").checked?" avec corrigé":""}.`;
  }catch(error){
    console.error(error);status.textContent="Le PDF n’a pas pu être créé. Réessaie avec moins de fiches.";
  }finally{button.disabled=false}
}

function startQuiz(mode,theme=null,notions=[]){
  currentQuiz=buildMixedLevelRoutine(5,{mode,theme,notions});
  if(!currentQuiz.length)return;
  beginCurrentQuiz();
}
function beginCurrentQuiz(){
  if(!currentQuiz.length)return;
  quizReview=[];index=0;score=0;answered=false;
  document.getElementById("choiceModal").classList.add("hidden");
  document.getElementById("reviewModal").classList.add("hidden");
  showView("training");renderQuestion();
}
function renderQuestion(){
  cancelScheduledNextQuestion();
  const x=currentQuiz[index];
  document.getElementById("questionLevel").textContent=`Niveau ${currentLevel}`;
  document.getElementById("questionCounter").textContent=`Question ${index+1}/${currentQuiz.length}`;
  document.getElementById("progressBar").style.width=`${index/currentQuiz.length*100}%`;
  document.getElementById("questionTheme").textContent=x.theme;
  document.getElementById("questionText").innerHTML=mathPreviewMarkup(x.text);
  renderQuestionVisual(x);
  const answerInput=document.getElementById("answerInput"),hasFigureChoices=Boolean(x.figureChoices);
  answerInput.value="";
  answerInput.classList.toggle("hidden",hasFigureChoices);
  document.querySelector(".math-keypad").classList.toggle("hidden",hasFigureChoices);
  updateMathPreview();
  document.getElementById("feedback").className="feedback hidden";
  document.getElementById("validateAnswer").classList.remove("hidden");
  answered=false;
  setTimeout(()=>hasFigureChoices
    ?document.querySelector(".figure-choice")?.focus()
    :answerInput.focus(),100);
}
function mathPreviewMarkup(value){
  let markup=escapeXml(value.trim());
  markup=markup.replace(/([A-Z])([A-Z])̂([A-Z])/g,'<span class="angle-notation" aria-label="$1$2$3">$1$2$3</span>');
  markup=markup.replace(/(-?[A-Za-zÀ-ÿ0-9π²³𝑥𝑋]+(?:\^[A-Za-z0-9+-]+)?)\/(-?[A-Za-zÀ-ÿ0-9π²³𝑥𝑋]+(?:\^[A-Za-z0-9+-]+)?)/g,'<span class="preview-fraction"><span>$1</span><span>$2</span></span>');
  markup=markup.replace(/\^([+-]?(?:\d+|[A-Za-z]))/g,'<sup class="math-exponent">$1</sup>');
  markup=markup.replace(/²/g,'<sup class="math-exponent">2</sup>').replace(/³/g,'<sup class="math-exponent">3</sup>');
  return wrapMathVariables(markup);
}
function wrapMathVariables(markup){
  return markup.replace(/(^|[^A-Za-zÀ-ÿ])([xX])(?=$|[^A-Za-zÀ-ÿ])/g,(_,prefix,variable)=>`${prefix}<span class="math-variable">${variable==="X"?"𝑋":"𝑥"}</span>`);
}
function stylizedVariableText(value){
  return value.replace(/(^|[^A-Za-zÀ-ÿ])([xX])(?=$|[^A-Za-zÀ-ÿ])/g,(_,prefix,variable)=>prefix+(variable==="X"?"𝑋":"𝑥"));
}
function stylizeAnswerVariables(){
  const input=document.getElementById("answerInput"),start=input.selectionStart??input.value.length,end=input.selectionEnd??start;
  const value=input.value,styled=stylizedVariableText(value);
  if(styled===value)return;
  const styledStart=stylizedVariableText(value.slice(0,start)).length;
  const styledEnd=stylizedVariableText(value.slice(0,end)).length;
  input.value=styled;
  input.setSelectionRange(styledStart,styledEnd);
}
function updateMathPreview(){
  const input=document.getElementById("answerInput"),value=input.value.trim();
  const preview=document.getElementById("mathPreview");
  input.classList.toggle("preview-active",Boolean(value));
  preview.classList.toggle("hidden",!value);
  document.getElementById("mathPreviewValue").innerHTML=value?mathPreviewMarkup(value):"";
}
function normalize(s){return String(s).trim().toLowerCase().replace(/[’‘`´]/g,"'").replace(/[𝑥𝑋]/gu,"x").replace(/[−–—‑‒﹣－]/g,"-").replace(/²/g,"^2").replace(/³/g,"^3").replace(/[×·⋅]/g,"*").replace(/\s/g,"").replace(",",".").replace("°","").replace(/\(/g,"").replace(/\)/g,"").replace("π","pi").replace(/^1\*?pi$/,"pi").replace(/^pi\*?1$/,"pi").replace("q=","").replace("r=",";").replace(/et/g,";")}
function canonicalPrimeProduct(value){
  const expression=normalize(value).replace(/²/g,"^2").replace(/³/g,"^3").replace(/[×·⋅]/g,"*");
  if(!/^\d+(?:\^\d+)?(?:\*\d+(?:\^\d+)?)*$/.test(expression))return null;
  const factors=[];
  for(const term of expression.split("*")){
    const [baseText,exponentText="1"]=term.split("^");
    const base=Number(baseText),exponent=Number(exponentText);
    if(!Number.isInteger(base)||base<2||!Number.isInteger(exponent)||exponent<1||exponent>20)return null;
    for(let i=0;i<exponent;i++)factors.push(base);
  }
  return factors.sort((a,b)=>a-b).join("*");
}
function canonicalFraction(value){
  const match=normalize(value).match(/^(-?\d+)(?:\/(-?\d+))?$/);
  if(!match)return null;
  let numerator=Number(match[1]),denominator=Number(match[2]??1);
  if(!Number.isSafeInteger(numerator)||!Number.isSafeInteger(denominator)||denominator===0)return null;
  if(denominator<0){numerator=-numerator;denominator=-denominator}
  const factor=gcd(numerator,denominator);
  return `${numerator/factor}/${denominator/factor}`;
}
function mathJsExpression(value){
  const expression=String(value).trim().toLowerCase()
    .replace(/[𝑥𝑋]/gu,"x")
    .replace(/[−–—‑‒﹣－]/g,"-")
    .replace(/²/g,"^2")
    .replace(/³/g,"^3")
    .replace(/[×·⋅]/g,"*")
    .replace(",",".")
    .replace(/\s/g,"");
  return expression&&/^[0-9x+\-*/^().]+$/.test(expression)?expression:null;
}
function respectsRequestedMathForm(expression,mode){
  if(mode==="developed")return expression.includes("x")&&!/[()]/.test(expression);
  if(mode==="factorized")return /^[+-]?\d+(?:\.\d+)?\*?\(.+\)$/.test(expression);
  if(mode==="reduced"){
    const compact=expression.replace(/\*/g,"");
    if(/[()]/.test(compact))return false;
    const signed=/^[+-]/.test(compact)?compact:`+${compact}`;
    const terms=signed.match(/[+-][^+-]+/g)||[];
    if(!terms.length||terms.join("")!==signed)return false;
    const types=terms.map(term=>{
      if(/^[+-](?:\d+(?:\.\d+)?)?x\^2$/.test(term))return "quadratic";
      if(/^[+-](?:\d+(?:\.\d+)?)?x$/.test(term))return "linear";
      if(/^[+-]\d+(?:\.\d+)?$/.test(term))return "constant";
      return null;
    });
    return types.every(Boolean)
      &&types.some(type=>type==="quadratic"||type==="linear")
      &&new Set(types).size===types.length;
  }
  return false;
}
function isMathLibraryEquivalent(exercise,userAnswer,expectedAnswers){
  if(!exercise.mathMode||typeof window.math?.symbolicEqual!=="function")return false;
  const userExpression=mathJsExpression(userAnswer);
  if(!userExpression||!respectsRequestedMathForm(userExpression,exercise.mathMode))return false;
  const context=window.math.simplify?.realContext;
  return expectedAnswers.some(expected=>{
    const expectedExpression=mathJsExpression(expected);
    if(!expectedExpression)return false;
    try{
      if(window.math.symbolicEqual(
        userExpression,
        expectedExpression,
        context?{context}:undefined
      ))return true;
      if(typeof window.math.rationalize==="function"){
        return window.math.rationalize(userExpression).toString()
          ===window.math.rationalize(expectedExpression).toString();
      }
      return false;
    }catch{
      return false;
    }
  });
}
function numericMathJsExpression(value){
  const expression=String(value).trim()
    .replace(/[−–—‑‒﹣－]/g,"-")
    .replace(/[×·⋅]/g,"*")
    .replace(",",".")
    .replace(/\s/g,"");
  return expression.length<=80&&/^[0-9+\-*/().]+$/.test(expression)?expression:null;
}
function isEquivalentNumericExpression(exercise,userAnswer,expectedAnswers){
  if(!exercise.allowNumericExpression||typeof window.math?.evaluate!=="function")return false;
  const userExpression=numericMathJsExpression(userAnswer);
  if(!userExpression)return false;
  try{
    const userValue=window.math.evaluate(userExpression);
    if(typeof userValue!=="number"||!Number.isFinite(userValue))return false;
    return expectedAnswers.some(expected=>{
      const expectedExpression=numericMathJsExpression(expected);
      if(!expectedExpression)return false;
      const expectedValue=window.math.evaluate(expectedExpression);
      return typeof expectedValue==="number"
        &&Number.isFinite(expectedValue)
        &&Math.abs(userValue-expectedValue)<1e-12;
    });
  }catch{
    return false;
  }
}
function expressionParity(value){
  let expression=String(value).trim().toLowerCase()
    .replace(/[𝑎-𝑧]/gu,char=>String.fromCharCode(char.codePointAt(0)-0x1d44e+97))
    .replace(/[−–—‑‒﹣－]/g,"-")
    .replace(/[×·⋅]/g,"*")
    .replace(/\s/g,"");
  if(!expression||!/^[0-9a-z+\-*/^().]+$/.test(expression))return null;
  const variables=[...new Set(expression.match(/[a-z]/g)||[])];
  if(variables.length!==1)return null;
  const variable=variables[0];
  if(typeof window.math?.rationalize==="function"){
    try{expression=window.math.rationalize(expression).toString().replace(/\s|\*/g,"")}
    catch{return null}
  }else{
    expression=expression.replace(/\*/g,"");
  }
  const match=expression.match(new RegExp(`^([+-]?\\d*)${variable}([+-]\\d+)?$`));
  if(!match)return null;
  const coefficient=match[1]===""||match[1]==="+"?1:match[1]==="-"?-1:Number(match[1]);
  const constant=Number(match[2]||0);
  if(!Number.isSafeInteger(coefficient)||!Number.isSafeInteger(constant)||Math.abs(coefficient)%2!==0)return null;
  return Math.abs(constant)%2===0?"even":"odd";
}
function validate(){
  if(answered)return;
  const x=currentQuiz[index],rawUser=document.getElementById("answerInput").value,user=normalize(rawUser);
  if(!user)return;
  const rawAcceptable=[x.answer,...x.alts],acceptable=rawAcceptable.map(normalize);
  const canonicalUserProduct=canonicalPrimeProduct(user);
  const canonicalUserFraction=canonicalFraction(user);
  const isEquivalentPrimeProduct=x.notion==="Décomposition en facteurs premiers"
    &&canonicalUserProduct!==null
    &&acceptable.some(answer=>canonicalPrimeProduct(answer)===canonicalUserProduct);
  const isEquivalentFraction=canonicalUserFraction!==null
    &&acceptable.some(answer=>canonicalFraction(answer)===canonicalUserFraction);
  const isEquivalentMathExpression=isMathLibraryEquivalent(x,rawUser,rawAcceptable);
  const isEquivalentNumericCalculation=isEquivalentNumericExpression(x,rawUser,rawAcceptable);
  const hasExpectedParity=Boolean(x.parity)&&expressionParity(rawUser)===x.parity;
  const isCorrect=acceptable.includes(user)||isEquivalentPrimeProduct||isEquivalentFraction||isEquivalentMathExpression||isEquivalentNumericCalculation||hasExpectedParity;
  quizReview[index]={question:x.text,userAnswer:rawUser,expectedAnswer:x.answer,isCorrect};
  answered=true;
  const s=levelState();
  const previousPoints=state.points;
  if(isCorrect){score++;state.points+=10}
  s.questions++; if(isCorrect)s.correct++;
  s.byTheme[x.theme]??={q:0,c:0}; s.byTheme[x.theme].q++; if(isCorrect)s.byTheme[x.theme].c++;
  s.byNotion[x.notion]??={q:0,c:0}; s.byNotion[x.notion].q++; if(isCorrect)s.byNotion[x.notion].c++;
  save();
  showReachedPointsMilestone(previousPoints,state.points);
  const fb=document.getElementById("feedback");
  fb.className=`feedback ${isCorrect?"good":"bad"}`;
  const explanationMarkup=mathPreviewMarkup(x.explanation);
  fb.innerHTML=isCorrect
    ?`✅ Bonne réponse. ${explanationMarkup}`
    :`❌ Réponse attendue : <strong>${mathPreviewMarkup(x.answer)}</strong><br>${explanationMarkup}`;
  document.getElementById("validateAnswer").classList.add("hidden");
  scheduleNextQuestion();
}
function next(){
  if(!answered)return;
  cancelScheduledNextQuestion();
  if(index<4){index++;renderQuestion()}else finishQuiz();
}
function renderQuizReview(){
  document.getElementById("resultReview").innerHTML=quizReview.map((result,questionIndex)=>{
    const statusIcon=result.isCorrect?"✓":"✕";
    const statusLabel=result.isCorrect?"Réponse correcte":"Réponse incorrecte";
    const correctionAnswer=result.isCorrect?result.userAnswer:result.expectedAnswer;
    return `<tr class="${result.isCorrect?"review-correct":"review-incorrect"}">
      <td><span class="review-question-number">${questionIndex+1}.</span> ${mathPreviewMarkup(result.question)}</td>
      <td><span class="review-student-answer"><span class="review-status" role="img" aria-label="${statusLabel}">${statusIcon}</span><span>${mathPreviewMarkup(result.userAnswer)}</span></span></td>
      <td><span class="review-expected-answer">${mathPreviewMarkup(correctionAnswer)}</span></td>
    </tr>`;
  }).join("");
}
function finishQuiz(){
  const s=levelState(); s.sessions++;
  const today=new Date().toISOString().slice(0,10);
  if(!s.dates.includes(today))s.dates.push(today);
  s.history.unshift({date:today,score,level:currentLevel});
  s.history=s.history.slice(0,10);save();
  document.getElementById("finalScore").textContent=`${score} / 5`;
  document.getElementById("resultMessage").textContent=score===5?"Excellent travail !":score>=3?"Bonne routine. Continue régulièrement.":"Certaines notions sont à revoir.";
  renderQuizReview();
  document.getElementById("resultModal").classList.remove("hidden");
}
function successRate(n){let s=levelState().byNotion[n];return s&&s.q?s.c/s.q:0}
function streak(){
  const d=[...levelState().dates].sort().reverse(); if(!d.length)return 0;
  let count=0,cur=new Date();cur.setHours(0,0,0,0);
  for(let x of d){let dt=new Date(x+"T00:00:00"),diff=Math.round((cur-dt)/86400000);if(diff===count)count++;else if(diff>count)break}
  return count;
}
function save(){localStorage.setItem("mathsAutoCycle4",JSON.stringify(state));renderAll()}
function renderAll(){
  document.getElementById("points").textContent=state.points;
  document.getElementById("sidebarStreak").textContent=`${streak()} jour${streak()>1?"s":""}`;
  const rates=Object.values(levelState().byNotion).filter(x=>x.q).map(x=>x.c/x.q);
  const mastered=rates.filter(r=>r>=.8).length,inProg=rates.filter(r=>r>=.5&&r<.8).length,review=rates.filter(r=>r<.5).length;
  const pct=rates.length?Math.round(rates.reduce((a,b)=>a+b,0)/rates.length*100):0;
  document.getElementById("homeRing").style.setProperty("--p",pct);
  document.querySelector("#homeRing span").textContent=pct+"%";
  document.getElementById("masteredCount").textContent=mastered;
  document.getElementById("inProgressCount").textContent=inProg;
  document.getElementById("reviewCount").textContent=review;
}
function renderProgress(){
  const s=levelState();
  document.getElementById("statSessions").textContent=s.sessions;
  document.getElementById("statQuestions").textContent=s.questions;
  document.getElementById("statSuccess").textContent=(s.questions?Math.round(s.correct/s.questions*100):0)+"%";
  document.getElementById("statStreak").textContent=streak();
  document.getElementById("themeProgress").innerHTML=availableThemes().map(t=>{let z=s.byTheme[t]||{q:0,c:0},p=z.q?Math.round(z.c/z.q*100):0;return `<div class="progress-row"><span>${THEMES[t]} ${t}</span><div class="bar"><i style="width:${p}%"></i></div><b>${p}%</b></div>`}).join("");
  document.getElementById("history").innerHTML=s.history.length?s.history.map(h=>`<div class="history-item"><span>${new Date(h.date).toLocaleDateString("fr-FR")} — ${h.level||currentLevel}</span><strong>${h.score}/5</strong></div>`).join(""):"<p class='muted'>Aucune routine terminée pour le moment.</p>";
}
function renderNotions(){
  document.getElementById("notionsList").innerHTML=Object.entries(NOTIONS[currentLevel]).map(([t,list])=>{
    const color=DOMAIN_COLORS[t]||"#4f46e5";
    return `<div class="notion-group" style="--domain-color:${color}"><h3>${THEMES[t]} ${t}</h3><ol>${list.map(x=>`<li>${x}</li>`).join("")}</ol></div>`;
  }).join("");
}
selectLevel(currentLevel);
