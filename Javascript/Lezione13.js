
function somma (arr){
  let tot = 0
  for (let i = 0; i < array.length; i++) {
    tot += arr [1]
  }
  return tot 
}  
function sottrazione (arr){
  let tot = 0
  for (let i = 0; i < array.length; i++) {
    tot -= arr [1]
  }
  return tot 
}
function moltiplicazione (arr){
  let tot = 0
  for (let i = 0; i < array.length; i++) {
    tot *= arr [1]
  }
  return tot 
}
// short cut\

      let a1=[2,4,6,8,10]

      function reduce(arr,op){
        let tot = 0
  for (let i = 0; i < array.length; i++) {
    tot *= op(arr[1],tot)
  }
  return tot 
      }

      function sum (b,c){
        return b + c
      }
      function sum (b,c){
        return b - c
      }
      function sum (b,c){
        return b * c
      }

      reduce(a1, sum)
      reduce(a1, sub)
      reduce(a1, mul)

