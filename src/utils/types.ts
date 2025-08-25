export interface UserType {
    name:string,
    favoriteCategory:string | null,
    favoriteRecipes:string[] | null
}

export interface UserContextType {
    user:UserType | null,
    setUser: (user:UserType) => void
}