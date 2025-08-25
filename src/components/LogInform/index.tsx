'use client'
import { UserArray } from "@/data/users"
import { useUserContext } from "@/utils/contexts"
import { UserContextType } from "@/utils/types"
import { useState } from "react"
 
const LogInForm = () => {
    const [userInput, setUserInput] = useState<string>('')
    const [userNotFound, setuserNotFound] = useState<boolean>(true)
    const { user, setUser } = useUserContext() as UserContextType
 
 
    const handleClick = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const loggedInUser = UserArray.filter(user => user.name === userInput)
        if (!loggedInUser[0]) setuserNotFound(false);
        else setuserNotFound(true)
 
        setUser(loggedInUser[0])
    }
 
    console.log("user is:" + user?.name)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  
        console.log(userInput)
 
    }
    return (
        <>
            <form action="">
                <label htmlFor="username">Enter your username</label>
                <input onChange={handleChange} id="username" placeholder="username" />
                <label htmlFor="password">Enter your password</label>
                <input id="password" placeholder="Enter your password" />
                <button onClick={handleClick}>Log In</button>
            </form>
 
            {userNotFound && (
                <p className=" text-red-600 font-medium">User not found</p>
            )}
 
            {user && (
                <p className=" text-green-600 font-medium">Logged in as {user.name}</p>
            )}
        </>
    )
}
export default LogInForm
 