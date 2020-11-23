// you may add and subtract strings from the arrays
const greetingArr = ["Hello there","Welcome","Hello","Eh, how ya doing", "Science"]
const prefixArr = ["miss","mister","general","doctor"]
const nameArr = ["Kanobi", "Grievous", "Marshal", "Winters", "White"]
//Constants that generate a random number based on array length
const greetingRandomNum = Math.floor(Math.random() * greetingArr.length)
const prefixRandomNum = Math.floor(Math.random() * prefixArr.length)
const nameRandomNum = Math.floor(Math.random() * nameArr.length)

console.log(`${greetingArr[greetingRandomNum]} ${prefixArr[prefixRandomNum]} ${nameArr[nameRandomNum]}`)
