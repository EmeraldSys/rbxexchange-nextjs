import * as React from "react"

export async function getServerSideProps({ res, params }) {
    res.statusCode = 302;
    res.setHeader("Location", "/app/home");
    return { props:{} };
}

export default function Index() {
    return null;
}