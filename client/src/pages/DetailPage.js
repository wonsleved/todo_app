import React from 'react'
import {useParams} from 'react-router-dom'
import {useHttp} from "../hooks/http.hook";
import {useCallback, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthContex";
import {useContext} from "react/cjs/react.production.min";
import {Loader} from "../components/Loader";


export const DetailPage = () => {
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [link, setLink] = useState(null)
    const linkId = useParams().id // id модели - ссылки


    const getLink = useCallback(async () => {
        try {
            const fetched = await request(`/api/link/${linkId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setLink(fetched)
        } catch (e) {
        }
    } ,[token, linkId, request])

    useEffect(() => {
        getLink()
    }, [getLink])

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <h1>Detail Page</h1>
        </div>
    )
}