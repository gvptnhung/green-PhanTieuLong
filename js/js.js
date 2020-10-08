// menu
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

window.addEventListener('scroll',function(){
    var header = document.querySelector('#header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} 
	else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
// end menu
// scrollbar
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}
// end scrollbar
// animatestion
window.sr = ScrollReveal();

sr.reveal('.animate-left',{
	origin:'left',
	duration:800,
	distance:'25rem',
	delay:500
})
sr.reveal('.animate-right',{
	origin:'right',
	duration:800,
	distance:'25rem',
	delay:500
})
sr.reveal('.animate-top',{
	origin:'top',
	duration:800,
	distance:'25rem',
	delay:500
})
sr.reveal('.animate-bottom',{
	origin:'bottom',
	duration:800,
	distance:'25rem',
	delay:500
})
// end animatestion
// loader
$(window).on("load",function(){
    $(".loader-container").fadeOut(3000);
  });
// end loader

// search
const selectedAll = document.querySelectorAll(".selected");

selectedAll.forEach(selected => {
const optionsContainer = selected.previousElementSibling;
const searchBox = selected.nextElementSibling;

const optionsList = optionsContainer.querySelectorAll(".option");

selected.addEventListener("click", () => {
  
  if(optionsContainer.classList.contains("active")) {
    optionsContainer.classList.remove("active");
  } else{
    let currentActive = document.querySelector("options-container.active");
    if(currentActive) {
      currentActive.classList.remove("active");
    }

    optionsContainer.classList.add("active");
  }

  searchBox.value = "";
  filterList("");

  if (optionsContainer.classList.contains("active")) {
    searchBox.focus();
  }
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

searchBox.addEventListener("keyup", function(e) {
  filterList(e.target.value);
});

const filterList = searchTerm => {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};
})
// end search




  



