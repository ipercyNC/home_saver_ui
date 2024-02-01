import { FormEvent, useEffect, useState } from 'react'
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
import { Alert, FormControl, Modal, OutlinedInput, TextField } from '@mui/material';

function Dashboard() {
    const [users, setUsers] = useState([])
    const [dwellings, setDwellings] = useState([])
    const [user, setUser] = useState<User>()
    const [loginModalOpen, setLoginModalOpen] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 5,
        p: 4
    }
    // useEffect(() => {
    //     axios.get("http://localhost:8080/auth")
    //         .then(response => {
    //             const newUser = new User(response.data.id, response.data.username, response.data.email)
    //             // setUser(newUser)
    //             // console.log(newUser)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }, [])

    function getDwellings() {
        axios.get("http://localhost:8080/dwelling")
            .then(response => {
                setDwellings(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    function handleLoginOpen() {
        setLoginModalOpen(true)
    }
    function handleLoginClose() {
        setLoginModalOpen(false)
    }
    function handleSubmit(){
        axios.post("http://localhost:8080/auth", {username: "jstanley", password: ""}, {headers: {
            'Content-Type': 'text/json'
        }})
        .then(response => {
            const newUser = new User(response.data.id, response.data.username, response.data.email)
            setUser(newUser)
            setLoginModalOpen(false)
        })
        .catch(error => {
            console.log(error)
            setErrorMessage("Login Unsuccessful. Please try again.")
            setTimeout(() => setErrorMessage(""), 5000);
            setLoginModalOpen(false)
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
                        {!user ?
                            <Button color="inherit" onClick={handleLoginOpen}>Login</Button>
                            :
                            <Typography variant="h6" component="div">
                                Welcome, {user.getUsername()}
                            </Typography>
                        }
                    </Toolbar>
                </AppBar>
                {errorMessage? 
                    <Alert severity="error"> {errorMessage}</Alert>
                    :<></>

                }
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
                <Modal
                    open={loginModalOpen}
                    onClose={handleLoginClose}
                >
                    <Box sx={style}>
                        <FormControl
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <TextField
                                id="username"
                                label="Username"
                                placeholder="Username"
                                value={username}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setUsername(event.target.value)}}
                                InputLabelProps={{
                                    style: { color: "white" }
                                }}
                            />
                            <TextField
                                id="password"
                                label="Password"
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setPassword(event.target.value)}}
                                InputLabelProps={{
                                    style: { color: "white" }
                                }}
                            />
                            <Button variant="outlined" type="submit" onClick={handleSubmit}>Submit</Button>
                        </FormControl>
                    </Box>
                </Modal>
            </Box>

        </>
    )
}
export default Dashboard