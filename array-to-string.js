let letters = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p'];

// добавь в конец массива letters символ 't' (не напрямую, а с помощью метода).
letters.push("t")
// затем выведи в консоль этот массив в виде целого слова.
let arr = letters.join(' ')
console.log(arr)
// выведи тот же массив в консоль, но между каждым символом должен стоять тире.
// т.е. в консоле будет вот так: j-a-v-a-s-c-r-i-p-t
let str= letters.join('-')
console.log(str);

const words = ['html', 'css'];

// выведи в браузер строку 'html & css' <- (точно в точь как в примере)
let newArr = words.join('&');
console.log(newArr);
// добавь в массив words еще один элемент "git" 
words.push("git")
// и выведи в консоль строку "html-css-git".
let last = words.join('-')
console.log(last);
