/**
 * YADRA FOR SMART SOLUTIONS - Core Main Script
 * Handles Navigation, Active Route Indicator, Toast Notifications, and Booking Modals
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Drawer Navigation
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');

  if (mobileMenuBtn && mobileMenu && menuIcon) {
    function toggleMobileMenu() {
      mobileMenu.classList.toggle('hidden');
      if (mobileMenu.classList.contains('hidden')) {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      } else {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
      }
    }

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (!mobileMenu.classList.contains('hidden')) {
          toggleMobileMenu();
        }
      });
    });
  }

  // 2. Active Page Link Highlighting
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a, #mobileMenu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('text-pink-400', 'font-bold');
      link.setAttribute('aria-current', 'page');
    }
  });
});

// 3. Global Toast Notification System
function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const bgColor = type === 'success' ? 'bg-emerald-600/90' : 'bg-pink-600/90';
  toast.className = `${bgColor} backdrop-blur-md text-white text-xs sm:text-sm font-semibold px-4 py-3 rounded-xl shadow-2xl border border-white/20 transition-all duration-300 transform translate-y-2 pointer-events-auto flex items-center gap-2`;
  toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-triangle-exclamation'} text-base"></i><span>${message}</span>`;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-4');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// 4. Booking Modal Handlers
function openBookingModal(serviceName) {
  const modalTitle = document.getElementById('modalServiceTitle');
  const modalInput = document.getElementById('modal-service-input');
  const modal = document.getElementById('bookingModal');

  if (modalTitle) modalTitle.innerText = serviceName || 'طلب استشارة سريعة';
  if (modalInput) modalInput.value = serviceName || 'استشارة عامة';
  if (modal) modal.classList.remove('hidden');
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) modal.classList.add('hidden');
}

function handleModalSubmit(e) {
  e.preventDefault();
  const service = document.getElementById('modal-service-input')?.value || 'طلب خدمة';
  const name = document.getElementById('modal-name')?.value || '';
  const phone = document.getElementById('modal-phone')?.value || '';
  const city = document.getElementById('modal-city')?.value || '';
  const notes = document.getElementById('modal-notes')?.value || 'لا توجد ملاحظات إضافية';

  // Basic client-side sanitization
  const cleanName = name.replace(/[<>]/g, '');
  const cleanPhone = phone.replace(/[<>]/g, '');
  const cleanCity = city.replace(/[<>]/g, '');
  const cleanNotes = notes.replace(/[<>]/g, '');

  const whatsappText = `مرحباً شركة يادرا للحلول الذكية (YADRA)،%0A` +
    `أود تأكيد طلب خدمة:%0A` +
    `* الخدمة: ${encodeURIComponent(service)}%0A` +
    `* الاسم/المتجر: ${encodeURIComponent(cleanName)}%0A` +
    `* رقم الهاتف: ${encodeURIComponent(cleanPhone)}%0A` +
    `* الولاية: ${encodeURIComponent(cleanCity)}%0A` +
    `* تفاصيل إضافية: ${encodeURIComponent(cleanNotes)}`;

  showToast('جاري تحويلك للدردشة المباشرة عبر واتساب...', 'success');
  setTimeout(() => {
    window.open(`https://wa.me/21341361316?text=${whatsappText}`, '_blank');
    closeBookingModal();
  }, 800);
}
