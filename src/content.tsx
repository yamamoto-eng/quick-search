import { useRef, useState } from "react"
import { useEffectOnce } from "react-use"

import { GoogleButton } from "~components/GoogleButton"
import { getGoogleSearchURL } from "~utils/getGoogleSearchURL"

const Content = () => {
  const [selectedText, setSelectedText] = useState<string>("")
  const ref = useRef({ x: 0, y: 0 })

  const onClickSearchButton = () => {
    const url = getGoogleSearchURL(selectedText)
    window.open(url, "_blank", "noreferrer")
  }

  useEffectOnce(() => {
    document.addEventListener("mouseup", (e) => {
      ref.current = {
        x: e.pageX,
        y: e.pageY
      }

      // mouseup時には、選択された状態になっているので、処理を遅らせる
      setTimeout(() => {
        const text = document.getSelection().toString()
        setSelectedText(text)
      })
    })
  })

  if (!selectedText) {
    return null
  }

  return (
    <div
      style={{
        position: "absolute",
        transform: `translate(-50%, -50%)`,
        top: ref.current.y,
        left: ref.current.x
      }}>
      <GoogleButton onClick={onClickSearchButton} />
    </div>
  )
}

export default Content
