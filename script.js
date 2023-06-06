const child1 = document.getElementById('D1');
const child2 = document.getElementById('D2');
const child3 = document.getElementById('D3');
const child4 = document.getElementById('D4');
const divRect1 = child1.getBoundingClientRect();
const divRect2 = child2.getBoundingClientRect();
const divRect3 = child3.getBoundingClientRect();
const divRect4 = child4.getBoundingClientRect();
const divTopOffset1 = divRect1.top;
const divTopOffset2 = divRect2.bottom;
const divTopOffset3 = divRect3.top;
const divTopOffset4 = divRect4.bottom;


window.addEventListener('load', function() {
  document.getElementById("bg1").classList.add('Show');
  document.getElementById("bg1").classList.remove('notShow');

});
window.addEventListener('load', function() {
  
  var A = document.querySelectorAll('#A');
  A.forEach(A => {
  A.classList.remove('notShow');
 
    });

});


window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  console.log(scrollPosition)
let x =0.5;
child1.style.top = `${divTopOffset1 - (scrollPosition-240)*0.4}px`;
child2.style.bottom = `${divTopOffset2 - (scrollPosition-240)*0.4}px`;
child3.style.top = `${divTopOffset1 - (scrollPosition-240)*0.6}px`;
child4.style.bottom = `${divTopOffset1 - (scrollPosition-240)*0.6}px`;


if(scrollPosition >= 300)
{
  document.getElementById("bg1").classList.remove('Show');
  document.getElementById("bg1").classList.add('notShow');
  
  document.getElementById('A').classList.remove('move-animation')
  document.getElementById('A2').classList.remove('text-reveal-A2')
  document.getElementById('A3-h').classList.remove('typewriter-A3')
}
else{

  document.getElementById("bg1").classList.add('Show');
  document.getElementById("bg1").classList.remove('notShow');
  document.getElementById('A').classList.add('move-animation')
  document.getElementById('A2').classList.add('text-reveal-A2')
   
}



if(306<= scrollPosition && scrollPosition <= 800)
{
  var background = document.querySelectorAll('#bg2 span');
  background.forEach(background => {
  background.classList.remove('notShow');
  background.classList.add('Show');
    });

}
else{
  var background = document.querySelectorAll('#bg2 span');
  background.forEach(background => {
  background.classList.add('notShow');
  background.classList.remove('Show');
    });

}

if(scrollPosition >= 800)
{

  document.getElementById("bg3").classList.add('Show');
  document.getElementById("bg3").classList.remove('notShow');
}
else{
  document.getElementById("bg3").classList.remove('Show');
  document.getElementById("bg3").classList.add('notShow');
}



  if(306<= scrollPosition && scrollPosition <= 750){
      const parentElement = document.getElementById('div-back');
      const elements = parentElement.querySelectorAll('div');
      elements.forEach(element => {
      element.classList.remove('notShow');
      element.classList.add('show');
      //  var background1 = document.getElementById('#background span');
      //   // background.innerHTML = '&lt;/ &gt;/&lt;';
      //   background1.classList.remove('notShow');
      //   background1.classList.add('Show');  
});

  }

  else
  {
    document.getElementById('D1').classList.add('d1');
    document.getElementById('D2').classList.add('d2');
    document.getElementById('D3').classList.add('d3');
    document.getElementById('D4').classList.add('d4');
    const parentElement = document.getElementById('div-back');
    const elements = parentElement.querySelectorAll('div');

      elements.forEach(element => {
      element.classList.remove('show');
      element.classList.add('notShow');
    });
      
}



if(scrollPosition >= 2150){
  document.querySelector('.foot').classList.add('f-Show');
  document.querySelector('.foot').classList.remove('f-notShow');
  document.getElementById('E1').classList.add('E1-move');
  document.getElementById('E2').classList.add('E2-move');
  document.getElementById('E3').classList.add('E3-move');
  document.getElementById('EB-1').classList.add('EB1-move');
  document.getElementById('EB-2').classList.add('EB2-move');
  
}
else
{
  document.querySelector('.foot').classList.add('f-notShow');
  document.querySelector('.foot').classList.remove('f-Show');

  document.getElementById('E1').classList.remove('E1-move');
  document.getElementById('E2').classList.remove('E2-move');
  document.getElementById('E3').classList.remove('E3-move');
  document.getElementById('EB-1').classList.remove('EB1-move');
  document.getElementById('EB-2').classList.remove('EB2-move');
  document.getElementById('typed-text').classList.remove('type1');
  document.getElementById('typed-text1').classList.remove('type1');
  document.getElementById('typed-text2').classList.remove('type1');
  document.getElementById('typed-text3').classList.remove('typed1');
}

});


// document.addEventListener("animationend", (event) => {
  
//   if (event.target.classList.contains('type1')) {
//     console.log("Animation complete!");
//     event.target.classList.remove('type1');
//     let element;
//     for (let i = 0; i < 4; i++) {
//       let elementId;
//       switch (i) {
//         case 0:
//           elementId = 'typed-text1';
//           break;
//         case 1:
//           elementId = 'typed-text2';
//           break;
//         case 2:
//           elementId = 'typed-text3';
//           break;
//         case 3:
//           elementId = 'typed-text';
//           break;
//         default:
//           continue;
//       }

//     element = document.getElementById(elementId);
     
//       break;
//     }
//     setTimeout(() => {
        
//       element.classList.add('type1');
      
//     }, 100);
    
//   }
  
// })


document.addEventListener("animationend", (event) => {
  if (event.target.classList.contains('E2-move')){
    document.getElementById('typed-text').classList.add('type1');
  }

  if (event.target.classList.contains('text-reveal-A2')){
    document.getElementById('A3-h').classList.add('typewriter-A3');
  }



  if (event.target.classList.contains('type1')){ 
  const elementIds = ['typed-text', 'typed-text2', 'typed-text3', 'typed-text1'];
  const currentIndex = elementIds.findIndex(id => event.target.id === id);
  const nextIndex = (currentIndex + 1) % elementIds.length;

  event.target.classList.remove('type1');
  document.getElementById(elementIds[nextIndex]).classList.add('type1');
  

}
});



























