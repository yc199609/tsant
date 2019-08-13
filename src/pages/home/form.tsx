import React,{SFC} from 'react'
import { Form, Input, Button, Row } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { StoreState as MenuStore } from 'store/menu-model/types'

interface IProps extends FormComponentProps {
    menus: MenuStore['menus']
}

const EditForm:SFC<IProps> = ({menus}) => {
    console.log(menus)
    return(
        <div>
            <Form layout="inline">
                <Row>
                    <Form.Item label="名称">
                        <Input placeholder="伟大的yc"></Input>
                    </Form.Item>
                    <Form.Item label="路径">
                        <Input placeholder="伟大的yc"></Input>
                    </Form.Item>
                    <Form.Item label="代码">
                        <Input placeholder="伟大的yc"></Input>
                    </Form.Item>
                    <Button>增加</Button>
                </Row>
            </Form>
        </div>
    )
}

export const HomeEditForm = Form.create<IProps>()(EditForm)