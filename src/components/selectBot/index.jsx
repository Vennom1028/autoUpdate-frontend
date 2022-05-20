import { Select } from '@mantine/core';
import { selectStyle } from './styles';
import { ChevronDown } from 'tabler-icons-react';
import BotsContext from '../../context/bots';
import { useContext } from 'react';

function SelectBot() {

    const { bots, setBots, selectedBot, setSelectedBot } = useContext(BotsContext);

    const onChangeHandler = (value) => {
        bots.forEach(bot => {
            if (bot.name === value) {
                console.log(bot)
                setSelectedBot(bot)
            }
        });

    }
    return (
        <Select
            placeholder="Tohru"
            size='md'
            rightSection={<ChevronDown size={14} />}
            rightSectionWidth={30}
            nothingFound="No Bot Found"
            transition="pop-top-left"
            transitionDuration={80}
            transitionTimingFunction="ease"
            defaultValue="Tohru"
            onChange={(value) => { { onChangeHandler(value) } }}
            styles={selectStyle}
            data={bots.map(bot => { return { value: bot.name, label: bot.name } })}
        />
    );
}

export default SelectBot