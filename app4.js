/*การเปรียบเทียบมี 4แบบ 
มากกว่า > น้อยกว่า <
 มากกว่าเท่ากับ => น้อยกว่าเท่ากับ <= 
 ไม่เท่ากับ !=
เท่ากับ ==
*/

let x = 5 >= 3
console.log(x)
y = 10 <= 4
console.log(y)

z = 500 !=6000
console.log(z)

c = 6000 == 70000
console.log(c)

console.log(3 < 5);
console.log(4 == 2+2);
console.log(1 > 5);

// การเปรียบเทียบ string ตัวอักษรพิมใหญ่จะน้อยกว่า เสมอ เช่น
console.log("BE"< "be") // จะได้ค่าเป็น true 

console.log( 1==="1")
console.log(1 !== "1")