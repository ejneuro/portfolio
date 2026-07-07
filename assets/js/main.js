$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {
    $("nav").addClass("sticky");
  }
});


window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;

  const track = document.querySelector(".scroll-track");
  const thumb = document.querySelector(".scroll-thumb");

  const trackHeight = track.clientHeight;
  const thumbHeight = thumb.clientHeight;

  const maxMove = trackHeight - thumbHeight;

  const scrollPercent = scrollTop / docHeight;

  thumb.style.top = (scrollPercent * maxMove) + "px";
});
  
  
  

$(window).on('load',function () {
  $('.progress').each(function () {
      let value = $(this).attr('data-value');
      $(this).css('width', value);
  });
});



const toggleBtn = document.getElementById("themeToggle");

// Load saved theme
const savedTheme = localStorage.getItem("Theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  toggleBtn.classList.remove("fa-sun");
  toggleBtn.classList.add("fa-moon");
} else {
  toggleBtn.classList.remove("fa-moon");
  toggleBtn.classList.add("fa-sun");
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("Theme", "dark");
    toggleBtn.classList.remove("fa-sun");
    toggleBtn.classList.add("fa-moon");
  } else {
    localStorage.setItem("Theme", "light");
    toggleBtn.classList.remove("fa-moon");
    toggleBtn.classList.add("fa-sun");
  }
});

  
