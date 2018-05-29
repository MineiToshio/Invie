var consulta = window.matchMedia('(max-width: 500px)');
var $burgerButton = document.getElementById("burger-button");
var $menu = document.getElementById("menu");

consulta.addListener(mediaQuery);

function mediaQuery() {
  if(consulta.matches)
    $burgerButton.addEventListener('touchstart', toggleMenu);
  else
    $burgerButton.removeEventListener('touchstart', toggleMenu);
}

mediaQuery();

function toggleMenu() {
  $menu.classList.toggle("active");
}
function showMenu() {
  $menu.classList.add("active");
}
function hideMenu() {
  $menu.classList.remove("active");
}

/*LAZY LOADING*/
var bLazy = new Blazy({
  selector: 'img'
});
/*END LAZY LOADING*/

/*GESTOS TOUCH*/
var $body = document.body;
var gestos = new Hammer($body);
gestos.on("swiperight", showMenu);
gestos.on("swipeleft", hideMenu);
/**/