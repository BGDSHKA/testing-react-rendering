// generate array of 4000 random numbers
var arr = [];
for (var i=0, t=4000; i<t; i++) {
    arr.push(Math.round(Math.random() * t))
}

const fn = () => {
    arr.map(x=>x*2)
}

const test = () => {
const start = process.hrtime.bigint()
const ogNow = Date.now()
const endAt = ogNow + 5000

let ops = 0n
let now = ogNow
while (now < endAt) {
  let r = fn()

  ops += 1n
  now = Date.now()
}

const ranFor = process.hrtime.bigint() - start

console.log(parseInt((ops * 1000000000n) / ranFor, 10))
}

  test()

  