
const THEMES = {
  "Nombres et calculs": "🔢",
  "Espace et géométrie": "📐",
  "Données et probabilités": "📊",
  "Proportionnalité et fonctions": "％",

  "Nombres entiers et décimaux": "🔢",
  "Fractions": "◔",
  "Longueurs et aires": "📏",
  "Repérage dans le temps et durées": "🕒",
  "Organisation et gestion de données": "📊",
  "Proportionnalité": "％",
  "Géométrie plane et espace": "📐",
  "Calcul mental": "🧠"
};

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
]},
"4e":{
"Nombres et calculs":[
"Sommes et différences de nombres relatifs","Opposé d’un nombre et somme d’opposés","Tables de multiplication","Multiplier et diviser par 10, 100, 1 000","Multiplications à trou","Multiplication comme addition répétée","Addition et soustraction de fractions","Comparer des fractions","Fraction comme quotient","Fraction d’un nombre","Carrés parfaits de 0 à 12","Puissances simples","Valeur d’expressions numériques","Équations simples","Écriture 3x","Réduction d’expressions littérales","Double, triple, moitié, prédécesseur, successeur et carré","Tester une égalité"
],
"Espace et géométrie":[
"Symétrie centrale d’un point","Placer un nombre relatif sur une droite graduée","Repérer un nombre relatif","Coordonnées dans un repère orthogonal","Reconnaître des solides","Volumes du cube, du pavé, du prisme et du cylindre","Base d’un prisme en perspective","Aires des figures usuelles","Symétrie axiale et demi-tour","Images de figures par transformation","Reconnaître un parallélogramme","Parallélogrammes particuliers","Droites remarquables dans un triangle"
],
"Données et probabilités":[
"Calculer une moyenne","Effectif manquant dans un tableau","Calculer une fréquence simple"
],
"Proportionnalité et fonctions":[
"Calculer un pourcentage simple","Compléter une égalité de pourcentages"
]}
,
"3e":{
"Nombres et calculs":[
"Opérations sur les fractions","Puissance comme multiplication itérée","Multiplication de puissances d’un même nombre","Multiplication de puissances de même exposant","Carrés parfaits de 0 à 12","Décomposition en facteurs premiers","Simplification de fractions","Dénominateur commun","Critères de divisibilité par 2, 3, 5 et 9","Équations simples","Simplification d’expressions littérales","Valeur d’une expression algébrique","Nature d’une expression littérale","Développer et factoriser","Expression d’un nombre pair ou impair","Opposé d’une expression"
],
"Espace et géométrie":[
"Placer un nombre relatif sur une droite graduée","Repérer un nombre relatif","Coordonnées dans un repère orthogonal","Reconnaître des solides","Volume d’une pyramide ou d’un cône","Nature d’une face de pyramide","Patrons de pyramides","Triangle rectangle et cercle circonscrit","Égalité de Pythagore","Droite des milieux","Symétrie axiale, demi-tour et translation"
],
"Données et probabilités":[
"Calculer une moyenne","Déterminer une médiane","Calculer l’étendue d’une série"
],
"Proportionnalité et fonctions":[
"Partager une somme selon un ratio","Partager une masse selon un ratio","Partage proportionnel à des âges","Calculer un pourcentage","Échelle d’une carte","Augmentation ou diminution en pourcentage"
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
]}

};

