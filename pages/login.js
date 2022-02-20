import * as React from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { grey } from "@mui/material/colors"

import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"

const defaultValues = {
    user: "",
    pass: ""
}

export default function Login() {
    const theme = createTheme({
        palette: {
            mode: "dark"
        }
    });
    const [formValues, setFormValues] = React.useState(defaultValues);

    const handleStateChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit}>
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
            </form>
        </ThemeProvider>
    );
}