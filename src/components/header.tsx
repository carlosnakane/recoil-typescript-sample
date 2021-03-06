import React from 'react'
import styled from 'styled-components'
import {Heading} from './heading'
import {atom} from 'recoil'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
`

export const darkModeState = atom({
    key: 'darkMode',
    default: true,
})

export const Header: React.FC = () => {
    return (
        <Container>
            <Heading />
        </Container>
    )
}
