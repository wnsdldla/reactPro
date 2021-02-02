const users = [
    {email : "one@naver.com",password:"1234",name:"Kim"},
    {email : "two@naver.com",password:"5678",name:"Park"},
    {email : "three@naver.com",password:"9012",name:"Hong"},
]
export function signIn({email, password}){
    const user = users.find(
        (user) => user.email === email && user.password === password
    )
    if( user === undefined) throw new Error()
    return user
}