import { useState, useEffect } from "react";
import axios from "axios";

export default (code) => {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_BE}/login`, {
            code,
        }).then(res => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            window.history.pushState({}, null, "/")
        }).catch((e) => {
            window.location = '/'
            console.log('error is:- ', e)
        })
    }, [code])

    useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
            axios.post(`${process.env.REACT_APP_BE}/refresh`, {
                refreshToken
            })
                .then(res => {
                    setAccessToken(res.data.accessToken)
                    setExpiresIn(res.data.expiresIn)
                })
                .catch((e) => {
                    window.location = '/';
                    console.log('The error is :- ', e)
                })
        }, (expiresIn - 60) * 1000);
        
        return () => clearInterval(interval)

    }, [refreshToken, expiresIn])

    return accessToken;
}
