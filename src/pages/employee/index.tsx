import React from 'react'
import Editree from 'components/editree'
import data from './data'
import { Button } from 'antd';

const Employee:React.SFC = () => {
    const data1 = [...data]
    return (
        <>
            <Editree data={data1} />
            <Button onClick={()=>{console.log(data1)}}>点击</Button>
        </>
    )
}

export default Employee