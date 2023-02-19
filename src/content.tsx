import { GoogleButton } from "~components/GoogleButton"
import { getGoogleSearchURL } from "~utils/getGoogleSearchURL"

const Content = () => {
  const onClickSearchButton = () => {
    const url = getGoogleSearchURL("test")
    window.open(url, "_blank", "noreferrer")
  }

  return (
    <>
      <GoogleButton onClick={onClickSearchButton} />
    </>
  )
}

export default Content
