import { useState } from 'react'
import axios from 'axios'
import User from './User'
import Dwelling from './Dwelling'

function Dashboard() {
    const [users, setUsers] = useState([])
    const [dwellings, setDwellings] = useState([])

    function getUsers() {
        axios.get("http://localhost:8080/user")
            .then(response => {
                setUsers(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    function getDwellings() {
        axios.get("http://localhost:8080/dwelling")
            .then(response => {
                setDwellings(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <>
            <div>
                <span>
                    {users.length !== 0?
                        users.map(u => <User user={u} />)
                        : <button onClick={getUsers}>Get Users</button>
                    }
                    {dwellings.length !== 0?
                        dwellings.map(d => <Dwelling dwelling={d} />)
                        : <button onClick={getDwellings}>Get Dwellings</button>}
                </span>
            </div>
        </>
    )
}
export default Dashboard