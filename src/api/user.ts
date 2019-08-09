import service from 'utils/service'

const api = {
    register: 'api/users/register',
    login:'api/users/login',
    resetPassword:'api/users/resetPassword'
} 

interface User{
    readonly name: string,
    readonly password: string 
}

export const Login = (user:User) => (
    service({
        url:api.login,
        method: 'post',
        data:user
    })
)

