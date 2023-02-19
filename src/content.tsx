import { GoogleButton } from "~components/GoogleButton"

const Content = () => {
  const onClickSearchButton = () => {
    console.log("clicked")
  }

  return (
    <>
      <GoogleButton onClick={onClickSearchButton} />
    </>
  )
}

export default Content
