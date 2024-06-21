'use client'
import React, { useEffect } from 'react'
import { useAuth } from '../hooks/auth'
import useMaterial from '../hooks/material'
import { Td } from './Table'

const TrArticle = async ({ data }) => {
    const { token } = useAuth()
    const { show } = useMaterial()
    const material = await show({ id: data, token })
    console.log(material)
    return (<tr>
        <Td>{material.id}</Td>
        <Td>{material.name}</Td>
        <Td>{material.quantity}</Td>
    </tr>
    )
}

export default TrArticle