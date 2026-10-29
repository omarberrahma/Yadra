/**
 * YADRA FOR SMART SOLUTIONS - Contact Form Module
 * XSS Defense, Input Sanitization, Toast Notification & WhatsApp Forwarding
 */

function handleContactSubmit(e) {
  e.preventDefault();
  const statusBox = document.getElementById('formStatus');
  const name = document.getElementById('contact-name')?.value || '';
  const phone = document.getElementById('contact-phone')?.value || '';
  const city = document.getElementById('contact-city')?.value || '';
  const service = document.getElementById('contact-service')?.value || '';
  const message = document.getElementById('contact-message')?.value || 'طلب استشارة';

  // Input sanitization against script injection
  const cleanName = name.replace(/[<>]/g, '').trim();
  const cleanPhone = phone.replace(/[<>]/g, '').trim();
  const cleanCity = city.replace(/[<>]/g, '').trim();
  const cleanService = service.replace(/[<>]/g, '').trim();
  const cleanMessage = message.replace(/[<>]/g, '').trim();

  if (statusBox) {
    statusBox.classList.remove('hidden');
    statusBox.className = 'p-3 rounded-xl text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-center';
    statusBox.innerHTML = '<i class="fa-solid fa-circle-check"></i> تم استلام طلبك بنجاح! جاري تحويلك الآن للدردشة مع المستشار...';
  }

  if (typeof showToast === 'function') {
    showToast('تم استلام معلوماتك، جاري تحويلك إلى واتساب المباشر...', 'success');
  }

  setTimeout(() => {
    const text = `طلب جديد عبر موقع يادرا:%0A` +
      `- الاسم: ${encodeURIComponent(cleanName)}%0A` +
      `- الهاتف: ${encodeURIComponent(cleanPhone)}%0A` +
      `- الولاية: ${encodeURIComponent(cleanCity)}%0A` +
      `- الخدمة: ${encodeURIComponent(cleanService)}%0A` +
      `- الرسالة: ${encodeURIComponent(cleanMessage)}`;
    window.open(`https://wa.me/21341361316?text=${text}`, '_blank');
  }, 1200);
}
