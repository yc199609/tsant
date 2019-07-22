import React,{ SFC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import './style.scss'

interface Iprops {
    form:any
}

const Login:SFC<Iprops & RouteComponentProps> = (props) =>{
    const { form: { getFieldDecorator, getFieldsValue } } = props;
    const handleLogin = ()=>{
        console.log(getFieldsValue())
        props.history.push('/')
    }
    return (
        <div className="form-box">
            <Form className="login-form">
                <Form.Item>
                    {
                        getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />
                        )
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />
                        )
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)
                    }
                    <span className="login-form-forgot login-form-href">
                        Forgot password
                    </span>
                    <Button onClick={handleLogin} type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                        Or
                    <span className="login-form-href"> Register now!</span>
                </Form.Item>
            </Form>
        </div>
    )
}

const WrappedNormalLoginForm = Form.create()(Login)
export default WrappedNormalLoginForm