'use client'
export default function lsdynamic(){
    // console.log('hhii')
    let users =  localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : []
    console.log(users)
    return users
}