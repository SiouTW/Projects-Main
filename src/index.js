// sideNav
const two = document.querySelector('.two');
const sideNav = document.querySelector('.sideNav');
const all = document.querySelector('.all');
two.addEventListener('click', () => {
  sideNav.style.transform = 'translateX(0)';
  all.style.zIndex = '998';
});

all.addEventListener('click', () => {
  sideNav.style.transform = 'translateX(100%)';
  all.style.zIndex = '-1';
})

const nav = document.querySelector('nav');
// console.log(window.pageYOffset);


window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    nav.style.backgroundColor = 'black';
    two.style.backgroundColor = 'black';
  }
  if (window.pageYOffset == 0) {
    nav.style.backgroundColor = '';
    nav.style.opacity = 1;
    two.style.backgroundColor = '#192030';
  }
})

let allLi = document.querySelectorAll('.sideNav>li');
let a2 = document.getElementById("a2");
let a1 = document.getElementById("a1");
let a0 = document.getElementById("a0");
const allLiLink = [a0, a1, a2];
for (let i = 0; i < allLi.length; i++) {
  allLi[i].onclick = function () {
    if (i != 2) {
      allLiLink[i].scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    } else {
      allLiLink[i].scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    sideNav.style.transform = 'translateX(100%)';
    all.style.zIndex = '-1';
  }
}


// Project 的左側div
const allTitleName = document.querySelectorAll('.titleName');
const allTitleDiv = document.querySelectorAll('.titleDiv');

for (let i = 0; i < allTitleName.length; i++) {
  allTitleName[i].onclick = function () {
    allTitleDiv[i].style.display = 'block';
  };
  allTitleDiv[i].onclick = function () {
    allTitleDiv[i].style.display = 'none';
  };
}



// skills
const left = document.getElementById('left');
const right = document.getElementById('right');
const allSkill = document.querySelectorAll('.skill');
const allSkillText = document.querySelector('.allSkill>h3');
let skillPage = 0;

right.addEventListener('click', () => {
  if (skillPage === 0) {
    allSkill[0].style.display = 'none';
    allSkill[1].style.display = 'flex';
    allSkillText.innerHTML = 'Other Skills';
    skillPage = 1;
  } else {
    allSkill[0].style.display = 'flex';
    allSkill[1].style.display = 'none';
    allSkillText.innerHTML = 'Front-End Skills';
    skillPage = 0;
  }
});

left.addEventListener('click', () => {
  if (skillPage === 0) {
    allSkill[0].style.display = 'none';
    allSkill[1].style.display = 'flex';
    allSkillText.innerHTML = 'Other Skills';
    skillPage = 1;
  } else {
    allSkill[0].style.display = 'flex';
    allSkill[1].style.display = 'none';
    allSkillText.innerHTML = 'Front-End Skills';
    skillPage = 0;
  }
});



