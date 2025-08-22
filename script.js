// FADE IN SECTIONS AO SCROLL
  const faders = document.querySelectorAll('.fade-section');
  const appearOptions = { threshold: 0.3 };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));

  // CARROSSEL COM SCROLL SUAVE
  const track = document.querySelector('.sobre-carrossel');
  let isDown = false;
  let startX, scrollLeft;

  track.addEventListener('mousedown', e => {
    isDown = true;
    track.classList.add('active');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => { isDown = false; track.classList.remove('active'); });
  track.addEventListener('mouseup', () => { isDown = false; track.classList.remove('active'); });
  track.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2; // velocidade
    track.scrollLeft = scrollLeft - walk;
  });
