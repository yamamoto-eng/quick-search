import type { FC, HTMLProps } from "react"
import { FcGoogle } from "react-icons/fc"

type SearchButtonProps = {
  onClick: HTMLProps<HTMLDivElement>["onClick"]
}

const GoogleButton: FC<SearchButtonProps> = (props) => {
  const { onClick } = props

  return (
    <div
      style={{
        width: "30px",
        height: "30px",
        backgroundColor: "white",
        boxShadow: "0px 2px 16px rgb(0 0 0 / 16%)",
        borderRadius: "50%",
        userSelect: "none",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      onClick={onClick}>
      <FcGoogle style={{ width: "20px", height: "20px" }} />
    </div>
  )
}

export { GoogleButton }
