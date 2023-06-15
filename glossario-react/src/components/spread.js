// spread

// dichiarazione
function stampa(...tutto) {
    tutto.map(t => console.log(t))
  }
  // stampa()
  // stampa(1)
  // stampa(1,2,3,4)
  // stampa(1,2,3,4,5,6)
  
  function boh(primo, secondo, ...gliAltri) {
    console.log(primo)
    console.log(secondo)
    console.log(gliAltri)
  }
  // boh()
  // boh(1,2)
  // boh(1,2,3,4,5,6)
  
  // invocazione
  let arr = [1,2,3]
  let arr2 = [...arr]
  console.log(arr, arr2)
  arr[0] = 42
  console.log(arr, arr2)
  
  let todo = {
    id: 1,
    startedOn: new Date().getTime(),
    task: 'prendere il latte',
    completed: false
  }
  let todoCompleted = { ...todo, completed: true }
  
  
  
  function process(todo) {
    // ...
  }
  
  function otherProcess(todo) {
    // ...
  }
  
  let todo2 = { /* ... */ }
  process(todo2)