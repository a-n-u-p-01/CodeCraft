
let height = window.innerHeight;
console.log('Window height:',height)
console.log('Document height:',  document.documentElement.scrollHeight);
// var container = document.getElementById("projects");
// var containerRect = container.getBoundingClientRect();
// var containerHeight = containerRect.top;
// console.log('Container top height:',containerHeight)

// var child = document.getElementById("p-4");
// var childRect = child.getBoundingClientRect();
// var childHeight = childRect.height;
// console.log('Child height:',childHeight)
// var elementTopFromParentTop = child.offsetTop;
// console.log('off:',elementTopFromParentTop);














// ----------------------------------- load hash check-----------------------------
var hash = window.location.hash;
window.addEventListener('load', function() {
  hash = window.location.hash;
  if(hash === '#home')
  {      
        window.location.hash = 'home';
        document.getElementById('home').style.display = 'block';
        document.getElementById('work').style.display = 'none';
        document.getElementById('about').style.display = 'none';
        document.getElementById('blog').style.display = 'none';
        const elements = document.querySelectorAll('.back')
        elements.forEach(element => {
        element.classList.remove('notShow');
        element.classList.add('Show-2');
        
      });
      }
  else if (hash === '#work')
  {
    console.log(hash);
    document.getElementById('work').style.display = 'block';
    window.location.hash = 'work';
    document.getElementById('home').style.display = 'none';
    document.getElementById('work').style.display = 'block';
    document.getElementById('about').style.display = 'none';
    document.getElementById('blog').style.display = 'none';
    const elements = document.querySelectorAll('.back')
    elements.forEach(element => {
    element.classList.remove('Show-2');
    element.classList.add('notShow');
  });
  }
  else if (hash === '#about')
  {
    console.log(hash);
    document.getElementById('about').style.display = 'block';
    window.location.hash = 'about';
    
    document.getElementById('home').style.display = 'none';
    document.getElementById('work').style.display = 'none';
    document.getElementById('about').style.display = 'block';
    document.getElementById('blog').style.display = 'none';
    const elements = document.querySelectorAll('.back')
    elements.forEach(element => {
    element.classList.remove('Show-2');
    element.classList.add('notShow');
  });
  }
  else if (hash === '#blog')
  {
    console.log(hash);
    document.getElementById('blog').style.display = 'block';
    window.location.hash = 'blog';
    document.getElementById('home').style.display = 'none';
    document.getElementById('work').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('blog').style.display = 'block';
    const elements = document.querySelectorAll('.back')
    elements.forEach(element => {
    element.classList.remove('Show-2');
    
    element.classList.add('notShow');
  });
  }
})
// ------------------------back and forward------------------------------
console.log(hash);
window.onhashchange = function() {
  hash = window.location.hash;
  document.getElementById('resume').style.display = 'none';
    document.getElementById('skill').style.display = 'none';
    document.getElementById('tech').style.display = 'none';
    document.getElementById('git-hub').style.display = 'none';
if(hash === '#home')
{      
      window.location.hash = 'home';
      document.getElementById('home').style.display = 'block';
      document.getElementById('work').style.display = 'none';
      document.getElementById('about').style.display = 'none';
      document.getElementById('blog').style.display = 'none';
      const elements = document.querySelectorAll('.back')
      elements.forEach(element => {
      element.classList.remove('notShow');
      element.classList.add('Show-2');
      
    });
    }
else if (hash === '#work')
{
  console.log(hash);
  document.getElementById('work').style.display = 'block';
  window.location.hash = 'work';
  document.getElementById('home').style.display = 'none';
  document.getElementById('work').style.display = 'block';
  document.getElementById('about').style.display = 'none';
  document.getElementById('blog').style.display = 'none';
  const elements = document.querySelectorAll('.back')
  elements.forEach(element => {
  element.classList.remove('Show-2');
  element.classList.add('notShow');
});
}
else if (hash === '#about')
{
  console.log(hash);
  document.getElementById('about').style.display = 'block';
  window.location.hash = 'about';
  
  document.getElementById('home').style.display = 'none';
  document.getElementById('work').style.display = 'none';
  document.getElementById('about').style.display = 'block';
  document.getElementById('blog').style.display = 'none';
  const elements = document.querySelectorAll('.back')
  elements.forEach(element => {
  element.classList.remove('Show-2');
  element.classList.add('notShow');
});
}
else if (hash === '#blog')
{
  console.log(hash);
  document.getElementById('blog').style.display = 'block';
  window.location.hash = 'blog';
  document.getElementById('home').style.display = 'none';
  document.getElementById('work').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  document.getElementById('blog').style.display = 'block';
  const elements = document.querySelectorAll('.back')
  elements.forEach(element => {
  element.classList.remove('Show-2');
  
  element.classList.add('notShow');
});
}
  
  // Code to handle hash change
  console.log('Hash changed:', location.hash);
};





