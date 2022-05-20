import React, { useContext } from 'react'
import { Group, Switch } from '@mantine/core'
import { Trash, Download, Check } from 'tabler-icons-react'
import BotsContext from '../../context/bots'
import { switchStyle } from './styles'

import './tableRow.css'
const TableRow = ({ id, version, enabled }) => {
    const {selectedBot, setSelectedBot, setEnabled } = useContext(BotsContext)
    const setChecked = (value) => {
        const newSelected = { ...selectedBot }
        newSelected.versions.forEach(version => {
            if (version.id === id) {
                version.enabled = value
            }
        })
        setSelectedBot(newSelected)
        setEnabled(version, value)
    }

    return (

        <div className='tableRow'>
            <Group position='center' spacing="xl">
                <p>{version}</p>
                <p>{id}</p>
                <Group position='right' spacing="sm">
                    <Download size={18} color="green" cursor="pointer" />
                    <Trash size={18} color="red" cursor="pointer" />
                    <Switch pointer="cursor" color="violet" checked={enabled} onChange={(event) => setChecked(event.currentTarget.checked)} styles={switchStyle} />
                </Group>
            </Group>

        </div>
    )
}

export default TableRow