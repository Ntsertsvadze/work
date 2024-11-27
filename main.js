const cards = document.querySelector('.cards');
const btn = document.querySelector('.btn');

const wrapper1 = document.createElement('div');
wrapper1.classList.add('wrapper1');

const img1 = document.createElement('img');
img1.src = '1.jpg';
img1.classList.add('img1');

const H1 = document.createElement('h1');
H1.innerText = 'Space tourism takes gaint leap fprward';

const p1 = document.createElement('p');
p1.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab utinventore quas repellendus officia. A unde reprehenderit repudiandae odio.';


const wrapper2 = document.createElement('div');
wrapper2.classList.add('wrapper2');

const img2 = document.createElement('img');
img2.src = '1.jpg';
img2.classList.add('img2');

const H2 = document.createElement('h1');
H2.innerText = 'Space tourism takes gaint leap fprward';

const p2 = document.createElement('p');
p2.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab utinventore quas repellendus officia. A unde reprehenderit repudiandae odio.';


const wrapper3 = document.createElement('div');
wrapper3.classList.add('wrapper3');

const img3 = document.createElement('img');
img3.src = '1.jpg';
img3.classList.add('img3');

const H3 = document.createElement('h1');
H3.innerText = 'Space tourism takes gaint leap fprward';

const p3 = document.createElement('p');
p3.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab ut inventore quas repellendus officia. A unde reprehenderit repudiandae odio.';
   
cards.append(wrapper1, wrapper2, wrapper3)
wrapper1.append(img1, H1, p1)
wrapper2.append(img2, H2, p2)
wrapper3.append(img3, H3, p3)



const logIn = document.getElementById("log-in");
const logInClose = document.getElementById("formClose");
const logInForm = document.getElementById("logInForm");
const overlay = document.getElementById("overlay");
  
logIn.addEventListener("click", () => {
    logInForm.style.display = "block";
    overlay.style.display = "block";
});
logInClose.addEventListener("click", () => {
    logInForm.style.display = "none";
    overlay.style.display = "none";
 });
  