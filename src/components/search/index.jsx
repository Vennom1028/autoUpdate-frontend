import React from 'react'
import { TextInput } from '@mantine/core';
import { Search } from 'tabler-icons-react';
import { searchStyle } from './styles';

const SearchInput = () => {

    return (
        <TextInput
            icon={<Search size={18} />}
            radius="md"
            size="md"
            styles={searchStyle}
            placeholder="Search Versions"
            rightSectionWidth={42}
            spellCheck={false}
        />
    )
}

export default SearchInput