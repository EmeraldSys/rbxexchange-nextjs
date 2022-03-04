import * as React from "react"
import { useRouter } from "next/router"
import { useAuth } from "../../../contexts/AuthContext"

import AppContainer from "../../../components/AppContainer"
import Typography from "@mui/material/Typography"

export default function UpgradeError() {
    const { currentUser, loading } = useAuth();
    const router = useRouter();

    React.useEffect(() => {
        if (!loading && !currentUser)
            router.push("/login");
    }, [currentUser, loading]);

    return (
        <AppContainer title="Upgrade">
            <Typography variant="h6" className="upgradeInfo">
                Upgrade failed!
            </Typography>
        </AppContainer>
    );
}