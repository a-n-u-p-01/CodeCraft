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
}
else{
  document.getElementById("bg1").classList.add('Show');
  document.getElementById("bg1").classList.remove('notShow');
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
    const elements = parentElement.querySelectorAll('div');a

      elements.forEach(element => {
      element.classList.remove('show');
      element.classList.add('notShow');
    });
      
}
});






















