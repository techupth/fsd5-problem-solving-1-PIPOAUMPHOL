//Exercise 1: Add Strings

const addStrings = function (num1, num2) {
  let number1 = Number(num1);
  let number2 = Number(num2);
  let sum = number1 + number2;

  return String(sum);
};

const result1 = addStrings("11", "123");
const result2 = addStrings("456", "77");
const result3 = addStrings("0", "0");

console.log(result1); // "134"
console.log(result2); // "533"
console.log(result3); // "0"

/* ปัญหา
   - ให้เอา Value Type ที่เป็น String มาบวกกัน โดยการใช้ฟังก์ชัน และให้ฟังก์ชัน Return ผลบวกที่เป็น Type String */

/* วิธีแก้ปัญหา
   - เปลี่ยนจาก String เป็น Number และสร้างตัวแปรมาเก็บค่า
   - เอาตัวแปรทั้งสองที่แปลงเป็น number แล้วมาบวกกัน และสร้างตัวแปรมาเก็บค่า
   - return ผลลัพธ์พร้อมกับแปลงจาก String เป็น Number                                           */

// สามารถปรับปรุงให้โค้ดสั้นลงได้แบบนี้

/* const addStrings = function (num1, num2) {
  let sum = Number(num1) + Number(num2);

  return String(sum);
}; */
