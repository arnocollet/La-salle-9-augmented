(function(){
  const $=selector=>document.querySelector(selector);
  let current=null, exerciseIndex=0;
  const randomInt=(min,max)=>Math.floor(Math.random()*(max-min+1))+min;
  const digits=(value,min,max)=>String(Math.max(min,Math.min(max,Number.parseInt(value,10)||min)));
  const makeDivision=(dividendDigits=3,divisorDigits=1)=>{
    const divisor=divisorDigits===1?randomInt(2,9):randomInt(12,98);
    const min=10**(dividendDigits-1),max=10**dividendDigits-1;
    let dividend=randomInt(min,max);
    if(dividend<divisor)dividend+=divisor;
    return {dividend,divisor};
  };
  const stepsFor=({dividend,divisor})=>{
    const steps=[];let partial=0,started=false;
    for(const digit of String(dividend)){
      partial=partial*10+Number(digit);
      if(partial<divisor&&!started){steps.push({partial,quotient:0,product:0,remainder:partial,leading:true});continue;}
      started=true;const quotient=Math.floor(partial/divisor),product=quotient*divisor;
      steps.push({partial,quotient,product,remainder:partial-product,leading:false});partial=partial-product;
    }
    return steps.filter((step,index)=>!step.leading||index===steps.length-1);
  };
  const render=()=>{
    const steps=stepsFor(current);const display=$('#divisionDisplay');
    $('#operationLabel').textContent=`${current.dividend} : ${current.divisor}`;$('#exerciseNumber').textContent=`Exercice ${exerciseIndex}`;
    display.innerHTML=`<div class="division-head"><span>${current.dividend}</span><span class="divisor">${current.divisor}<span class="quotient-line"></span></span></div><div class="division-steps">${steps.map((step,index)=>`<div class="division-step" data-index="${index}"><span class="partial">${step.partial}</span><span>→</span><input class="quotient-input" inputmode="numeric" maxlength="2" aria-label="Quotient de l’étape ${index+1}"><span class="label">produit</span><input class="product-input" inputmode="numeric" maxlength="4" aria-label="Produit de l’étape ${index+1}"><span class="label">reste</span><input class="remainder-input" inputmode="numeric" maxlength="3" aria-label="Reste de l’étape ${index+1}"></div>`).join('')}</div>`;
    $('#feedback').hidden=true;$('#feedback').className='feedback';
    display.querySelector('.quotient-input')?.focus();
  };
  const readNumber=input=>Number.parseInt(input.value,10);
  const correct=()=>{
    const steps=stepsFor(current);let good=true;
    document.querySelectorAll('.division-step').forEach((row,index)=>{const expected=steps[index],values=[readNumber(row.querySelector('.quotient-input')),readNumber(row.querySelector('.product-input')),readNumber(row.querySelector('.remainder-input'))];const ok=values[0]===expected.quotient&&values[1]===expected.product&&values[2]===expected.remainder;row.classList.toggle('correct',ok);row.classList.toggle('incorrect',!ok);good=good&&ok;});
    const final=steps.at(-1);const feedback=$('#feedback');feedback.hidden=false;feedback.className=`feedback ${good?'good':'bad'}`;feedback.textContent=good?`Bravo ! ${current.dividend} = ${current.divisor} × ${steps.map(s=>s.quotient).join('')} + ${final.remainder}.`:'Il reste des erreurs. Vérifie chaque quotient, produit et reste.';
  };
  const newDivision=()=>{const customDividend=Number.parseInt($('#customDividend').value,10),customDivisor=Number.parseInt($('#customDivisor').value,10);current=customDividend>0&&customDivisor>1?{dividend:customDividend,divisor:customDivisor}:makeDivision(Number($('#dividendDigits').value),Number($('#divisorDigits').value));exerciseIndex++;render();};
  $('#newDivision').addEventListener('click',newDivision);$('#anotherDivision').addEventListener('click',newDivision);$('#resetDivision').addEventListener('click',render);$('#correctDivision').addEventListener('click',correct);
  newDivision();
})();
