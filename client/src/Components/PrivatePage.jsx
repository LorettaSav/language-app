import {useEffect,useState} from 'react'
import axios from 'axios'

export default function PrivatePage() {
    const [data,setData] = useState(null)
    useEffect(() => {
        requestData();
    },[])

    async function requestData() {
        try {
            const data = await axios("/api/auth/profile", {
                headers: {
                    authorization: "Bearer " + localStorage.getItem("token")
                }
            })
            setData(data)
        } catch (err) {
            console.log(err)
    }
} 
  return (
      <div>PrivatePage: {data?.message}</div>
  )
}
