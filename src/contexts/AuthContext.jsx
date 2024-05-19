import { createContext, memo, useReducer } from 'react'
import pb from '@lib/pocketbase'

const AuthContext = createContext()

const authReducer = (state, action) => {
  const ACTION_HANDLERS = {
    LOGIN: ({ action }) => ({ user: action.payload }),
    LOGOUT: () => ({ user: null }),
    default: ({ state }) => state
  }

  const handleAction = ACTION_HANDLERS[action.type] || ACTION_HANDLERS.default

  return handleAction({ state, action })
}

const AuthContextProvider = memo(({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: pb.authStore.model ?? null
  })

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
})

export { AuthContext, AuthContextProvider, authReducer }
