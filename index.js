// const b = true
// const c = true
// const e = false
// const f = false

// const isSame = b && c
// const isSame2 = e || f

// if (isSame2) {
//   console.log("keluar")
// }
// let count=0
// while (count!==10) {
//   console.log(`nomor ${count}`)
//   // count+=1
// }

// for (let i = 0; i < 5; i++) {
//   console.log(i)
// }

// const arr = ['nanas', 'pisang', 'apel']

// for (const number of arr) {
//   console.log(number)
// }

// for (const number in arr) {
//   console.log(number)
// }

// const obj = {
//   gender:'male',
//   name: 'raihan',
// }

// for (const key in obj) {
//   console.log(key)
// }

// for (const item of Object.keys(obj)) {
//   console.log(item)
// }

// arr.forEach((val, i, ar) => console.log(val, i, ar))

// console.log(arr.join(', '))
// console.log(arr.length)

// const str = "kalimat"

// console.log(str.toUpperCase())


// function cekNama(namanya) {
//   console.log(namanya)
// }

// const cekNama2 = (nama, umur, gender,...last) => {
//   console.log(gender)
//   console.log(nama)
//   console.log(umur)
//   console.log(last)
// }

// cekNama('arka')
// cekNama2('naufal', 20, 'male','hai',2)

// const nomor = numb(4)
// const nomor2 = numb

// console.log(nomor)
// console.log(nomor2(3))

// function numb (val) {

//   const times = (number) => {
//     return number*2
//   }

//   console.log(times(9))
//   return times(val)
// }

function multiply(x, y, z) {
  // return function (y) {
  //   return function (z) {
  //     console.log(x, y, z)
  return x * y * z;
  //   };
  // };
}

const multiply2 = (a) => (b) => (c) => {
  console.log(a, b, c)
  return a * b * c
}

// let str = "a"
function nameF(params) {

  let newValue = params

  function changeValue2(newValue2) {
    newValue = newValue2

  }

  return [newValue, changeValue2]
}

const [a, changeA] = nameF("valueA")
changeA("baru")

console.log(a)


// const changeValue = (string) => {

//   return string
// }
let str = 'a'
str = "b"



// console.log(multiply(2,3,4))
// console.log(multiply2(2)(3)(4))