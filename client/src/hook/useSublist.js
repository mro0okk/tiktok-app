import { useState } from "react"
function useSublist() {
  const [isShowing, setIsShowing] = useState(false)

  function toggle() {
    setIsShowing(!isShowing)
  }
  return [isShowing, toggle]
}

export default useSublist
