//Exercise 2: Valid Palindrome

const isPalindrome = function (s) {
  let cleanedStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true

/* ปัญหา
   - ให้ตรวจสอบว่า String ที่กำหนดเป็น Palindrome หรือไม่ ถ้าใช่ให้แสดงผลลัพธ์เป็น true ถ้าไม่ใช่ให้เป็น false          */

/* วิธีแก้ปัญหา
   - 1) สร้างฟังก์ชัน เพื่อเอามารับค่า String แล้วเอาไปตรวจสอบว่าเป็น Palindrome หรือไม่
     - จะเช็คว่าเป็น Palindrome หรือไม่ จะต้องเปลี่ยนทุกตัวเป็นตัวเล็ก และลบสัญลักษณ์ที่ไม่ใช่ตัวอักษรออกทั้งหมด และเช็คว่ากลับด้านแล้วจะอ่านได้เหมือนเดิมมั้ย
   - 2) เปลี่ยนทุกตัวเป็นตัวเล็ก และลบสัญลักษณ์ที่ไม่ใช่ตัวอักษรออกทั้งหมด
     - ใช้ฟังก์ชัน .replace(/[^a-zA-Z0-9]/g, "") เพื่อลบทุกตัวที่ไม่ใช่ a-z, A-Z, 0-9
     - ใช้ฟังก์ชัน .toLowerCase() เพื่อทำให้ทุกตัวเป็นตัวเล็ก
     - สร้างตัวแปรมารับค่า          
   - 3) กลับด้านข้อมูล
    - ใช้ .split("") เพื่อทำให้เป็น Array แล้วใช้ .reverse () เพื่อกลับด้านข้อมูลใน Array จากนั้นใช้ .join("") เพื่อเอาข้อมูลใน Array มารวมกันเป็น String
    - สร้างตัวแปรมารับค่า
   - 4) เปรียบเทียบตัวแปรทั้งสองว่าเท่ากันหรือไม่ โดยการใช้ Comparison Opertor === เพื่อจะเอาคำตอบเป็น Boolean จากนั้น return ผลลัพธ์
*/
