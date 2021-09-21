let arr = [];
arr.push('test');
console.log(arr);

let twoArr = [];
twoArr.push('tos', 'vos', 'gos');
console.log(twoArr);

let testArr = [true, false];
testArr.unshift(null);
console.log(testArr)

let ato = [[],[]];
ato[1].push(true, true ,true)
console.log(ato);

let arrTest = ["html", "css"];
arrTest.unshift("git");
arrTest.push("javascript");
console.log(arrTest.length);
arrTest[arrTest.length] = 'figma'

let stack = ["html", "css", "bem", "js"];

// A) добавь в конец массива значение "react" (используй .push())
stack.push("react")
// B) выведи весь массив в консоль
console.log(stack)
// C) добавь в конец массива значение "redux" (используй способ с [])
stack[stack.length] = "redux"
// D) выведи весь массив в консоль
console.log(stack)
// E) добавь в начало массива значение "git"
stack.unshift(git)
// F) выведи весь массив в консоль
console.log(stack)

/* 
 *  G) выведи в консоль строку "сначала мы изучим git, а в конце изучим redux". 
 *  Слова "git" и "redux" должны браться из массива, а не печататься от руки.
 * (вспоминай про кавычки ``)
 */
console.log(`сначала мы изучим ${stack[0]}, а в конце мы изучим ${stak[stack.length -1]}`)
// H) добавь в конец массива сразу два элемента: "mysql" и "mongodb".

// I) выведи в консоль длину массива
