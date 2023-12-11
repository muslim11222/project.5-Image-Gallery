var container = document.querySelector('.gallery');

var backBtn = document.getElementById('backBtn');
var nextBtn = document.getElementById('nextBtn');


container.addEventListener('wheel', (evt) => {
     evt.preventDefault();
     container.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener('click', ()=>{
     container.style.scrollBehavior = 'smooth';
     container.scrollLeft += 900;
});


backBtn.addEventListener('click', ()=>{
     container.style.scrollBehavior = 'smooth';
     container.scrollLeft -= 900;
});