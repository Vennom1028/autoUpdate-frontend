import { Select } from '@mantine/core';
import { selectStyle } from './styles';
import { ChevronDown } from 'tabler-icons-react';

function SelectBot() {
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
            styles={selectStyle}
            data={[
                { value: 'Tohru', label: 'Tohru' },
            ]}
        />
    );
}

export default SelectBot