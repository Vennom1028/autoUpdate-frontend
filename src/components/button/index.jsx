import React from 'react'
import { Button } from "@mantine/core"
import { ButtonStyle } from './styles'

const button = ({ action, children, size }) => {
    return (
        <Button radius="md" size={size} styles={ButtonStyle} onClick={action} >
            {children}
        </Button>
    )
}

export default button