function rand(a,b){return Math.floor(Math.random()*(b-a+1))+a}
function fmt(n){return String(Math.round(n*1000)/1000).replace(".",",")}
function q(text,answer,explanation,alts=[]){return {text,answer:String(answer),explanation,alts:alts.map(String)}}
function gcd(a,b){while(b){[a,b]=[b,a%b]}return Math.abs(a)}
function simp(n,d){let g=gcd(n,d); return `${n/g}/${d/g}`}
function divis(n){let a=[];if(n%2===0)a.push("2");if(n%5===0)a.push("5");if(n%10===0)a.push("10");return a.length?a.join(","):"aucun"}

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
{theme:"Espace et géométrie", notion:"Triangles particuliers", make:()=>{let kind=["équilatéral","isocèle rectangle","rectangle"][rand(0,2)];let ans=kind==="équilatéral"?"60":kind==="isocèle rectangle"?"45":"90";return q(`Quelle mesure d’angle caractéristique associe-t-on à un triangle ${kind} ?`,ans, kind==="équilatéral"?"Ses trois angles mesurent 60°.":kind==="isocèle rectangle"?"Ses deux angles aigus mesurent 45°.":"Il possède un angle droit de 90°.",[ans+"°"])}},
{theme:"Espace et géométrie", notion:"Reconnaître un solide en perspective", make:()=>{let items=[["6 faces carrées","cube"],["2 bases circulaires et une surface courbe","cylindre"],["6 faces rectangulaires","pavé droit"]];let [desc,ans]=items[rand(0,2)];return q(`Quel solide possède ${desc} ?`,ans,`Il s’agit d’un ${ans}.`)}},
{theme:"Espace et géométrie", notion:"Médiatrice et cercle circonscrit", make:()=>q(`Comment s’appelle la droite perpendiculaire à un segment et passant par son milieu ?`,`médiatrice`,`C’est la médiatrice du segment.`)},
{theme:"Données et probabilités", notion:"Échelle de probabilités", make:()=>{let p=[0,0.25,0.5,0.75,1][rand(0,4)];let ans=p===0?"impossible":p===1?"certain":p===.5?"autant de chances":"possible";return q(`Un événement a une probabilité de ${fmt(p)}. Comment peut-on le qualifier ?`,ans,`0 signifie impossible, 1 certain, et 0,5 autant de chances de se produire que de ne pas se produire.`)}},
{theme:"Données et probabilités", notion:"Écriture d’une probabilité", make:()=>{let total=[4,5,8,10][rand(0,3)],fav=rand(1,total-1);return q(`Une urne contient ${total} boules dont ${fav} rouges. Quelle est la probabilité de tirer une boule rouge ?`,`${fav}/${total}`,`Il y a ${fav} issues favorables sur ${total} issues possibles.`)}},
{theme:"Données et probabilités", notion:"Relier une expression de chance à une probabilité", make:()=>{let items=[["une chance sur quatre","1/4"],["une chance sur deux","1/2"],["trois chances sur quatre","3/4"]];let [txt,ans]=items[rand(0,2)];return q(`Écris sous forme de fraction : « ${txt} ».`,ans,`« ${txt} » correspond à ${ans}.`)}},
{theme:"Proportionnalité et fonctions", notion:"Reconnaître une situation de proportionnalité", make:()=>{let k=rand(2,6),a=rand(2,8),b=a*k;return q(`3 objets coûtent ${3*k} €. ${a} objets coûtent ${b} €. Cette situation est-elle proportionnelle ?`,`oui`,`Le prix par objet est constant : ${k} €.`)}},
{theme:"Proportionnalité et fonctions", notion:"Résoudre un problème de proportionnalité", make:()=>{let k=rand(2,8),a=rand(2,9);return q(`${a} cahiers coûtent ${a*k} €. Combien coûtent ${a+2} cahiers ?`,(a+2)*k,`Un cahier coûte ${k} €, donc ${a+2} cahiers coûtent ${(a+2)*k} €.`)}},
{theme:"Proportionnalité et fonctions", notion:"Calculer un pourcentage", make:()=>{let n=20*rand(2,15),p=[10,20,25,50][rand(0,3)];return q(`Calcule ${p} % de ${n}.`,n*p/100,`${n} × ${p}/100 = ${n*p/100}.`)}}
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
{theme:"Nombres et calculs",notion:"Réduction d’expressions littérales",make:()=>{let a=rand(1,8),b=rand(1,8);return q(`Réduis : ${a}x + ${b}x`,`${a+b}x`,`On additionne les coefficients : ${a}+${b}=${a+b}.`)}},
{theme:"Nombres et calculs",notion:"Double, triple, moitié, prédécesseur, successeur et carré",make:()=>{let n=rand(2,30),types=[["double",2*n],["triple",3*n],["moitié",n/2],["prédécesseur",n-1],["successeur",n+1],["carré",n*n]],z=types[rand(0,5)];if(z[0]==="moitié"&&n%2)n++;return q(`Donne le ${z[0]} de ${n}.`,z[0]==="moitié"?n/2:z[1],`Le ${z[0]} de ${n} vaut ${z[0]==="moitié"?n/2:z[1]}.`)}},
{theme:"Nombres et calculs",notion:"Tester une égalité",make:()=>{let a=rand(1,8),b=rand(1,8),x=rand(1,8),right=a*x+b+(Math.random()<.5?0:rand(1,4));return q(`Pour x = ${x}, l’égalité ${a}x + ${b} = ${right} est-elle vraie ?`,a*x+b===right?"oui":"non",`Le membre de gauche vaut ${a*x+b}.`)}},

{theme:"Espace et géométrie",notion:"Symétrie centrale d’un point",make:()=>{let x=rand(-5,5),y=rand(-5,5);return q(`Le point A(${x};${y}) a pour symétrique A' par rapport à l’origine O. Quelles sont les coordonnées de A' ?`,`${-x};${-y}`,`Une symétrie centrale de centre O change les deux signes.`,[`(${-x};${-y})`,`${-x},${-y}`])}},
{theme:"Espace et géométrie",notion:"Placer un nombre relatif sur une droite graduée",make:()=>{let n=rand(-20,20)/2;return q(`Un point est situé à ${Math.abs(n)} unité(s) ${n>=0?"à droite":"à gauche"} de 0. Quelle est son abscisse ?`,fmt(n),`À droite de 0 l’abscisse est positive ; à gauche elle est négative.`)}},
{theme:"Espace et géométrie",notion:"Coordonnées dans un repère orthogonal",make:()=>{let x=rand(-6,6),y=rand(-6,6);return q(`Un point est à l’abscisse ${x} et à l’ordonnée ${y}. Écris ses coordonnées.`,`${x};${y}`,`On écrit d’abord l’abscisse, puis l’ordonnée.`,[`(${x};${y})`,`${x},${y}`])}},
{theme:"Espace et géométrie",notion:"Reconnaître des solides",make:()=>{let items=[["deux bases circulaires parallèles","cylindre"],["deux bases polygonales identiques et parallèles","prisme droit"],["six faces carrées","cube"],["six faces rectangulaires","pavé droit"]],z=items[rand(0,3)];return q(`Quel solide possède ${z[0]} ?`,z[1],`Il s’agit d’un ${z[1]}.`)}},
{theme:"Espace et géométrie",notion:"Volumes du cube, du pavé, du prisme et du cylindre",make:()=>{let type=rand(0,2);if(type===0){let a=rand(2,8);return q(`Calcule le volume d’un cube d’arête ${a} cm.`,a**3,`V = ${a}³ = ${a**3} cm³.`)}if(type===1){let l=rand(2,9),w=rand(2,8),h=rand(2,7);return q(`Calcule le volume d’un pavé droit de dimensions ${l} cm, ${w} cm et ${h} cm.`,l*w*h,`V = ${l} × ${w} × ${h} = ${l*w*h} cm³.`)}let r=rand(1,5),h=rand(2,10);return q(`Donne l’expression exacte du volume d’un cylindre de rayon ${r} cm et de hauteur ${h} cm.`,`${r*r*h}π`,`V = π × ${r}² × ${h} = ${r*r*h}π cm³.`,[`${r*r*h}pi`])}},
{theme:"Espace et géométrie",notion:"Aires des figures usuelles",make:()=>{let type=rand(0,2);if(type===0){let b=rand(3,12),h=rand(2,10);return q(`Calcule l’aire d’un triangle de base ${b} cm et de hauteur ${h} cm.`,b*h/2,`A = base × hauteur ÷ 2 = ${b*h/2} cm².`)}if(type===1){let l=rand(3,12),w=rand(2,10);return q(`Calcule l’aire d’un rectangle de longueur ${l} cm et de largeur ${w} cm.`,l*w,`A = ${l} × ${w} = ${l*w} cm².`)}let r=rand(1,6);return q(`Donne l’aire exacte d’un disque de rayon ${r} cm.`,`${r*r}π`,`A = π × ${r}² = ${r*r}π cm².`,[`${r*r}pi`])}},
{theme:"Espace et géométrie",notion:"Reconnaître un parallélogramme",make:()=>q(`Quel quadrilatère a ses côtés opposés parallèles deux à deux ?`,`parallélogramme`,`C’est la définition d’un parallélogramme.`)},
{theme:"Espace et géométrie",notion:"Parallélogrammes particuliers",make:()=>{let items=[["quatre angles droits","rectangle"],["quatre côtés de même longueur","losange"],["quatre angles droits et quatre côtés égaux","carré"]],z=items[rand(0,2)];return q(`Quel parallélogramme possède ${z[0]} ?`,z[1],`Il s’agit d’un ${z[1]}.`)}},
{theme:"Espace et géométrie",notion:"Droites remarquables dans un triangle",make:()=>{let items=[["passe par un sommet et le milieu du côté opposé","médiane"],["est perpendiculaire à un côté et passe par le sommet opposé","hauteur"],["est perpendiculaire à un côté et passe par son milieu","médiatrice"]],z=items[rand(0,2)];return q(`Comment s’appelle la droite qui ${z[0]} ?`,z[1],`C’est une ${z[1]}.`)}},

