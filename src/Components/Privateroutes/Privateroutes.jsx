import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";


const Privateroutes = ({children}) => {
    const {user} = useContext(AuthContext)
  if(user){
    return children
  }
};

export default Privateroutes;