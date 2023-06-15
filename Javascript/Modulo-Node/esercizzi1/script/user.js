import axios from 'axios'
async function cal(){
   let res = axios.post('http://localhost:3000/users')
   console.log(res.status, res.data)
   
}
call()