// -------------------------------------------------------------------------



// ---------------------- toggle  --------------------------

let navElems = document.getElementsByClassName('details');
Array.from(navElems).forEach(navElem => {
  navElem.addEventListener('click', (e) => {
    hash = window.location.hash;
    if(hash === '#home')
    {      
          window.location.hash = 'home';
    }
    if(e.target.classList.contains('home-nav'))
    {
      
document.getElementById('D1').style.top = '390px';
document.getElementById('D2').style.bottom = '270px';
document.getElementById('D3').style.top = '390px';
document.getElementById('D4').style.bottom = '100px';




      document.getElementById('home').style.display = 'block';
      document.getElementById('work').style.display = 'none';
      document.getElementById('about').style.display = 'none';
      document.getElementById('blog').style.display = 'none';
      const elements = document.querySelectorAll('.back')
      elements.forEach(element => {
      element.classList.remove('notShow');
      element.classList.add('Show-2');
    });
    }
  else if(e.target.classList.contains('work-nav'))
    {

     
      

      window.location.hash = 'work';
      document.getElementById('home').style.display = 'none';
      document.getElementById('work').style.display = 'block';
      document.getElementById('about').style.display = 'none';
      document.getElementById('blog').style.display = 'none';
      const elements = document.querySelectorAll('.back')
      elements.forEach(element => {
      element.classList.remove('Show-2');
      element.classList.add('notShow');
    });
    }
   else if(e.target.classList.contains('about-nav'))
    {
      window.location.hash = 'about';
      document.getElementById('home').style.display = 'none';
      document.getElementById('work').style.display = 'none';
      document.getElementById('about').style.display = 'block';
      document.getElementById('blog').style.display = 'none';
      const elements = document.querySelectorAll('.back')
      elements.forEach(element => {
      element.classList.remove('Show-2');
      element.classList.add('notShow');
      document.getElementById('about-div').style.display = 'flex';
    });
    }
   else if(e.target.classList.contains('blog-nav'))
    {
      window.location.hash = 'block';
      document.getElementById('home').style.display = 'none';
      document.getElementById('work').style.display = 'none';
      document.getElementById('about').style.display = 'none';
      document.getElementById('blog').style.display = 'block';
      const elements = document.querySelectorAll('.back')
      elements.forEach(element => {
      element.classList.remove('Show-2');
      element.classList.add('notShow');
    });
    }
    setTimeout(() =>{
      hash = window.location.hash;
      console.log(hash);
    }, 100)
    
    
  });
}); 

// -----------------------------NavEnd---------------------------------------


