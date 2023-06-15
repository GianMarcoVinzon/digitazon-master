function isUpperCase(str) {
    return str === str.toUpperCase()
}

let els = ['Alberto', 'gatto', 'Luca', 'cane', 'Marco']
let res = els.filter(s => isUpperCase(s[0]))
console.log("FILTER", res)

res = els.reduce((filtered, s) => {
  if (isUpperCase(s[0])) {
    filtered.push(s)
  }
  return filtered
}, [])
console.log("REDUCE", res)

let allUppercase = els.reduce((uppercased, s) => {
  uppercased.push(s.toUpperCase())
  return uppercased
}, [])
console.log(allUppercase)


async function productsAsList() {
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json()

    return products.reduce((all, product) => `
        ${all}
        <li>
          ${product.title}
        </li>
    `, '<ol>') + '</ol>'
}

(async function() {
  let lis = await productsAsList()
  document.getElementById('target').innerHTML = lis
})()