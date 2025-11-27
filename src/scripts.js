// ===== HEADER SCROLL =====
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// ===== APARECER AO ROLAR =====
const elementos = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.3 });

elementos.forEach(el => observer.observe(el));

const track = document.querySelector('.carousel-track');
let speed = 1; // pixels por frame
let position = 0;

function animate() {
  position -= speed;
  // se o final da track tiver passado, reset
  if (Math.abs(position) >= track.scrollWidth / 2) {
    position = 0;
  }
  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

// duplicar conteúdo para loop contínuo
track.innerHTML += track.innerHTML;

animate();

//botao navbar
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});
