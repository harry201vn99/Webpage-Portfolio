document.addEventListener("DOMContentLoaded", function() {
  const navtoggle = document.querySelector('.nav-toggle')
  const navtoggleicon = document.querySelector('.nav-toggle i')
  const navdropdownmenu = document.querySelector('.nav-dropdown-menu')
  
  navtoggle.onclick = function(){
    navdropdownmenu.classList.toggle('open')
    const isOpen = navdropdownmenu.classList.contains('open')
    navtoggleicon.classList = isOpen
    ?'bx bxs-x-circle'
    :'bx bxs-category-alt'
  }
  
  var scrollToTopBtn = document.getElementById("arrowbtn");
  
  // Show or hide the button based on scroll position
  window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Scroll to top when the button is clicked
  scrollToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0;  // For Safari
    document.documentElement.scrollTop = 0;  // For Chrome, Firefox, IE, and Opera
  });
});