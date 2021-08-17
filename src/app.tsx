import React from 'react'
import {Input} from './components/input'
import {Stats} from './components/stats'
import {Tasks} from './components/tasks'
import {ThemeProvider, GlobalStyles, Page} from './components/theme'
import {Header, darkModeState} from './components/header'
import {useRecoilValue} from 'recoil'

const Home = () => {
    return (
        <Page>
            <Header />
            <Stats />
            <Tasks />
            <Input />
        </Page>
    )
}

const App = () => {
    const darkMode = useRecoilValue(darkModeState)
    return (
        <ThemeProvider darkMode={darkMode}>
            <GlobalStyles />
            <Home />
        </ThemeProvider>
    )
}

export default App
