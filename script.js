  function flipCard(card) {
    const inner = card.querySelector('.card-inner');
    inner.classList.toggle('flipped'); }


    function createSnowflake() {
  const snowContainer = document.querySelector('.snow-container');
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.innerText = '❄'; // You can also use ✻ or *

  // Random horizontal position and animation duration
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
  snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';

  snowContainer.appendChild(snowflake);

  // Remove snowflake after it falls
  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

// Create snowflakes continuously
setInterval(createSnowflake, 200);

const triviaSection = document.querySelector('.card-trivia');

  function createStars(count) {
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Position anywhere in section
      star.style.top = Math.random() * 100 + '%';
      star.style.left = Math.random() * 100 + '%';
      
      // Random size
      const size = Math.random() * 2 + 1;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      
      triviaSection.appendChild(star);
    }
  }

  function twinkleStars() {
    const stars = document.querySelectorAll('.star');
    setInterval(() => {
      const star = stars[Math.floor(Math.random() * stars.length)];
      star.style.opacity = star.style.opacity === '0.2' ? '0.8' : '0.2';
    }, 200);
  }

  createStars(50); // Number of twinkling stars
  twinkleStars();