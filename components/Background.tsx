import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../src/redux/hooks"
import { getUI, setTheme } from "../src/redux/reducers/uiReducer"

const Background = (props: any) => {
  const dispatch = useAppDispatch()
  const darkmode = useAppSelector((state) => state.ui.darkmode)

  useEffect(() => {
    dispatch(getUI("darkmode"))
  }, [dispatch])
  const baseStyle =
    "h-screen duration-300 ease-in-out min-h-screen duration-300 ease-in-out"

  return (
    <div className={darkmode ? `dark paper ${baseStyle}` : baseStyle}>
      {props.children}
      <button
        className="border-2 p-2 rounded-xl capitalize fixed bottom-10 right-10 text-white bg-[#120a3d] border-[#120a3d]"
        onClick={() => dispatch(setTheme(JSON.stringify(!darkmode)))}
      >
        {darkmode ? "dark" : "light"}
      </button>
    </div>
  )
}

export default Background