// --------------------------HomePage--------------------------------
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
  
  if(hash === '#home' || hash === '')
  {  
  
 

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

// -------------------------------------paralax effect---------------------------------------------------

  if(306<= scrollPosition && scrollPosition <= 750){
     
      const elements = document.querySelectorAll('.back div')
      elements.forEach(element => {
      element.classList.remove('notShow');
      element.classList.add('show');
    });
child1.style.top = `${divTopOffset1 - ((scrollPosition-240)*0.4)}px`;
child2.style.bottom = `${divTopOffset2 - ((scrollPosition-240)*0.4)}px`;
child3.style.top = `${divTopOffset3 - ((scrollPosition-240)*0.6)}px`;
child4.style.bottom = `${divTopOffset4 - ((scrollPosition-240)*0.6)}px`;


    
  }

  else
  {
    const elements = document.querySelectorAll('.back div')
    elements.forEach(element => {
    element.classList.remove('show');
    element.classList.add('notShow');
  });
      
}
// ---------------------------------------------------------------------




if(scrollPosition >= 2010){
  document.querySelector('.foot').classList.add('f-Show');
  document.querySelector('.foot').classList.remove('f-notShow');
  document.getElementById('E1').classList.add('E1-move');
  document.getElementById('E2').classList.add('E2-move');
  document.getElementById('E3').classList.add('E3-move');
  document.getElementById('EB1').classList.add('EB1-move');
  document.getElementById('EB2').classList.add('EB2-move');
  
}
else if(scrollPosition <= 2200)
{
  document.querySelector('.foot').classList.add('f-notShow');
  document.querySelector('.foot').classList.remove('f-Show');

  document.getElementById('E1').classList.remove('E1-move');
  document.getElementById('E2').classList.remove('E2-move');
  document.getElementById('E3').classList.remove('E3-move');
  document.getElementById('EB1').classList.remove('EB1-move');
  document.getElementById('EB2').classList.remove('EB2-move');
  document.getElementById('typed-text').classList.remove('type1');
  document.getElementById('typed-text1').classList.remove('type1');
  document.getElementById('typed-text2').classList.remove('type1');
  document.getElementById('typed-text3').classList.remove('type1');
}
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
    event.target.classList.remove('type1'); 
  const elementIds = ['typed-text', 'typed-text1', 'typed-text2', 'typed-text3'];
  const currentIndex = elementIds.findIndex(id => event.target.id === id);
  const nextIndex = (currentIndex + 1) % elementIds.length;

  event.target.classList.remove('type1');
  document.getElementById(elementIds[nextIndex]).classList.add('type1');}


});


// ------------------------------------Work-------------------------------------------



window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
 let projects = document.querySelectorAll('.project')
  if (scrollPosition >= 0 && scrollPosition<=300){
      projects[0].classList.add('p-d-move')
      projects[1].classList.add('p-d-move')
      projects[2].classList.add('p-d-move')
      projects[3].classList.remove('p-d-move')
      projects[4].classList.remove('p-d-move')
      projects[5].classList.remove('p-d-move')
      projects[6].classList.remove('p-d-move')
      projects[7].classList.remove('p-d-move')
      projects[8].classList.remove('p-d-move')
      
  }
  else if(scrollPosition >= 300 && scrollPosition <= 600) {
    projects[0].classList.remove('p-d-move')
    projects[1].classList.remove('p-d-move')
    projects[2].classList.remove('p-d-move')
    projects[3].classList.add('p-d-move')
    projects[4].classList.add('p-d-move')
    projects[5].classList.add('p-d-move')
    projects[6].classList.remove('p-d-move')
    projects[7].classList.remove('p-d-move')
    projects[8].classList.remove('p-d-move')
  }
  else if(scrollPosition >= 700){
    projects[0].classList.remove('p-d-move')
    projects[1].classList.remove('p-d-move')
    projects[2].classList.remove('p-d-move')
    projects[3].classList.remove('p-d-move')
    projects[4].classList.remove('p-d-move')
    projects[5].classList.remove('p-d-move')
    projects[6].classList.add('p-d-move')
    projects[7].classList.add('p-d-move')
    projects[8].classList.add('p-d-move')
  }
  
  
  
  
  });




// ---------------------------------------About---------------------------------------------

