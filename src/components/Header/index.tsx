'use client'

import { useUserContext } from "@/utils/contexts";
import { UserContextType } from "@/utils/types";

const Header = ()=> {
    const {user} = useUserContext() as UserContextType;
    return (
        <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
            <h1 className="font-bold text-2xl">My Recipes</h1>
            {user && <h2>Hi, {user.name}</h2>}
            {user &&
            user.favoriteCategory && <h3>you really like {user.favoriteCategory}</h3>
            }
        </header>
    )
}
export default Header;