import React from 'react'
import { Button } from "@mantine/core"
import { ButtonStyle } from './styles'

const button = ({ children }) => {
    return (
        <Button radius="md" size="md" styles={ButtonStyle} >
            {children}
        </Button>
    )
}

export default button