import * as React from "react"
import { useRouter } from "next/router"
import { useAuth } from "../../contexts/AuthContext"

import AppContainer from "../../components/AppContainer"
import Typography from "@mui/material/Typography"

/* sx={{ bgcolor: "#222" }} */
/* <Head>
        <title>RBXExchange</title>
      </Head> */

export default function Home() {
  const { currentUser, loading, logout } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!loading && !currentUser)
      router.push("/login");
  }, [currentUser, loading]);

  return (
    <AppContainer title="Home">
      <Typography variant="h4" className="homeTitle">
        Test
      </Typography>
    </AppContainer>
  );
}
