const particles = document.querySelector('.particles');
const card = document.querySelector('.card');

for (let i = 0; i < 18; i++) {
  const particle = document.createElement('span');
  particle.className = 'particle';

  const size = Math.random() * 8 + 4;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.animationDelay = `${Math.random() * 10}s`;
  particle.style.animationDuration = `${12 + Math.random() * 8}s`;

  particles.appendChild(particle);
}

window.addEventListener('pointermove', (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 16;
  const y = (event.clientY / window.innerHeight - 0.5) * 16;

  card.style.setProperty('--pointer-x', `${x}px`);
  card.style.setProperty('--pointer-y', `${y}px`);
});
