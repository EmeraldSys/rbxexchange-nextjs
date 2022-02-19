import * as React from "react"

import Grid from "@mui/material/Grid"

const defaultValues = {
    user: "",
    pass: ""
}

export default function Login() {
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
        <form onSubmit={handleSubmit}>
            <Grid container alignItems="center" justify="center" direction="column">
            </Grid>
        </form>
    );
}