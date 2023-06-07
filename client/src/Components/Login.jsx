import {useState, useContext} from 'react'
import axios from 'axios'
import { AuthContext } from '../Contexts/authContext';

export default function Login() {
    const auth = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        username: "loretta",
        password: "loretta"
    })
    const [data, setData] = useState(null);
    const { username, password } = credentials
    
    function handleChange(e) {
        const { name, value } = e.target;
        setCredentials({...credentials, [name]:value})
    }

    async function login() {
        try {
            const { data } = await axios("/api/auth/login", {
                method: "POST",
                data: credentials
            })
            localStorage.setItem("token", data.token)
            auth.login()
            
        } catch (err) {
            console.log(err)
        }

    }

    async function logout() {
        auth.logout();
    }



  return (
      <div>
          <div>
              <input value={username}
                  onChange={handleChange}
                  name="username"
                  type="text"
              />
              <input value={password}
                  onChange={handleChange}
                  name="password"
                  type="password" />
          </div>
          <div>
              <button onClick={login}>Log In</button>
              <button onClick={logout}> Log Out</button>
          </div>
    </div>
  )
}
