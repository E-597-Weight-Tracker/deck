const track = document.querySelector('.slide-track');
const slides = Array.from(document.querySelectorAll('.slide'));
const navigationButtons = Array.from(document.querySelectorAll('[data-slide]'));
const previousButton = document.querySelector('#previous-slide');
const nextButton = document.querySelector('#next-slide');
const status = document.querySelector('#slide-status');
let currentSlide = 0;
const slideStorageKey = `nochf:slide:${location.pathname}`;

function restoredSlideIndex() {
  try {
    const savedId = sessionStorage.getItem(slideStorageKey);
    const index = slides.findIndex(slide => slide.id === savedId);
    return index < 0 ? 0 : index;
  } catch {
    // Navigation still works when browser storage is unavailable.
    return 0;
  }
}

function showSlide(index) {
  currentSlide = Math.max(0, Math.min(index, slides.length - 1));
  try {
    sessionStorage.setItem(slideStorageKey, slides[currentSlide].id);
  } catch {
    // Storage is optional; it only preserves this tab's position on reload.
  }
  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Move focus out of a slide before it becomes inert (for future slide links).
  if (slides.some((slide, i) => i !== currentSlide && slide.contains(document.activeElement))) {
    navigationButtons[currentSlide].focus({ preventScroll: true });
  }

  slides.forEach((slide, i) => {
    const active = i === currentSlide;
    slide.inert = !active;
    if (active) slide.removeAttribute('aria-hidden');
    else slide.setAttribute('aria-hidden', 'true');
  });

  navigationButtons.forEach((button, i) => {
    if (i === currentSlide) button.setAttribute('aria-current', 'step');
    else button.removeAttribute('aria-current');
  });

  previousButton.disabled = currentSlide === 0;
  nextButton.disabled = currentSlide === slides.length - 1;
  const number = String(currentSlide + 1).padStart(2, '0');
  const total = String(slides.length).padStart(2, '0');
  status.textContent = `${number} / ${total} · ${navigationButtons[currentSlide].textContent}`;

  // Keep the full active label visible when the navigation overflows on phones.
  navigationButtons[currentSlide].scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' });
}

navigationButtons.forEach((button, index) => {
  button.addEventListener('click', () => showSlide(index));
});
previousButton.addEventListener('click', () => showSlide(currentSlide - 1));
nextButton.addEventListener('click', () => showSlide(currentSlide + 1));

document.addEventListener('keydown', (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  if (event.target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])')) return;
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
  event.preventDefault();
  showSlide(currentSlide + (event.key === 'ArrowRight' ? 1 : -1));
});

showSlide(restoredSlideIndex());
