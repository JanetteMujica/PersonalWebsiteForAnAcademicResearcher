let prevScrollpos = window.pageYOffset;
console.log(prevScrollpos);
const navbar = document.querySelector('#headergrid1');

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos);

  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-100px';
  }

  prevScrollpos = currentScrollPos;
};

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  console.log(`winScroll: ${winScroll}`);
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById('myBar').style.width = `${scrolled}%`;
}
