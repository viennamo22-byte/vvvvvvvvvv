اسم المشروع: FindMyDevice (مثال لتتبع الأجهزة المملوكة)

محتوى:
مشروع نموذجي يحتوي على:
- مجلد server: خادم Node.js (Express + MongoDB) لاستقبال إحداثيات الأجهزة.
- مجلد app: هيكل تطبيق Android (Kotlin) مع Activity وخدمة أمامية لجمع الموقع.

خطوات التشغيل (مختصر):
1. إعداد الخادم:
   - انسخ server/.env.example إلى server/.env واملأ MONGO_URI وJWT_SECRET.
   - تشغيل: npm install && npm start
2. إعداد التطبيق:
   - افتح مجلد app كمشروع Android في Android Studio.
   - تأكد من إضافة Google Play Services وتهيئة مفاتيح الخادم.

ملاحظة أمان وقانونية: تأكد من الحصول على موافقة المستخدم، استخدام HTTPS، وتخزين الرموز بأمان.
