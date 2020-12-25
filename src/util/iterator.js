// for of循环的原理
const iterator = obj[Symbol.iterator]

let result = iterator.next()

while(!result.done) {
    const item = result.value
    console.log(item);
    result = iterator.next()
}

for (const item of object) {
    console.log(item);
}