{theme:"Données et probabilités",notion:"Calculer une moyenne",make:()=>{let a=rand(5,18),b=rand(5,18),c=rand(5,18);return q(`Calcule la moyenne de ${a}, ${b} et ${c}.`,fmt((a+b+c)/3),`(${a}+${b}+${c}) ÷ 3 = ${fmt((a+b+c)/3)}.`)}},
{theme:"Données et probabilités",notion:"Effectif manquant dans un tableau",make:()=>{let total=rand(20,50),a=rand(5,12),b=rand(5,12);while(a+b>=total)b=rand(3,8);return q(`Un groupe compte ${total} élèves. ${a} ont choisi A et ${b} ont choisi B. Combien ont choisi C ?`,total-a-b,`${total} − ${a} − ${b} = ${total-a-b}.`)}},
{theme:"Données et probabilités",notion:"Calculer une fréquence simple",make:()=>{let total=[20,25,40,50][rand(0,3)],fav=rand(1,total-1);return q(`Dans un groupe de ${total} élèves, ${fav} ont choisi l’option A. Donne la fréquence sous forme de fraction.`,`${fav}/${total}`,`La fréquence est effectif de A ÷ effectif total.`)}},

{theme:"Proportionnalité et fonctions",notion:"Calculer un pourcentage simple",make:()=>{let p=[1,10,20,25,50][rand(0,4)],n=p===1?100*rand(1,9):20*rand(2,15);return q(`Calcule ${p} % de ${n}.`,n*p/100,`${n} × ${p}/100 = ${n*p/100}.`)}},
{theme:"Proportionnalité et fonctions",notion:"Compléter une égalité de pourcentages",make:()=>{let p=[10,20,25,50][rand(0,3)],n=[40,60,80,100,120,200][rand(0,5)];return q(`Complète : ${p} % de ${n} = …`,n*p/100,`${p}/100 × ${n} = ${n*p/100}.`)}}
];


