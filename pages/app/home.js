import * as React from "react"
import { useRouter } from "next/router"
import { app, useAuth } from "../../contexts/AuthContext"
import { getFirestore, doc, getDoc } from "firebase/firestore"

import AppContainer from "../../components/AppContainer"
import Typography from "@mui/material/Typography"

/* sx={{ bgcolor: "#222" }} */
/* <Head>
        <title>RBXExchange</title>
      </Head> */

export default function Home() {
  const { currentUser, loading, logout } = useAuth();
  const router = useRouter();
  const db = getFirestore(app);

  const titleRef = React.useRef(null);

  React.useEffect(() => {
    if (!loading && !currentUser)
      router.push("/login");
  }, [currentUser, loading]);

  React.useEffect(async () => {
    if (titleRef.current != null) {
      const docRef = doc(db, "userinfo", currentUser.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        if (typeof data.displayName == "string") {
          titleRef.current.innerHTML = "Hello, " + data.displayName + "!";
        }
      }
    }
  }, [titleRef, currentUser]);

  return (
    <AppContainer title="Home">
      <Typography variant="h4" className="homeTitle">
        <div ref={titleRef}>Loading...</div>
      </Typography>
    </AppContainer>
  );
}
