import { forwardRef, LegacyRef } from "react"

const Anchor = forwardRef(
  (props: JSX.IntrinsicElements["a"], ref: LegacyRef<HTMLAnchorElement>) => (
    <a className={"link"} ref={ref} {...props}>
      {props.children}
    </a>
  )
)

Anchor.displayName = "AnchorComponent"

export default Anchor
