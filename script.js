function calcuate()
{
  let h = parseFloat(document.querySelector('.h2').value);
      let w = parseFloat(document.querySelector('.w2').value);
      let result1=document.getElementById('result1')
      let result2=document.getElementById('result2')
      let trueh=!isNaN(h);
      let truew=!isNaN(w);
    
     
      if (trueh&&truew) {
          let bmi=(w / (h/100)**2).toFixed(1);
          result1.innerHTML="Result: " + bmi;
          if(bmi<16)
      result2.innerHTML="servere thinness"
      else if(bmi>=16&&bmi<17)
      result2.innerHTML="moderate thinness"
      else if(bmi>=17&&bmi<18.5)
      result2.innerHTML="mild thinness"
      else if(bmi>=18.5&&bmi<25)
      result2.innerHTML="normal"
      else result2.innerHTML="Overweight"
      } else if (isNaN(h)) {
          alert("The height is not valid");
          result1.innerHTML="";
          result2.innerHTML = "";
      } else {
          alert("The weight is not valid");
          result1.innerHTML="";
          result2.innerHTML = "";
      }
    
      
  }