const G3 = [
{theme:"Nombres et calculs",notion:"Opérations sur les fractions",make:()=>{let d1=[2,3,4,5,6][rand(0,4)],d2=[2,3,4,5,6][rand(0,4)],a=rand(1,d1-1),b=rand(1,d2-1),op=["+","−","×","÷"][rand(0,3)],n,d;if(op==="+"){n=a*d2+b*d1;d=d1*d2}else if(op==="−"){n=a*d2-b*d1;d=d1*d2}else if(op==="×"){n=a*b;d=d1*d2}else{n=a*d2;d=d1*b}return q(`Calcule et simplifie : ${a}/${d1} ${op} ${b}/${d2}`,simp(n,d),`On applique la règle de calcul adaptée puis on simplifie.`)}},
{theme:"Nombres et calculs",notion:"Puissance comme multiplication itérée",make:()=>{let a=[2,3,4,5][rand(0,3)],e=rand(2,5);return q(`Écris ${a} × ${Array(e-1).fill(a).join(" × ")} sous forme d’une puissance.`,`${a}^${e}`,`Le facteur ${a} apparaît ${e} fois.`)}},
{theme:"Nombres et calculs",notion:"Multiplication de puissances d’un même nombre",make:()=>{let a=[2,3,5][rand(0,2)],m=rand(1,5),n=rand(1,5);return q(`Simplifie : ${a}^${m} × ${a}^${n}`,`${a}^${m+n}`,`On additionne les exposants : ${m}+${n}=${m+n}.`)}},
{theme:"Nombres et calculs",notion:"Multiplication de puissances de même exposant",make:()=>{let a=rand(2,6),b=rand(2,6),n=rand(2,4);return q(`Simplifie : ${a}^${n} × ${b}^${n}`,`${a*b}^${n}`,`a^n × b^n = (ab)^n.`)}},
{theme:"Nombres et calculs",notion:"Carrés parfaits de 0 à 12",make:()=>{let a=rand(0,12);return q(`Calcule ${a}².`,a*a,`${a}² = ${a} × ${a} = ${a*a}.`)}},
{theme:"Nombres et calculs",notion:"Décomposition en facteurs premiers",make:()=>{let p=[2,3,5][rand(0,2)],qv=[2,3,5,7][rand(0,3)],r=[2,3,5][rand(0,2)],n=p*qv*r;return q(`Décompose ${n} en produit de facteurs premiers.`,primeFactorString(n),`${n} = ${primeFactorString(n)}.`)}},
{theme:"Nombres et calculs",notion:"Simplification de fractions",make:()=>{let a=rand(2,12),b=rand(2,12),k=rand(2,6);return q(`Simplifie la fraction ${a*k}/${b*k}.`,simp(a*k,b*k),`On divise le numérateur et le dénominateur par leur plus grand diviseur commun.`)}},
{theme:"Nombres et calculs",notion:"Dénominateur commun",make:()=>{let d1=[2,3,4,5,6][rand(0,4)],d2=[2,3,4,5,6][rand(0,4)];return q(`Donne un dénominateur commun possible à ${1}/${d1} et ${1}/${d2}.`,lcm(d1,d2),`Le plus petit dénominateur commun est ${lcm(d1,d2)}.`)}},
{theme:"Nombres et calculs",notion:"Critères de divisibilité par 2, 3, 5 et 9",make:()=>{let n=rand(100,999);return q(`Parmi 2, 3, 5 et 9, indique tous les diviseurs de ${n}.`,divis2359(n),`On applique les critères de divisibilité.`)}},
{theme:"Nombres et calculs",notion:"Équations simples",make:()=>{let type=rand(0,2),x=rand(-9,15),a=rand(2,9),b=rand(-8,8);if(type===0)return q(`Résous : ${a}x = ${a*x}`,x,`On divise les deux membres par ${a}.`);if(type===1)return q(`Résous : x + ${b} = ${x+b}`,x,`On soustrait ${b} aux deux membres.`);return q(`Résous : ${a}x + ${b} = ${a*x+b}`,x,`On isole d’abord ${a}x, puis on divise par ${a}.`)}},
{theme:"Nombres et calculs",notion:"Simplification d’expressions littérales",make:()=>{let a=rand(1,8),b=rand(1,8),c=rand(1,8);return q(`Réduis : ${a}x + ${b}x − ${c}`,`${a+b}x-${c}`,`On regroupe les termes en x : ${a}+${b}=${a+b}.`,[`${a+b}x − ${c}`])}},
{theme:"Nombres et calculs",notion:"Valeur d’une expression algébrique",make:()=>{let a=rand(1,6),b=rand(-6,6),x=rand(-4,6);return q(`Calcule ${a}x + ${b} pour x = ${x}.`,a*x+b,`${a} × ${x} + ${b} = ${a*x+b}.`)}},
{theme:"Nombres et calculs",notion:"Nature d’une expression littérale",make:()=>{let items=[["3x + 2","somme"],["5(x + 4)","produit"],["7x − 1","différence"]],z=items[rand(0,2)];return q(`Quelle est la nature de l’expression ${z[0]} ?`,z[1],`L’opération principale est une ${z[1]}.`)}},
{theme:"Nombres et calculs",notion:"Développer et factoriser",make:()=>{if(Math.random()<.5){let a=rand(2,7),b=rand(1,9);return q(`Développe : ${a}(x + ${b})`,`${a}x+${a*b}`,`${a}(x+${b})=${a}x+${a*b}.`,[`${a}x + ${a*b}`])}let a=rand(2,7),b=rand(1,9);return q(`Factorise : ${a}x + ${a*b}`,`${a}(x+${b})`,`On met ${a} en facteur.`,[`${a}(x + ${b})`])}},
{theme:"Nombres et calculs",notion:"Expression d’un nombre pair ou impair",make:()=>{let even=Math.random()<.5;return q(`Donne une expression littérale d’un nombre ${even?"pair":"impair"}.`,even?"2n":"2n+1",even?"Tout nombre pair s’écrit 2n.":"Tout nombre impair s’écrit 2n+1.",even?["2×n"]:["2n + 1"])}},
{theme:"Nombres et calculs",notion:"Opposé d’une expression",make:()=>{let a=rand(1,9),b=rand(1,9);return q(`Donne l’opposé de ${a} − ${b}x.`,`${-a}+${b}x`,`On change le signe de chaque terme.`,[`${b}x-${a}`,`${b}x − ${a}`])}},

{theme:"Espace et géométrie",notion:"Placer un nombre relatif sur une droite graduée",make:()=>{let n=rand(-20,20)/2;return q(`Un point est situé à ${Math.abs(n)} unité(s) ${n>=0?"à droite":"à gauche"} de 0. Quelle est son abscisse ?`,fmt(n),`À droite de 0 l’abscisse est positive ; à gauche elle est négative.`)}},
{theme:"Espace et géométrie",notion:"Coordonnées dans un repère orthogonal",make:()=>{let x=rand(-6,6),y=rand(-6,6);return q(`Un point a pour abscisse ${x} et pour ordonnée ${y}. Écris ses coordonnées.`,`${x};${y}`,`On écrit d’abord l’abscisse, puis l’ordonnée.`,[`(${x};${y})`,`${x},${y}`])}},
{theme:"Espace et géométrie",notion:"Reconnaître des solides",make:()=>{let items=[["une base polygonale et des faces triangulaires","pyramide"],["une base circulaire et un sommet","cône"],["deux bases circulaires parallèles","cylindre"],["deux bases polygonales identiques","prisme droit"]],z=items[rand(0,3)];return q(`Quel solide possède ${z[0]} ?`,z[1],`Il s’agit d’un ${z[1]}.`)}},
{theme:"Espace et géométrie",notion:"Volume d’une pyramide ou d’un cône",make:()=>{let base=rand(12,60),h=rand(3,12);return q(`Une pyramide a une aire de base de ${base} cm² et une hauteur de ${h} cm. Calcule son volume.`,base*h/3,`V = aire de base × hauteur ÷ 3 = ${base*h/3} cm³.`)}},
{theme:"Espace et géométrie",notion:"Nature d’une face de pyramide",make:()=>q(`Quelle est la nature d’une face latérale d’une pyramide ?`,`triangle`,`Les faces latérales d’une pyramide sont des triangles.`)},
{theme:"Espace et géométrie",notion:"Triangle rectangle et cercle circonscrit",make:()=>q(`Dans un triangle rectangle, où se situe le centre du cercle circonscrit ?`,`milieu de l’hypoténuse`,`Dans un triangle rectangle, le centre du cercle circonscrit est le milieu de l’hypoténuse.`)},
{theme:"Espace et géométrie",notion:"Égalité de Pythagore",make:()=>{let a=rand(3,8),b=rand(a+1,12);return q(`Dans le triangle ABC rectangle en A, écris l’égalité de Pythagore.`,`BC²=AB²+AC²`,`L’hypoténuse est [BC].`,["BC^2=AB^2+AC^2"])}},
{theme:"Espace et géométrie",notion:"Droite des milieux",make:()=>q(`Dans un triangle, que peut-on dire du segment joignant les milieux de deux côtés ?`,`il est parallèle au troisième côté`,`La droite des milieux est parallèle au troisième côté et le segment mesure la moitié de ce côté.`)},
{theme:"Espace et géométrie",notion:"Symétrie axiale, demi-tour et translation",make:()=>{let items=[["symétrie axiale","une droite"],["demi-tour","un point"],["translation","un vecteur"]],z=items[rand(0,2)];return q(`Quel élément définit une ${z[0]} ?`,z[1],`Une ${z[0]} est définie par ${z[1]}.`)}},

{theme:"Données et probabilités",notion:"Calculer une moyenne",make:()=>{let a=rand(5,18),b=rand(5,18),c=rand(5,18),d=rand(5,18);return q(`Calcule la moyenne de ${a}, ${b}, ${c} et ${d}.`,fmt((a+b+c+d)/4),`On additionne les quatre valeurs puis on divise par 4.`)}},
{theme:"Données et probabilités",notion:"Déterminer une médiane",make:()=>{let vals=[rand(1,6),rand(7,12),rand(13,18),rand(19,24),rand(25,30)];return q(`Donne la médiane de la série : ${vals.join(" ; ")}.`,vals[2],`La série comporte 5 valeurs ordonnées : la médiane est la 3e.`)}},
{theme:"Données et probabilités",notion:"Calculer l’étendue d’une série",make:()=>{let min=rand(1,10),max=rand(15,35);return q(`Une série a pour minimum ${min} et pour maximum ${max}. Quelle est son étendue ?`,max-min,`Étendue = maximum − minimum = ${max-min}.`)}},

{theme:"Proportionnalité et fonctions",notion:"Partager une somme selon un ratio",make:()=>{let a=rand(1,5),b=rand(1,5),u=rand(5,20),total=(a+b)*u;return q(`Partage ${total} € selon le ratio ${a}:${b}. Donne les deux parts.`,`${a*u};${b*u}`,`Il y a ${a+b} parts égales, chacune vaut ${u} €.`,[`${a*u},${b*u}`])}},
{theme:"Proportionnalité et fonctions",notion:"Partager une masse selon un ratio",make:()=>{let a=rand(1,4),b=rand(1,4),c=rand(1,4),u=rand(2,10),total=(a+b+c)*u;return q(`Partage ${total} kg selon le ratio ${a}:${b}:${c}.`,`${a*u};${b*u};${c*u}`,`Il y a ${a+b+c} parts égales de ${u} kg.`,[`${a*u},${b*u},${c*u}`])}},
{theme:"Proportionnalité et fonctions",notion:"Partage proportionnel à des âges",make:()=>{let total=rand(3,10)*50;return q(`Deux personnes âgées de 20 ans et 30 ans se partagent ${total} € proportionnellement à leur âge. Donne leurs parts.`,`${total*2/5};${total*3/5}`,`Le ratio est 20:30 = 2:3.`,[`${total*2/5},${total*3/5}`])}},
{theme:"Proportionnalité et fonctions",notion:"Calculer un pourcentage",make:()=>{let p=[10,20,25,30,40,50][rand(0,5)],n=20*rand(2,20);return q(`Calcule ${p} % de ${n}.`,n*p/100,`${n} × ${p}/100 = ${n*p/100}.`)}},
{theme:"Proportionnalité et fonctions",notion:"Échelle d’une carte",make:()=>{let scale=[10000,25000,50000][rand(0,2)],cm=rand(2,12),m=cm*scale,km=m/100000;return q(`Sur une carte à l’échelle 1:${scale}, deux villes sont distantes de ${cm} cm. Quelle est la distance réelle en km ?`,fmt(km),`${cm} × ${scale} cm = ${fmt(km)} km.`)}},
{theme:"Proportionnalité et fonctions",notion:"Augmentation ou diminution en pourcentage",make:()=>{let n=rand(50,300),p=[10,20,25][rand(0,2)],up=Math.random()<.5,ans=up?n*(1+p/100):n*(1-p/100);return q(`Une valeur de ${n} ${up?"augmente":"diminue"} de ${p} %. Quelle est la nouvelle valeur ?`,fmt(ans),`On multiplie par ${up?1+p/100:1-p/100}.`)}}
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

{theme:"Longueurs et aires",notion:"Unités de longueur",make:()=>{let items=[["1 km","1000 m"],["1 m","100 cm"],["1 cm","10 mm"],["1 dm","10 cm"]],z=items[rand(0,3)];return q(`Complète : ${z[0]} = …`,z[1],`C’est une relation entre unités usuelles.`)}},
{theme:"Longueurs et aires",notion:"Convertir des longueurs",make:()=>{let n=rand(1,30),type=rand(0,2);if(type===0)return q(`Convertis ${n} m en cm.`,n*100,`1 m = 100 cm.`);if(type===1)return q(`Convertis ${n} cm en mm.`,n*10,`1 cm = 10 mm.`);return q(`Convertis ${n} km en m.`,n*1000,`1 km = 1 000 m.`)}},
{theme:"Longueurs et aires",notion:"Périmètre du carré et du rectangle",make:()=>{if(Math.random()<.5){let c=rand(2,15);return q(`Calcule le périmètre d’un carré de côté ${c} cm.`,4*c,`P = 4 × ${c} = ${4*c} cm.`)}let l=rand(3,15),w=rand(2,10);return q(`Calcule le périmètre d’un rectangle de longueur ${l} cm et de largeur ${w} cm.`,2*(l+w),`P = 2 × (${l}+${w}) = ${2*(l+w)} cm.`)}},
{theme:"Longueurs et aires",notion:"Comparer des aires",make:()=>{let a=rand(2,10),b=rand(2,10),c=rand(2,10),d=rand(2,10);while(a*b===c*d)d=rand(2,10);return q(`Quel rectangle a la plus grande aire : A (${a}×${b}) ou B (${c}×${d}) ?`,a*b>c*d?"A":"B",`Aire A = ${a*b}, aire B = ${c*d}.`)}},
{theme:"Longueurs et aires",notion:"Unités d’aire",make:()=>q(`Combien de cm² y a-t-il dans 1 dm² ?`,100,`1 dm = 10 cm, donc 1 dm² = 10 × 10 = 100 cm².`)},
{theme:"Longueurs et aires",notion:"Calculer une aire sur quadrillage",make:()=>{let l=rand(2,10),w=rand(2,10);return q(`Un rectangle occupe ${l} carreaux de longueur et ${w} carreaux de largeur. Quelle est son aire en carreaux ?`,l*w,`${l} × ${w} = ${l*w}.`)}},

{theme:"Repérage dans le temps et durées",notion:"Lire l’heure",make:()=>{let h=rand(1,12),m=[0,15,30,45][rand(0,3)];return q(`Une horloge indique ${h} h ${String(m).padStart(2,"0")}. Combien de minutes se sont écoulées depuis ${h} h ?`,m,`${m} minute(s) se sont écoulées.`)}},
{theme:"Repérage dans le temps et durées",notion:"Unités de durée",make:()=>{let items=[["1 heure","60 minutes"],["1 minute","60 secondes"],["1 jour","24 heures"],["1 semaine","7 jours"]],z=items[rand(0,3)];return q(`Complète : ${z[0]} = …`,z[1],`C’est une relation entre unités de durée.`)}},
{theme:"Repérage dans le temps et durées",notion:"Années bissextiles, siècles et millénaires",make:()=>{let type=rand(0,2);if(type===0)return q(`Combien d’années compte un siècle ?`,100,`Un siècle compte 100 ans.`);if(type===1)return q(`Combien d’années compte un millénaire ?`,1000,`Un millénaire compte 1 000 ans.`);return q(`Combien de jours compte une année bissextile ?`,366,`Une année bissextile compte 366 jours.`)}},
{theme:"Repérage dans le temps et durées",notion:"Relations entre fractions d’heure",make:()=>{let items=[["une demi-heure",30],["un quart d’heure",15],["trois quarts d’heure",45]],z=items[rand(0,2)];return q(`Combien de minutes représente ${z[0]} ?`,z[1],`${z[0]} représente ${z[1]} minutes.`)}},

{theme:"Organisation et gestion de données",notion:"Lire un tableau",make:()=>{let a=rand(5,20),b=rand(5,20);return q(`Dans un tableau, la catégorie A compte ${a} élèves et la catégorie B ${b}. Quel est l’effectif total ?`,a+b,`${a}+${b}=${a+b}.`)}},
{theme:"Organisation et gestion de données",notion:"Lire un diagramme en barres",make:()=>{let a=rand(3,15),b=rand(3,15);return q(`Une barre représente ${a} élèves et une autre ${b}. Quel est l’écart entre les deux effectifs ?`,Math.abs(a-b),`On calcule la différence : ${Math.abs(a-b)}.`)}},

{theme:"Proportionnalité",notion:"Repérer des relations multiplicatives simples",make:()=>{let a=rand(2,9),k=rand(2,6);return q(`Par quel nombre faut-il multiplier ${a} pour obtenir ${a*k} ?`,k,`${a} × ${k} = ${a*k}.`)}},
{theme:"Proportionnalité",notion:"Comprendre les expressions fois plus ou fois moins",make:()=>{let n=rand(3,20),k=rand(2,5),up=Math.random()<.5;return q(`Quel nombre est ${k} fois ${up?"plus grand":"plus petit"} que ${n*k}?`,up?n*k*k:n,up?`On multiplie ${n*k} par ${k}.`:`On divise ${n*k} par ${k}.`)}},

{theme:"Géométrie plane et espace",notion:"Reconnaître un carré, un rectangle et un triangle",make:()=>{let items=[["4 côtés égaux et 4 angles droits","carré"],["4 angles droits","rectangle"],["3 côtés","triangle"]],z=items[rand(0,2)];return q(`Quelle figure possède ${z[0]} ?`,z[1],`Il s’agit d’un ${z[1]}.`)}},
{theme:"Géométrie plane et espace",notion:"Axes de symétrie",make:()=>{let items=[["carré",4],["rectangle",2],["triangle équilatéral",3],["cercle","une infinité"]],z=items[rand(0,3)];return q(`Combien d’axes de symétrie possède un ${z[0]} ?`,z[1],`Un ${z[0]} possède ${z[1]} axe(s) de symétrie.`)}},
{theme:"Géométrie plane et espace",notion:"Reconnaître des solides usuels",make:()=>{let items=[["6 faces carrées","cube"],["2 bases circulaires et une surface courbe","cylindre"],["une base circulaire et un sommet","cône"],["une surface entièrement courbe","boule"]],z=items[rand(0,3)];return q(`Quel solide possède ${z[0]} ?`,z[1],`Il s’agit d’un ${z[1]}.`)}},

{theme:"Calcul mental",notion:"Ajouter ou soustraire un entier à un décimal",make:()=>{let a=rand(10,150)/10,b=rand(1,20),op=Math.random()<.5?"+":"−";return q(`Calcule mentalement : ${fmt(a)} ${op} ${b}`,fmt(op==="+"?a+b:a-b),`On agit sur la partie entière du nombre décimal.`)}},
{theme:"Calcul mental",notion:"Tables de multiplication",make:()=>{let a=rand(2,12),b=rand(2,12);return q(`Calcule : ${a} × ${b}`,a*b,`${a} × ${b} = ${a*b}.`)}},
{theme:"Calcul mental",notion:"Doubles et moitiés",make:()=>{let n=2*rand(2,50),double=Math.random()<.5;return q(`Calcule ${double?"le double":"la moitié"} de ${n}.`,double?2*n:n/2,double?`${n} × 2 = ${2*n}.`:`${n} ÷ 2 = ${n/2}.`)}},
{theme:"Calcul mental",notion:"Somme de plusieurs nombres",make:()=>{let a=rand(5,40),b=rand(5,40),c=rand(5,40);return q(`Calcule mentalement : ${a} + ${b} + ${c}`,a+b+c,`On peut regrouper les nombres de façon pratique.`)}},
{theme:"Calcul mental",notion:"Ordre de grandeur",make:()=>{let a=rand(41,99),b=rand(41,99);return q(`Donne un ordre de grandeur de ${a} + ${b}, à la dizaine près.`,Math.round(a/10)*10+Math.round(b/10)*10,`On arrondit chaque nombre à la dizaine la plus proche.`)}},
{theme:"Calcul mental",notion:"Produit simple",make:()=>{let a=[25,50,100][rand(0,2)],b=rand(2,12);return q(`Calcule mentalement : ${a} × ${b}`,a*b,`On utilise une décomposition simple.`)}}
];

