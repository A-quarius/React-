const formA = { a: "1", b: "2", c: "3" }
const formB = { d: "1", e: "2", f: "3" }
const formC = { g: "1", h: "2", i: "3" }
const formD = { j: "1", k: "2", l: "3" }
const formE = { m: "1", n: "2", o: "3" }
const listA = [{ a: "第一列第一行", b: "第一列第二行", c: "第一列第三行" }, { a: "1", b: "2", c: "3" }, { a: "1", b: "2", c: "3" }, { a: "1", b: "2", c: "3" }]
const listB = [{ d: "第一列第四行", e: "2", f: "3" }, { d: "1", e: "2", f: "3" }, { d: "1", e: "2", f: "3" }, { d: "1", e: "2", f: "3" }]
const listC = [{ g: "第一列第七行", h: "2", i: "3" }, { g: "1", h: "2", i: "3" }, { g: "1", h: "2", i: "3" }, { g: "1", h: "2", i: "3" }]
const listD = [{ j: "第一列第十行", k: "2", l: "3" }, { j: "1", k: "2", l: "3" }, { j: "1", k: "2", l: "3" }, { j: "1", k: "2", l: "3" }]
const listE = [{ m: "第一列第十三行", n: "2", o: "3" }, { m: "1", n: "2", o: "3" }, { m: "1", n: "2", o: "3" }, { m: "1", n: "2", o: "3" }]

/**
 * 创建一个迭代器生成对象，每次可以获得一个变量名
 */
function createIndex() {
    let index = 0;
    return {
        next() {
            const obj = {
                value: getNameByIndex(index),
                done: false
            }
            index++
            return obj
        }
    }
}
/**
 * 根据索引生成一个变量名，相同索引的变量名一致
 * @param {Number} index 索引
 */
function getNameByIndex(index) {
    const baseName = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', ' T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    if (index < 27) {
        return baseName[index - 1]
    } else {
        return getNameByIndex(Math.floor(index / 26)) + getNameByIndex(index % 26 === 0 ? 26 : index % 26)
    }
}

const reusltList = []

formatData(formA, listA)
formatData(formB, listB)
formatData(formC, listC)
formatData(formD, listD)
formatData(formE, listE)

function formatData(form, list, arr) {
    const propsList = []
    for (let prop in form) {
        const iterator1 = createIndex();
        const obj = {}

        list.forEach(item => {
            if (!obj['name']) {
                obj.name = item[prop]
            }
            obj[iterator1.next().value] = item[prop]
        })
        reusltList.push(obj)
    }
}