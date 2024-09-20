export interface User{
    name: string
    age?:string
    password: string
}

export const UserData:User[] = [
    {
        name: "Osip",
        age: "unknown",
        password: "123"
    }
]