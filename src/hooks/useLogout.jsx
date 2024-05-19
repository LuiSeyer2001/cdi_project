import { useAuthContext } from '@hooks'
import pb from '@lib/pocketbase'

const useLogout = () => {
  const { dispatch } = useAuthContext()

  const logout = () => {
    pb.authStore.clear()
    dispatch({ type: 'LOGOUT' })
  }

  return { logout }
}

export default useLogout
