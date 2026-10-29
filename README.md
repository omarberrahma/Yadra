# YADRA FOR SMART SOLUTIONS | يادرا للحلول الذكية 🇩🇿
> Enterprise Digital Commerce & Software Solutions Platform for Algeria and North Africa.
> المنصة الرقمية الشاملة لرقمنة التجارة والحلول البرمجية والتسويقية في الجزائر.

---

## 📖 جدول المحتويات / Table of Contents
1. [عن المشروع / About the Project](#-عن-المشروع--about-the-project)
2. [الهيكلية والتقنيات المستخدمة / Architecture & Tech Stack](#-الهيكلية-والتقنيات-المستخدمة--architecture--tech-stack)
3. [دليل شجرة المجلدات / Directory Layout](#-دليل-شجرة-المجلدات--directory-layout)
4. [الخدمات المتاحة / Core Services](#-الخدمات-المتاحة--core-services)
5. [واجهات البرمجة والـ APIs / Serverless API Endpoints](#-واجهات-البرمجة-والـ-apis--serverless-api-endpoints)
6. [الخاصيات التقنية والأمان / Security & Protection](#-الخاصيات-التقنية-والأمان--security--protection)
7. [التشغيل المحلي / Local Development Setup](#-التشغيل-المحلي--local-development-setup)
8. [النشر والنشر السحابي / Deployment Guide (Vercel & Netlify)](#-النشر-والنشر-السحابي--deployment-guide-vercel--netlify)
9. [الدعم والتواصل / Contact & Support](#-الدعم-والتواصل--contact--support)

---

## 🌟 عن المشروع / About the Project

**يادرا للحلول الذكية (YADRA FOR SMART SOLUTIONS)** هي منصة تقنية جزائرية موجهة لأصحاب المحلات التجارية، الشركات الناشئة، والحرفيين لتسريع التحول الرقمي وتسيير المبيعات آلياً.

### المميزات الرئيسية:
- **تصميم نيوني زجاجي حديث (Neon Glassmorphism UI):** مستوحى من الهوية البصرية الرسمية لشركة يادرا مع دعم كامل للغة العربية والاتجاه من اليمين إلى اليسار (`dir="rtl"`).
- **هيكلية صفحات متعددة (Modular Multi-Page Architecture):** توزيع منظم وفصل كامل بين العرض (`HTML`)، التنسيق (`CSS`)، والمنطق (`JavaScript`).
- **حاسبة تكلفة تفاعلية (Interactive Cost Estimator):** لحساب تكلفة باقات الرقمنة بالدينار الجزائري (DZD) بناءً على نوع النشاط والخدمات المطلوبة.
- **تكامل مباشر مع واتساب وبريدي موب (BaridiMob & WhatsApp Integration):** لإرسال الطلبات والاستشارات بنقرة زر واحدة.
- **واجهات سحابية بدون خادم (Serverless API Endpoints):** للتحقق من البيانات وإرسال الرسائل بمرونة عالية.

---

## 🏗 الهيكلية والتقنيات المستخدمة / Architecture & Tech Stack

- **Frontend:** HTML5, Tailwind CSS (via CDN), Custom Vanilla JS (ES6+), Font Awesome 6.5.1
- **Backend:** Node.js Serverless Functions (`/api/contact.js`, `/api/calculate.js`)
- **Hosting & Cloud:** Deployment-ready for Vercel, Netlify, or Static Node Servers
- **Styling System:** CSS variables, Glassmorphism, Custom Neon Glow animations

---

## 📁 دليل شجرة المجلدات / Directory Layout

```text
.
├── index.html              # الصفحة الرئيسية (Landing Page)
├── services.html           # صفحة تفاصيل الخدمات
├── calculator.html         # صفحة حاسبة التكلفة التفاعلية
├── portfolio.html          # معرض الأعمال مع خيارات الفلترة
├── payment-methods.html    # صفحة وسائل الدفع (BaridiMob / CCP / Cash)
├── reviews.html            # صفحة تقييمات وشهادات العملاء
├── contact.html            # صفحة نموذج الاتصال المباشر
├── css/
│   └── styles.css          # التنسيقات المخصصة، تأثيرات النيون والزجاج
├── js/
│   ├── main.js             # التوجيه، التنبيهات المباشرة والقائمة للهواتف
│   ├── calculator.js       # منطق حاسبة الأسعار التفاعلية
│   ├── portfolio.js        # منطق فلترة المعرض حسب الفئة
│   └── contact.js          # تطهير البيانات ومنطق معالجة الاتصال
├── api/
│   ├── contact.js          # خادم سيرفرليس لمعالجة طلبات الاستشارة
│   └── calculate.js        # خادم سيرفرليس لحساب التكلفة التقديرية
├── package.json            # إعدادات المشروع والأوامر
├── vercel.json             # إعدادات التوجيه والحماية لـ Vercel
└── README.md               # التوثيق الشامل والدليل التفصيلي
```

---

## 💼 الخدمات المتاحة / Core Services

1. **برامج تسيير المحلات (POS & Store Management):**
   - إدارة المبيعات والفواتير والطابعات الحرارية.
   - تنبيهات المخزون والجرد التلقائي.
   - تسيير الديون ومستحقات الموردين.

2. **الاشتراكات الرقمية (Digital Subscriptions):**
   - تفعيل حسابات الذكاء الاصطناعي (ChatGPT Plus, Claude Pro, Midjourney).
   - برامج التصميم والمونتاج (Canva Pro, Adobe Creative Cloud).
   - تفعيل فوري وضمان شامل.

3. **الإعلانات الممولة والنمو (Sponsored Ads & Growth):**
   - استهداف دقيق في 58 ولاية عبر فيسبوك، إنستغرام، وتيك توك.
   - صناعة محتوى وفيديوهات إعلانية عالية التحويل.

4. **تطوير المواقع والمنصات (Web & Platform Development):**
   - بناء متاجر إلكترونية سريعة متوافقة مع الهواتف الذكية وتطبيقات توصيل الطلبات.

---

## ⚡ واجهات البرمجة والـ APIs / Serverless API Endpoints

### 1. `POST /api/contact`
يقوم باستلام بيانات الاستشارة وتطهيرها (Sanitizing) وإرجاع رابط واتساب المباشر.

**Request Body:**
```json
{
  "name": "محمد علي",
  "phone": "0550123456",
  "city": "وهران",
  "service": "برامج تسيير المحلات (POS)",
  "message": "أريد معاينة البرنامج لمحل ملابس"
}
```

### 2. `POST /api/calculate`
يقوم بحساب التكلفة التقديرية للباقة المحددة بنقرة واحدة.

**Request Body:**
```json
{
  "businessType": "محل بيع بالتجزئة",
  "pos": true,
  "hardware": true,
  "ads": false,
  "web": true
}
```

---

## 🛡 الخاصيات التقنية والأمان / Security & Protection

- **Input Sanitization & XSS Defense:** يتم تطهير جميع مدخلات المستخدم بالـ JavaScript وخوادم الـ API لمنع هجمات XSS و DOM-based injections.
- **Content Security Policy (CSP):** تم تعيين ترويسات CSP في ترويسات الصفحات لمنع تنفيذ أي سكريبتات غير مصرح بها.
- **Security Headers:** تم إضافة `X-Frame-Options: DENY` و `X-Content-Type-Options: nosniff` و `X-XSS-Protection` في `vercel.json` وفي استجابات الـ Serverless API.

---

## 🚀 التشغيل المحلي / Local Development Setup

لكي تقوم بتشغيل المشروع محلياً على جهازك:

```bash
# 1. تثبيت الاعتماديات
npm install

# 2. تشغيل خادم التنمية المحلي
npm start
```

افتح المتصفح على العنوان: `http://localhost:3000`

---

## ☁️ النشر والنشر السحابي / Deployment Guide

### النشر عبر Vercel:
1. ارتبط بحساب GitHub الخاص بك.
2. اختر المستودع وسيقوم Vercel تلقائياً بقراءة `vercel.json` وتفعيل كل الـ API Functions والصفحات الثابتة.

### النشر عبر Netlify:
- النشر المباشر عبر رفع المجلد أو الربط مع Git Repository مع ضبط خيار الـ Publish Directory إلى الجذور (`./`).

---

## 📞 الدعم والتواصل / Contact & Support

- **الهاتف المباشر:** 041 36 13 16 🇩🇿
- **البريد الإلكتروني:** yadra.team@gmail.com
- **المحادثة المباشرة:** [WhatsApp Chat](https://wa.me/21341361316)

---
© 2026 YADRA FOR SMART SOLUTIONS. جميع الحقوق محفوظة لشركة يادرا للحلول الذكية.
