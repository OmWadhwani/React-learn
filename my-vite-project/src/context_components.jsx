import {useContext, createContext} from "react"

function Component(){
    const {user, setUser} = useContext(UserContext)
    return(
        <div>
            <UserContext.provider value ="user">
                <h1>{`Hello ${user}!`}</h1>
            </UserContext.provider>
        </div>
    )
}

export default Component