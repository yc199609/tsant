import React,{ useContext } from 'react'
import { ThemeContext } from './Context'

const ThemeButton:React.SFC = () => {
    const value = useContext(ThemeContext)
    return(
        <div style={{
            backgroundColor:value,
            width:'400px',
            height:'300px'
        }}></div>
    )
}

export default ThemeButton