import { useEffect, useState, createContext } from "react"
import { fetchPosts } from "../../Api"

function ApiProvider({ children }) {
  return <ApiContext.Provider>{children}</ApiContext.Provider>
}
export const ApiContext = createContext()
export default ApiProvider
