import { useEffect, useState } from 'react'
import axios from 'axios'
import { User } from '../models/User'
import Dwelling from './Dwelling'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Dashboard() {
    const [users, setUsers] = useState([])
    const [dwellings, setDwellings] = useState([])
    const [user, setUser] = useState<User>()
    useEffect(() => {
        axios.get("http://localhost:8080/auth")
            .then(response => {
                const newUser = new User(response.data.id, response.data.username, response.data.email)
                setUser(newUser)
                console.log(newUser)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

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
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Home Saver
                        </Typography>
                        {!user ? <Button color="inherit">Login</Button> :
                            <Typography variant="h6" component="div">
                                Welcome, {user.getUsername()}
                            </Typography>
                        }
                    </Toolbar>
                </AppBar>
                {/* <div>
                <span>
                    {users.length !== 0?
                        users.map(u => <User user={u} />)
                        : <button onClick={getUsers}>Get Users</button>
                    }
                    {dwellings.length !== 0?
                        dwellings.map(d => <Dwelling dwelling={d} />)
                        : <button onClick={getDwellings}>Get Dwellings</button>}
                </span>
            </div> */}
            </Box>

        </>
    )
}
export default Dashboard