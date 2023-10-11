export const getLogin = async(login) =>{
    const response = await fetch(`https://api.escuelajs.co/api/v1/auth/login`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(login)
    })
    const data = response.json()
    return data
}


export const getSesion = async(token) =>{
    const response = await fetch(`https://api.escuelajs.co/api/v1/auth/profile`,{
        headers: {"Authorization": `Bearer ${token}`}
    })
    const data = response.json()
    return data
}