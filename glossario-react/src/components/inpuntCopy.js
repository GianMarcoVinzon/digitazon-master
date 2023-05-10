export function InputCopy(){
    const [inputA,setInputA] = useState('')
    const [inputB,setInputB] = useState('')
    const [ok,setOk] = useState()


    useEffect(()=>{
      if(inputA != '' && inputB != ''){
        setOk('funzione')
      }
      else{
        setOk('')
      }
    },[inputA,inputB]) 
    // ---> perchè inputA, inputB? ...useEffect esegue la funzione anonima che specifico come parametro quando uno dei due stati che passo nell'array cambia. 

    return(
        <>
        <h2>esercizio</h2>
        <input value={inputA} onChange={(e) => setInputA(e.target.value) } ></input> --value dipende da input e quando si modifica input lo manda nel setInput ...
        <input value={inputB} onChange={(e) => setInputB(e.target.value) } ></input>
        <span>{ok}</span>
        </>
    )
}
