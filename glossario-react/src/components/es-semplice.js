/*
Semplice: scrivere un componente che rappresenti un input text, quando l'input e' vuoto oppure ha dentro solo dei numeri, oppure solo della punteggiatura, deve avere il bordo rosso. (1 / 2 / 3)

Quando la pagina carica non deve subito partire dal rosso, ma arrivarci solo dopo che l'utente ha scritto qualcosa. ( 4 )
*/

import { useState, useEffect } from 'react'

export default function App() {
  return (
    <div>
      <RedInput />
    </div>
  )
}

function RedInput() {
  const [value, setValue] = useState('') // 1.2
  const [color, setColor] = useState('') // 3
  const [boo, setBoo] = useState(true) // 4

  useEffect(() => { // 2
    if(boo) return setBoo(false)
    if(!value) { return setColor('red') } // 2.1
    const punteggiatura = new Set(['.',',',';',':','!','?','*','-','(',')','[',']','"','«','»',`'`]) // 2.3
    let number = true, simbol = true // 2.2 - 2.3
    for(let i = 0; i < value.length; i++) { // ciclo
      if(isNaN(value[i])) { number = false } // 2.2
      if(!punteggiatura.has(value[i])) { simbol = false } // 2.3
    }
    if(number || simbol) { return setColor('red') } // 2.4
    return setColor('') // 2.5
  }, [value])

  return (
    <input // 1
      className={color} // 3
      onChange={e => setValue(e.target.value)} // 1.1
    />
  )
}