const GENERATORS = {"6e":G6,"5e":G5,"4e":G4,"3e":G3};

let state = JSON.parse(localStorage.getItem("mathsAutoCycle4")||'{"selectedLevel":"5e","points":0,"levels":{"6e":{"sessions":0,"questions":0,"correct":0,"history":[],"byTheme":{},"byNotion":{},"dates":[]},"5e":{"sessions":0,"questions":0,"correct":0,"history":[],"byTheme":{},"byNotion":{},"dates":[]},"4e":{"sessions":0,"questions":0,"correct":0,"history":[],"byTheme":{},"byNotion":{},"dates":[]},"3e":{"sessions":0,"questions":0,"correct":0,"history":[],"byTheme":{},"byNotion":{},"dates":[]}}}');
if(!state.levels){
  const old={sessions:state.sessions||0,questions:state.questions||0,correct:state.correct||0,history:state.history||[],byTheme:state.byTheme||{},byNotion:state.byNotion||{},dates:state.dates||[]};
  state={selectedLevel:"5e",points:state.points||0,levels:{"6e":{sessions:0,questions:0,correct:0,history:[],byTheme:{},byNotion:{},dates:[]},"5e":old,"4e":{sessions:0,questions:0,correct:0,history:[],byTheme:{},byNotion:{},dates:[]},"3e":{sessions:0,questions:0,correct:0,history:[],byTheme:{},byNotion:{},dates:[]}}};
}
if(!state.levels["6e"]) state.levels["6e"]={sessions:0,questions:0,correct:0,history:[],byTheme:{},byNotion:{},dates:[]};
if(!state.levels["3e"]) state.levels["3e"]={sessions:0,questions:0,correct:0,history:[],byTheme:{},byNotion:{},dates:[]};
let currentLevel=state.selectedLevel||"5e";
let currentQuiz=[],index=0,score=0,answered=false;

