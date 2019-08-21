import React from 'react'
import { Tree, Form} from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { EditreeCell } from './editreeCell'
import { useEditData } from './store/provider'

const RootTree:React.SFC<FormComponentProps> = ({form}) => {
    const [editData,] = useEditData()
    return (
        <Tree showLine blockNode>
            {
                EditreeCell({editData,form})
            }
        </Tree>
    )
}

export default Form.create()(RootTree)