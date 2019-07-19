import React, { useState } from 'react'
import { ThemeContext } from './Context'
import Toolbar from './Toolbar'
import { Button } from 'antd'

const Home:React.FC = ()=>{
    const [color, setColor] = useState('')
    const [theme, setTheme] = useState('pink')
    return(
        <div>
            这是首页
            <ThemeContext.Provider value={theme}>
                <Toolbar/>
            </ThemeContext.Provider>
            <input
                type="text" 
                value={color}
                onChange={(e)=>setColor(e.target.value)}
            />
            <Button
                type="primary"
                onClick={()=>setTheme(color)}
            >确定</Button>
        </div>
    )
}

export default Home
