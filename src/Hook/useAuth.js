import { useContext } from "react"
import { AuthContexto } from "../Contexto/AuthContexto"

const useAuth = () => {

  const contexto = useContext(AuthContexto)

  return contexto

}

export default useAuth