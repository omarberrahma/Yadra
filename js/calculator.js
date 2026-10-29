/**
 * YADRA FOR SMART SOLUTIONS - Quotation Calculator Engine
 * Handles real-time DZD pricing calculations and WhatsApp message formatting
 */

let selectedBusinessType = 'محل بيع بالتجزئة';

function selectBusinessType(btn, type) {
  document.querySelectorAll('.biz-type-btn').forEach(b => {
    b.classList.remove('border-pink-500', 'bg-pink-500/10', 'text-white');
    b.classList.add('border-slate-700', 'bg-slate-900/60', 'text-slate-400');
  });
  if (btn) {
    btn.classList.remove('border-slate-700', 'bg-slate-900/60', 'text-slate-400');
    btn.classList.add('border-pink-500', 'bg-pink-500/10', 'text-white');
  }
  selectedBusinessType = type;
  calculateTotal();
}

function calculateTotal() {
  let total = 0;
  const pos = document.getElementById('calc-pos')?.checked;
  const hardware = document.getElementById('calc-hardware')?.checked;
  const ads = document.getElementById('calc-ads')?.checked;
  const web = document.getElementById('calc-web')?.checked;

  if (pos) total += 20000;
  if (hardware) total += 28000;
  if (ads) total += 15000;
  if (web) total += 25000;

  if (total === 0) total = 5000;

  const displayEl = document.getElementById('calc-price-display');
  if (displayEl) {
    const formatted = new Intl.NumberFormat('ar-DZ').format(total) + ' دج';
    displayEl.innerHTML = `${formatted} <span class="text-xs text-slate-400 font-normal">/ تقديري تقريبي</span>`;
  }
}

function sendCalculatedQuote() {
  const pos = document.getElementById('calc-pos')?.checked ? 'نعم' : 'لا';
  const hardware = document.getElementById('calc-hardware')?.checked ? 'نعم' : 'لا';
  const ads = document.getElementById('calc-ads')?.checked ? 'نعم' : 'لا';
  const web = document.getElementById('calc-web')?.checked ? 'نعم' : 'لا';

  const cleanBizType = selectedBusinessType.replace(/[<>]/g, '');

  const message = `مرحباً فريق يادرا (YADRA)، أود الاستفسار عن باقة رقمنة:%0A` +
    `- نوع النشاط: ${encodeURIComponent(cleanBizType)}%0A` +
    `- برنامج الكاشير POS: ${pos}%0A` +
    `- عتاد وطابعة باركود: ${hardware}%0A` +
    `- إدارة حملات إعلانية: ${ads}%0A` +
    `- موقع أو متجر إلكتروني: ${web}%0A` +
    `أرجو تزويدي بالعرض النهائي وتفاصيل المعاينة.`;

  if (typeof showToast === 'function') {
    showToast('جاري تحضير العرض وإرساله عبر واتساب...', 'success');
  }

  setTimeout(() => {
    window.open(`https://wa.me/21341361316?text=${message}`, '_blank');
  }, 600);
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('calc-price-display')) {
    calculateTotal();
  }
});
