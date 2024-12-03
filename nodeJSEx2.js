/*פונקציית isPrime:

בודקת אם מספר נתון (num) הוא ראשוני.
המספרים הראשוניים הם מספרים הגדולים מ-1 ושאין להם מחלקים מלבד 1 ועצמם.
הלולאה רצה עד Math.sqrt(num) (השורש הריבועי של המספר) כדי לשפר ביצועים, כי אם המספר אינו ראשוני, נמצא מחלק קטן משורשו.
*/
// פונקציה לבדיקה אם מספר הוא ראשוני
function isPrime(num) {
  if (num < 2) return false; // מספרים קטנים מ-2 אינם ראשוניים
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // אם num מתחלק ב-i, הוא אינו ראשוני
  }
  return true; // אם לא מצאנו גורם משותף, המספר ראשוני
}
/*לולאת for:

רצה על כל המספרים מ-2 ועד 236.
אם המספר עובר את הבדיקה ב-isPrime, הוא מודפס.
*/
// הדפסת המספרים הראשוניים הקטנים מ-237
for (let i = 2; i < 237; i++) {
  if (isPrime(i)) {
    //המספרים הראשוניים מודפסים לשורת הקונסולה.
    console.log(i);
  }
}