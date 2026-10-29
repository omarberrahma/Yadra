/**
 * YADRA FOR SMART SOLUTIONS - Portfolio Filter Module
 * Interactive Filtering System for Client Case Studies & Digitization Projects
 */

function filterPortfolio(category, evt) {
  const items = document.querySelectorAll('.portfolio-item');
  const buttons = document.querySelectorAll('.port-filter-btn');

  buttons.forEach(btn => {
    btn.classList.remove('bg-pink-600', 'text-white');
    btn.classList.add('bg-slate-800', 'text-slate-300');
  });

  const targetBtn = evt ? evt.currentTarget : (typeof event !== 'undefined' ? event.target : null);
  if (targetBtn) {
    targetBtn.classList.remove('bg-slate-800', 'text-slate-300');
    targetBtn.classList.add('bg-pink-600', 'text-white');
  }

  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