function levelState(){return state.levels[currentLevel]}
document.querySelectorAll(".nav-btn").forEach(b=>b.onclick=()=>showView(b.dataset.view));
document.querySelectorAll(".level-btn").forEach(b=>b.onclick=()=>selectLevel(b.dataset.level));

function selectLevel(level){
  currentLevel=level; state.selectedLevel=level; save();
  document.querySelectorAll(".level-btn").forEach(b=>b.classList.toggle("selected",b.dataset.level===level));
  document.getElementById("currentLevelLabel").textContent=level;
  document.getElementById("notionsLevelLabel").textContent=level;
  makeThemeButtons(); renderNotions(); renderAll();
}
function showView(id){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.view===id));
  if(id==="progress") renderProgress();
}
function availableThemes(){
  return Object.keys(NOTIONS[currentLevel]).filter(t=>GENERATORS[currentLevel].some(g=>g.theme===t));
}
function makeThemeButtons(){
  const html=availableThemes().map(t=>`<button class="theme-chip" data-theme="${t}">${THEMES[t]} ${t}</button>`).join("");
  document.getElementById("homeThemes").innerHTML=html;
  document.getElementById("modalThemes").innerHTML=html;
  document.querySelectorAll("[data-theme]").forEach(b=>b.onclick=()=>startQuiz("theme",b.dataset.theme));
}
document.getElementById("startRandom").onclick=()=>startQuiz("random");
document.getElementById("startReview").onclick=()=>startQuiz("review");
document.getElementById("openThemes").onclick=()=>document.getElementById("themeModal").classList.remove("hidden");
document.getElementById("closeModal").onclick=()=>document.getElementById("themeModal").classList.add("hidden");
document.getElementById("quitQuiz").onclick=()=>showView("home");
document.getElementById("returnHome").onclick=()=>{document.getElementById("resultModal").classList.add("hidden");showView("home");renderAll()};
document.getElementById("validateAnswer").onclick=validate;
document.getElementById("nextQuestion").onclick=next;
document.getElementById("answerInput").addEventListener("keydown",e=>{if(e.key==="Enter"){answered?next():validate()}});

