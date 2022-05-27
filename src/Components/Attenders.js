import React,{useState,useEffect} from 'react';
import axios from 'axios'

function Attenders(props) {

  const {submittedForm, setSubmittedForm}=props
 const [attenders, setAttenders] = useState([])

 useEffect(() => {
  fetchAttenders();
}, [attenders])


const fetchAttenders = async () => {
  const newList = []
    try{
    const path = await axios.get("http://localhost:4009/retrieve-data")
console.log('path', JSON.stringify(path.data).replace(/[\\{""\\}]/gi, ''),attenders)
newList.push(path.data)
setAttenders(JSON.stringify(path.data).replace(/[\\{""\\}]/gi, ''))
}catch(error){
console.log(error)
}

}


  return (
    <div>
        {/* <button onClick={handleFetch}>see Attenders</button> */}
        <h2>{attenders}</h2>
        </div>
  )
}

export default Attenders