export const selectStyle = {
    root: {
        width: "5%",
    },
    dropdown: {
        cursor: 'pointer',
        backgroundColor: '#141414',

    },
    hovered: {
        backgroundColor: '#222222',
    },
    selected: { backgroundColor: '#222222' },
    input: {
        backgroundColor: "#141414",
        cursor: 'pointer',
        borderColor: '#222222',
        "&:focus": {
            borderColor: "#222222 !important"
        }

    },
    rightSection: {
        color: "#383737",
        pointerEvents: 'none'
    }

}