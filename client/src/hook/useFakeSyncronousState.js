import { useState } from "react"

export default function useFakeSyncronousState(initValue) {
  const [lastState, updateState] = useState(initValue)

  let curr = lastState

  const getState = () => curr

  const setState = (newVal) => {
    curr = newVal
    updateState(newVal)
    return curr
  }

  return {
    getState,
    setState,
  }
}