let buttons = document.querySelectorAll('#about-div button');
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    buttons[0].classList.add('b1-A-move');
    buttons[1].classList.add('b2-A-move');
    buttons[2].classList.add('b3-A-move');
    buttons[3].classList.add('b4-A-move');
    
    setTimeout( ()=>{


    if (index === 0) {
      buttons[0].classList.remove('b1-A-move');
    buttons[1].classList.remove('b2-A-move');
    buttons[2].classList.remove('b3-A-move');
    buttons[3].classList.remove('b4-A-move');
      document.getElementById('resume').style.display = 'flex';
      document.getElementById('skill').style.display = 'none';
      document.getElementById('tech').style.display = 'none';
      document.getElementById('git-hub').style.display = 'none';
      document.getElementById('about-div').style.display = 'none';
    } else if (index === 1) {
      buttons[0].classList.remove('b1-A-move');
      buttons[1].classList.remove('b2-A-move');
      buttons[2].classList.remove('b3-A-move');
      buttons[3].classList.remove('b4-A-move');
      document.getElementById('resume').style.display = 'none';
      document.getElementById('skill').style.display = 'flex';
      document.getElementById('tech').style.display = 'none';
      document.getElementById('git-hub').style.display = 'none';
      document.getElementById('about-div').style.display = 'none';
      // Handle index 1
    } else if (index === 2) {
      buttons[0].classList.remove('b1-A-move');
      buttons[1].classList.remove('b2-A-move');
      buttons[2].classList.remove('b3-A-move');
      buttons[3].classList.remove('b4-A-move');
      document.getElementById('resume').style.display = 'none';
      document.getElementById('skill').style.display = 'none';
      document.getElementById('tech').style.display = 'flex';
      document.getElementById('git-hub').style.display = 'none';
      document.getElementById('about-div').style.display = 'none';
      // Handle index 2
    } else if (index === 3) {
      buttons[0].classList.remove('b1-A-move');
      buttons[1].classList.remove('b2-A-move');
      buttons[2].classList.remove('b3-A-move');
      buttons[3].classList.remove('b4-A-move');
      document.getElementById('resume').style.display = 'none';
      document.getElementById('skill').style.display = 'none';
      document.getElementById('tech').style.display = 'none';
      document.getElementById('git-hub').style.display = 'flex';
      document.getElementById('about-div').style.display = 'none';
      // Handle index 3
    }
  }, 3000);
  });
});


let goBacks = document.querySelectorAll('.about-back');

goBacks.forEach(goBack=>{
  goBack.addEventListener('click',()=>{
    document.getElementById('resume').style.display = 'none';
    document.getElementById('skill').style.display = 'none';
    document.getElementById('tech').style.display = 'none';
    document.getElementById('git-hub').style.display = 'none';
    document.getElementById('about-div').style.display = 'flex';
  })
});


// -----------------------------------------SMALL-------------------------------------------------------




let menuButtons = document.querySelectorAll('#nav-menu-page');
menuButtons.forEach((button) => {
  button.addEventListener('click', () => {
         
          
    document.getElementById('nav-menu-page').classList.add('move-menu-backward');
    document.getElementById('nav-menu-page').classList.remove('move-menu-forward');
    setTimeout(() => {
      document.querySelector('body main').style.display = 'flex';
      document.querySelector('body main').style.background= 'transparent';
    },100)
  });
  
});

document.getElementById('menu-btn').addEventListener('click',()=>{
  
  document.getElementById('nav-menu-page').classList.add('move-menu-forward');
  document.getElementById('nav-menu-page').classList.remove('move-menu-backward');
  
  setTimeout(() => {
    document.querySelector('body main').style.display = 'none';
   },1000)
})

window.addEventListener('load', function() {
  // document.getElementById('nav-menu-page').classList.remove('move-menu-backward');
  // document.getElementById('nav-menu-page').classList.remove('move-menu-forward');
  document.querySelector('body main').style.display = 'flex';
});


function isSmallScreen() {
  return window.matchMedia("(max-width: 768px)").matches;
}
if(isSmallScreen){
  document.getElementById('nav-menu-page').classList.remove('move-menu-backward');
  document.getElementById('nav-menu-page').classList.remove('move-menu-forward');
}






