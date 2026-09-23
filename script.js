const typedText = document.getElementById('typing');
const words = ['Frontend Developer', 'UI/UX Enthusiast', 'Creative Coder'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeLoop = () => {
  const currentWord = words[wordIndex];

  if (!typedText) return;

  if (isDeleting) {
    typedText.textContent = currentWord.slice(0, charIndex--);
  } else {
    typedText.textContent = currentWord.slice(0, ++charIndex);
  }

  let typeSpeed = isDeleting ? 80 : 150;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 1200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 300;
  }

  setTimeout(typeLoop, typeSpeed);
};

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    themeToggle.textContent = body.classList.contains('light-mode') ? '☀️' : '🌙';
  });
}

typeLoop();
