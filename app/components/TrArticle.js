'use client'
import React, { useEffect, useState } from 'react'
import { useArticle } from '../hooks/article'
import { useAuth } from '../hooks/auth'
import { Td } from './Table'
import useMaterial from '../hooks/material'

const TrArticle = ({id}) => {

    const {token}= useAuth()
    const {show}= useMaterial()
    const [data, setData] = useState()

    const datos = async () => {
        const data = await show({id, token})
        setData(data)
    }
    useEffect(() => {
        datos()
    }, [])
    
    return (
        <tr className="bg-gray-200">
            <Td>{data?.id}</Td>
            <Td>{data?.name}</Td>
            <Td>{data?.quantity}</Td>
        </tr>
    )
}

export default TrArticle