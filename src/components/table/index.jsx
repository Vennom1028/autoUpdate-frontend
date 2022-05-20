import React, { useContext } from 'react'
import TableRow from '../tableRow'
import BotsContext from '../../context/bots'

import './table.css'
const Table = () => {

    const { selectedBot, } = useContext(BotsContext)

    return (
        <div className='table'>
            {selectedBot.versions.length == 0
                ? <h1 className='no-versions'>No Versions Found</h1>
                : selectedBot.versions.map(version => {
                    return <TableRow key={version.id} version={version.version} id={version.id} enabled={version.enabled} />
                })
            }

        </div>
    )
}

export default Table