import * as React from "react"
import { useRouter } from "next/router"

import LoginModal from "../components/LoginModal"
import { useAuth } from "../contexts/AuthContext"

export default function Login() {
    const router = useRouter();
    const { currentUser } = useAuth();

    React.useEffect(() => {
        if (currentUser) router.push("/app");
    });

    return <LoginModal />
}