import React, { useReducer } from 'react'
import { Tree, Form} from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { EditableContext } from './editableContext'
import { EditreeCell } from './editreeCell'
import data1 from './data'
import { editKeyReducer, dataReducer } from './reducer'

const Editree:React.SFC<FormComponentProps> = ({form}) => {
    const editKey = useReducer(editKeyReducer,'')
    const data = useReducer(dataReducer,data1)
    const [treedata, datadispath] = data
    return (
        <EditableContext.Provider value={{ form, editKey, data }}>
            <Tree showLine blockNode >
                {
                    EditreeCell({data:treedata,form})
                }
            </Tree>
        </EditableContext.Provider>
    )
}

export default Form.create()(Editree)