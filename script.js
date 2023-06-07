
// --------------------------------------NavigationPreloadManager----------------------



document.addEventListener("DOMContentLoaded", function() {
  // Check if there's a selected element in the local storage
  var selectedElement = localStorage.getItem("selectedElement");
  if (selectedElement) {
    showElement(selectedElement);
  } else {
    showElement("home"); // Default to home element
  }
//  if(selectedElement.id=="home") {
//   const elements = document.querySelectorAll('.back')
//       elements.forEach(element => {
//       element.classList.remove('notShow');
//       element.classList.add('show');
//     });
//  }
// else{
//   const elements = document.querySelectorAll('.back')
//       elements.forEach(element => {
//       element.classList.remove('show');
//       element.classList.add('notShow');
//     });
// }


  // Add click event listeners to the navigation links
  var navLinks = document.getElementsByClassName("details")[0].getElementsByTagName("a");
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default link behavior
      var targetElement = this.getAttribute("href").substring(1); // Get the target element id
      showElement(targetElement); // Show the target element
    });
  }

  function showElement(elementId) {
    var elements = document.getElementsByClassName("element");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none"; // Hide all elements
    }

    var selectedElement = document.getElementById(elementId);
    selectedElement.style.display = "block"; // Show selected element

    localStorage.setItem("selectedElement", elementId); // Store selected element in local storage
  }
});
// -------------------------------------------------------------------------



// ---------------------- toggle  --------------------------


let navElems = document.getElementsByClassName('details');
Array.from(navElems).forEach(navElem => {
  navElem.addEventListener('click', (e) => {
    if(e.target.classList.contains('home-nav'))
    {
      document.getElementById('home').style.display = 'block';
      document.getElementById('work').style.display = 'none';
      document.getElementById('about').style.display = 'none';
      document.getElementById('blog').style.display = 'none';
      const elements = document.querySelectorAll('.back')
      elements.forEach(element => {
      element.classList.remove('notShow');
      element.classList.add('show');
    });
    }
  else if(e.target.classList.contains('work-nav'))
    {
      document.getElementById('home').style.display = 'none';
      document.getElementById('work').style.display = 'block';
      document.getElementById('about').style.display = 'none';
      document.getElementById('blog').style.display = 'none';
      const elements = document.querySelectorAll('.back')
      elements.forEach(element => {
      element.classList.remove('show');
      element.classList.add('notShow');
    });
    }
   else if(e.target.classList.contains('about-nav'))
    {
      document.getElementById('home').style.display = 'none';
      document.getElementById('work').style.display = 'none';
      document.getElementById('about').style.display = 'block';
      document.getElementById('blog').style.display = 'none';
      const elements = document.querySelectorAll('.back')
      elements.forEach(element => {
      element.classList.remove('show');
      element.classList.add('notShow');
    });
    }
   else if(e.target.classList.contains('blog-nav'))
    {
      document.getElementById('home').style.display = 'none';
      document.getElementById('work').style.display = 'none';
      document.getElementById('about').style.display = 'none';
      document.getElementById('blog').style.display = 'block';
      const elements = document.querySelectorAll('.back')
      elements.forEach(element => {
      element.classList.remove('show');
      element.classList.add('notShow');
    });
    }

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
child1.style.top = `${divTopOffset1 - ((scrollPosition-306)*0.4)}px`;
child2.style.bottom = `${divTopOffset2 - ((scrollPosition-306)*0.4)}px`;
child3.style.top = `${divTopOffset1 - ((scrollPosition-306)*0.6)}px`;
child4.style.bottom = `${divTopOffset1 - ((scrollPosition-306)*0.6)}px`;

    
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


if(scrollPosition >= 2200){
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



























