import { useState, useEffect } from 'react';
import Home from './Home'
import Journey from './Journey'

const AUTH_URL = "https://accounts.spotify.com/authorize?response_type=token&client_id=b9db9658c1ce47e1820adf95d965c6f0&scope=user-top-read&redirect_uri=http://localhost:5173/"

const auth = () => {
    window.location.href = AUTH_URL;
}

const getParams = (hash) =>
    Object.fromEntries(
        hash.substring(1).split("&").map((param) => {
        const [key, value] = param.split("=");
        return [key, value];
    })
);

export default function App() {
    const [params, setParams] = useState(null);

    useEffect(() => {
        if (window.location.hash) {
            setParams(getParams(window.location.hash));
            window.location.hash = "";
        }
    }, []);

    return (
        params ? <Journey params={params} /> : <Home auth={auth} />
    );
}