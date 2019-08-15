import React, { SFC, useContext } from 'react'
import Form, { FormComponentProps } from 'antd/es/form'
import { EditableContext } from './editableContext'
import { InputNumber, Input } from 'antd';

interface IProps {
    record: {
        name: string,
        path: string,
        code: string
    },
    editing:boolean,
    title: string,
    inputType: string,
    dataIndex:'name'|'path'|'code'|undefined,
    render?: () => JSX.Element
}

export const EditableCell:SFC<FormComponentProps&IProps> = (props) => {
    const form = useContext(EditableContext)
    const {
        editing,
        record,
        title,
        dataIndex,
        render,
        children,
        inputType,
        ...restProps
    } = props
    const getInput = () => {
        if(inputType==='number') {
            return <InputNumber />
        }
        return <Input />
    }
    return (
        <td {...restProps}>
            {
                editing?(
                    <Form.Item>
                        {form.getFieldDecorator(dataIndex,{
                            rules: [{
                                required:true,
                                message: `${title} is required`
                            }],
                            initialValue: dataIndex? record[dataIndex]:''
                        })(getInput())}
                    </Form.Item>
                ):(children)
            }
        </td>
    )
}
