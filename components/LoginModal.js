import * as React from "react"

import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Avatar from "@mui/material/Avatar"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

/* <form onSubmit={handleSubmit}>
                <Grid sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                }} container alignItems="center" justify="center" direction="column">
                    <Grid item>
                        a
                    </Grid>
                    <Grid item>
                        <TextField label="Email" variant="outlined" />
                    </Grid>
                    <Grid item>
                        <TextField label="Password" variant="outlined" />
                    </Grid>
                </Grid>
            </form> */

export default function LoginModal() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    /* const handleStateChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }; */

    return (
        <Grid align="center">
            <Paper elevation={10} sx={{
                padding: 5,
                height: "30vh",
                width: 350,
                margin: "20px auto"
            }}>
                <Grid container spacing={-20}>
                    <Grid item xs>
                        <Avatar sx={{ background: "#000" }}>
                            <img src="https://edge.cdn.emeraldsys.xyz/internal/assets/projects/rbxexchange.png" alt="RBXExchange" style={{ height: "35px" }} />
                        </Avatar>
                    </Grid>
                    <Grid item xs>
                        <Avatar sx={{ background: "#1bbd7e", color: "#fff" }}><LockOutlinedIcon /></Avatar>
                    </Grid>
                </Grid>
                <h2>RBXExchange Beta Dashboard</h2>
                <Grid container direction="column" rowSpacing={1.5}>
                    <Grid item xs>
                        <TextField label="Email" variant="outlined" placeholder="me@example.com" fullWidth required />
                    </Grid>
                    <Grid item xs>
                        <TextField label="Password" type="password" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs>
                        <Button sx={{
                            marginTop: "20px"
                        }} type="submit" color="primary" variant="contained" fullWidth>Login</Button>
                    </Grid>
                    <Grid item xs>
                        <Button color="primary">Forgot password?</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}