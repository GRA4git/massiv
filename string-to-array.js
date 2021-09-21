const Name = "intocode bootcamp";

const nameLetters = Name.split(' ');
console.log(nameLetters);
//<- допиши эту строку, чтобы в значении был 
                          // массив из букв переменной Name

const words = Name.split(' ');
console.log(words);
//<- допиши эту строку, чтобы в значении был 
                 // массив из слов "intocode"  и "bootcamp".
                  
// ⚠️ Нельзя напрямую писать эти значения, они должны определяться
//   с помощью соответствующих методов.

// выведи в консоль последнюю букву переменной name. 
console.log(nameLetters[nameLetters.length -1])

// выведи в консоль второе слово переменной name
console.log(Name[1]);
// добавь в конец массива words любое слово
words.push('tort');

// добавь в начало массива nameLetters четыре новых 
// элемента 't', 'h', 'e' и ' '. Последний элемент это пробел.
nameLetters.unshift('t', 'h', 'e',' ');