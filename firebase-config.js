// ============================================================
// הגדרות פרויקט Firebase — המרדף הארגוני
// ============================================================
// יש למלא את הערכים למטה עם הפרטים מפרויקט ה-Firebase שלכם
// (Firebase Console → Project Settings → General → Your apps → SDK setup and configuration).
//
// שימו לב: apiKey כאן הוא מזהה ציבורי שמזהה את הפרויקט מול Firebase,
// ולא סוד שרת (בניגוד ל-API key של שירותים כמו OpenAI וכו').
// האבטחה בפועל של הנתונים לא נשענת על הסתרת הקובץ הזה, אלא על
// Security Rules של Realtime Database (ראו database.rules.json ו-README.md).
// כל עוד ה-Rules מוגדרים נכון, אין בעיה שהקובץ הזה גלוי בצד הלקוח.
// ============================================================

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDRlov95niw4DWiJABlubg3OXc5EYAIg64",
  authDomain: "hamirdaf-9f4aa.firebaseapp.com",
  databaseURL: "https://hamirdaf-9f4aa-default-rtdb.firebaseio.com",
  projectId: "hamirdaf-9f4aa",
  storageBucket: "hamirdaf-9f4aa.firebasestorage.app",
  messagingSenderId: "204038039244",
  appId: "1:204038039244:web:543c2d25008c68d81c4469"
};
