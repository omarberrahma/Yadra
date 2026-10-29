/**
 * YADRA FOR SMART SOLUTIONS - Contact Serverless Endpoint (Node.js)
 * Sanitize and validate incoming contact & consultation requests.
 */

module.exports = async (req, res) => {
  // CORS & Security Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Content-Type'
  );
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
    const { name, phone, city, service, message } = req.body || {};

    if (!name || !phone || !city) {
      return res.status(400).json({
        success: false,
        message: 'الحقول الأساسية (الاسم، رقم الهاتف، الولاية) مطلوبة.'
      });
    }

    // Input sanitization against script/XSS injection
    const sanitizedData = {
      name: String(name).replace(/[<>]/g, '').trim().slice(0, 100),
      phone: String(phone).replace(/[<>]/g, '').trim().slice(0, 20),
      city: String(city).replace(/[<>]/g, '').trim().slice(0, 50),
      service: String(service || 'استشارة عامة').replace(/[<>]/g, '').trim().slice(0, 100),
      message: String(message || '').replace(/[<>]/g, '').trim().slice(0, 1000),
      timestamp: new Date().toISOString()
    };

    const waText = `طلب استشارة جديدة:%0A` +
      `- الاسم: ${encodeURIComponent(sanitizedData.name)}%0A` +
      `- الهاتف: ${encodeURIComponent(sanitizedData.phone)}%0A` +
      `- الولاية: ${encodeURIComponent(sanitizedData.city)}%0A` +
      `- الخدمة: ${encodeURIComponent(sanitizedData.service)}%0A` +
      `- التفاصيل: ${encodeURIComponent(sanitizedData.message)}`;

    return res.status(200).json({
      success: true,
      message: 'تم استلام بيانات الاتصال بنجاح.',
      whatsappUrl: `https://wa.me/21341361316?text=${waText}`,
      data: sanitizedData
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'حدث خطأ في الخادم أثناء معالجة الطلب.'
    });
  }
};