function startQuiz(mode,theme){
  let pool=[...GENERATORS[currentLevel]];
  if(mode==="theme") pool=pool.filter(g=>g.theme===theme);
  if(mode==="review"){
    pool.sort((a,b)=>(successRate(a.notion)-successRate(b.notion)));
    pool=pool.slice(0,Math.max(8,Math.floor(pool.length/2)));
  }
  currentQuiz=[];
  for(let i=0;i<5;i++){
    if(!pool.length) pool=[...GENERATORS[currentLevel]];
    const pick=pool.splice(rand(0,pool.length-1),1)[0];
    currentQuiz.push({...pick.make(),theme:pick.theme,notion:pick.notion});
  }
  index=0;score=0;answered=false;
  document.getElementById("themeModal").classList.add("hidden");
  showView("training");renderQuestion();
}
function renderQuestion(){
  const x=currentQuiz[index];
  document.getElementById("questionCounter").textContent=`Question ${index+1} sur 5 — niveau ${currentLevel}`;
  document.getElementById("progressBar").style.width=`${index*20}%`;
  document.getElementById("questionTheme").textContent=x.theme;
  document.getElementById("questionNotion").textContent=x.notion;
  document.getElementById("questionText").textContent=x.text;
  document.getElementById("answerInput").value="";
  document.getElementById("feedback").className="feedback hidden";
  document.getElementById("validateAnswer").classList.remove("hidden");
  document.getElementById("nextQuestion").classList.add("hidden");
  document.getElementById("nextQuestion").textContent=index===4?"Voir le résultat":"Question suivante";
  answered=false;
  setTimeout(()=>document.getElementById("answerInput").focus(),100);
}
function normalize(s){return String(s).trim().toLowerCase().replace(/\s/g,"").replace(",",".").replace("°","").replace(/\(/g,"").replace(/\)/g,"").replace("π","pi").replace("q=","").replace("r=",";").replace(/et/g,";")}
function validate(){
  if(answered)return;
  const x=currentQuiz[index], user=normalize(document.getElementById("answerInput").value);
  if(!user)return;
  const acceptable=[x.answer,...x.alts].map(normalize);
  const isCorrect=acceptable.includes(user);
  answered=true;
  const s=levelState();
  if(isCorrect){score++;state.points+=10}
  s.questions++; if(isCorrect)s.correct++;
  s.byTheme[x.theme]??={q:0,c:0}; s.byTheme[x.theme].q++; if(isCorrect)s.byTheme[x.theme].c++;
  s.byNotion[x.notion]??={q:0,c:0}; s.byNotion[x.notion].q++; if(isCorrect)s.byNotion[x.notion].c++;
  save();
  const fb=document.getElementById("feedback");
  fb.className=`feedback ${isCorrect?"good":"bad"}`;
  fb.innerHTML=isCorrect?`✅ Bonne réponse. ${x.explanation}`:`❌ Réponse attendue : <strong>${x.answer}</strong><br>${x.explanation}`;
  document.getElementById("validateAnswer").classList.add("hidden");
  document.getElementById("nextQuestion").classList.remove("hidden");
}
function next(){if(!answered)return;if(index<4){index++;renderQuestion()}else finishQuiz()}
function finishQuiz(){
  const s=levelState(); s.sessions++;
  const today=new Date().toISOString().slice(0,10);
  if(!s.dates.includes(today))s.dates.push(today);
  s.history.unshift({date:today,score,level:currentLevel});
  s.history=s.history.slice(0,10);save();
  document.getElementById("finalScore").textContent=`${score} / 5`;
  document.getElementById("resultMessage").textContent=score===5?"Excellent travail !":score>=3?"Bonne routine. Continue régulièrement.":"Certaines notions sont à revoir.";
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
  document.getElementById("notionsList").innerHTML=Object.entries(NOTIONS[currentLevel]).map(([t,list])=>`<div class="notion-group"><h3>${THEMES[t]} ${t}</h3><ol>${list.map(x=>`<li>${x}</li>`).join("")}</ol></div>`).join("");
}
selectLevel(currentLevel);
