import type { ComponentProps } from "react"

type TButton = ComponentProps<"button">

function Button({children ,className,...rest}:TButton) {
  return (
   
        <button className={`py-1 px-2 hover:shadow ${className || ""}`}{...rest}>{children}</button>
   
  )
}

export default Button