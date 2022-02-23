import * as React from "react"
import { useRouter } from "next/router"
import { useAuth } from "../contexts/AuthContext"

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
    const { login } = useAuth();
    const router = useRouter();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const [loading, setLoading] = React.useState(false);

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

    /*
        <Paper elevation={10} sx={{
                    padding: 5,
                    height: "30vh",
                    width: 350,
                    margin: "20px auto"
                }}>
    */

    const handleEmailChange = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const handlePassChange = (e) => {
        const pass = e.target.value;
        setPassword(pass);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try
        {
            setError("");
            setLoading(true);
            await login(email, password);
            router.push("/app");
        } catch {
            setError("Failed");
        }

        setLoading(false);
    };

    return (
        <div>
            <Grid container sx={{ minHeight: "100vh" }}>
                <Grid item xs={12} sm={6}>
                    <img
                        src="https://esyscdn-beta-useast1.s3.amazonaws.com/img/2022/02/Screen%20Shot%202022-02-11%20at%2011.28.11%20AM.png"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        alt="Image" />
                </Grid>
                <Grid container item xs={12} sm={6} sx={{ padding: 25, maxHeight: "100vh" }}>
                    <Grid container spacing={-20}>
                        <Grid item xs>
                            <Avatar sx={{ background: "#000" }}>
                                <img src="assets/rbxexchange.png" alt="RBXExchange" style={{ height: "35px" }} />
                            </Avatar>
                        </Grid>
                        <Grid item xs>
                            <Avatar sx={{ background: "#1bbd7e", color: "#fff" }}><LockOutlinedIcon /></Avatar>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" rowSpacing={1.5}>
                        <Grid item xs>
                            <TextField label="Email" variant="outlined" placeholder="me@example.com" fullWidth onChange={(e) => handleEmailChange(e)} required />
                        </Grid>
                        <Grid item xs>
                            <TextField label="Password" type="password" variant="outlined" fullWidth onChange={(e) => handlePassChange(e)} required />
                        </Grid>
                        <Grid item xs>
                            <Button sx={{
                                marginTop: "20px"
                            }} type="submit" color="primary" variant="contained" fullWidth onClick={(e) => handleSubmit(e)} disabled={loading}>Login</Button>
                        </Grid>
                        <Grid item xs>
                            <Button color="primary">Forgot password?</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}