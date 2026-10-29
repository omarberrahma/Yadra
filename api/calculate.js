/**
 * YADRA FOR SMART SOLUTIONS - Calculator Serverless Endpoint (Node.js)
 * Calculates custom digitization package estimates on backend.
 */

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed. Use POST.' });
  }

  try {
    const { businessType, pos, hardware, ads, web } = req.body || {};

    let totalDzd = 0;
    const items = [];

    if (pos) {
      totalDzd += 20000;
      items.push({ name: 'برنامج الكاشير وإدارة المخزون (POS)', price: 20000 });
    }
    if (hardware) {
      totalDzd += 28000;
      items.push({ name: 'طابعة حرارية + قارئ باركود', price: 28000 });
    }
    if (ads) {
      totalDzd += 15000;
      items.push({ name: 'حملات إعلانية ممولة (شهر كامل)', price: 15000 });
    }
    if (web) {
      totalDzd += 25000;
      items.push({ name: 'صفحة هبوط أو متجر إلكتروني متكامل', price: 25000 });
    }

    if (totalDzd === 0) {
      totalDzd = 5000;
      items.push({ name: 'رسوم المعاينة والاستشارة الأولية', price: 5000 });
    }

    const cleanBizType = String(businessType || 'محل بيع بالتجزئة').replace(/[<>]/g, '').trim();

    return res.status(200).json({
      success: true,
      businessType: cleanBizType,
      totalDzd,
      formattedPrice: new Intl.NumberFormat('ar-DZ').format(totalDzd) + ' دج',
      items,
      currency: 'DZD'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'حدث خطأ في الخادم أثناء حساب التكلفة.'
    });
  }
};
