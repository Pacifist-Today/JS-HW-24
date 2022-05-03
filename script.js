"use strict"

const palindrom = (num, counter = 0) => {
    let numRev = Number([...num.toString()].reverse().join(""))
    let summ = num + numRev
    counter++
    console.log(summ)
    if (summ === Number([...summ.toString()].reverse().join(""))) {
        // Альтернативный return
        // let result = `${summ} is palindrom, it took ${counter} checks`
        // return result
        // Возврат объекта
        return {
            summ,
            counter
        }
    } else {
        return palindrom(summ, counter)
    }
}

console.log(palindrom(312))
console.log(palindrom(96))
console.log(palindrom(48))


// const palindrom = (num, counter) => {
//     let numRev = Number([...num.toString()].reverse().join(""))
//     let summ = num + numRev
//     counter = 0
//     console.log(summ)
//     if (summ === Number([...summ.toString()].reverse().join(""))) {
//         counter++
//         console.log(`This is palindrom, it takes ${counter} checks`)
//     }   else {
//         counter++
//         console.log(counter)
//         palindrom(summ, counter)
//     }
// }

// const palindrom = (num, counter = 0) => {
//     let numRev = Number([...num.toString()].reverse().join(""))
//     let summ = num + numRev
//     console.log(summ)
//     checking()
//     function checking (num) {
//         if (summ === Number([...summ.toString()].reverse().join(""))) {
//             counter++
//             let result = `This is palindrom, it took ${counter} checks`
//             return result
//         } else {
//             counter++
//             return palindrom(summ, counter)
//         }
//     }
// }