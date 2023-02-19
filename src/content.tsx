import { useState } from "react"
import { useEffectOnce } from "react-use"

import { GoogleButton } from "~components/GoogleButton"
import { getGoogleSearchURL } from "~utils/getGoogleSearchURL"

const Content = () => {
  const [selectedText, setSelectedText] = useState<string>("")

  const onClickSearchButton = () => {
    const url = getGoogleSearchURL(selectedText)
    window.open(url, "_blank", "noreferrer")
  }

  useEffectOnce(() => {
    document.addEventListener("mouseup", () => {
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
    <>
      <GoogleButton onClick={onClickSearchButton} />
    </>
  )
}

export default Content
