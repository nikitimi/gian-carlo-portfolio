import Image from "next/image"

const Header = () => {
  const dimension = 80
  return (
    <header className="paper flex items-center relative">
      <Image
        draggable={false}
        alt="Logo"
        src="/SyntexiaLogo.svg"
        height={dimension}
        width={dimension}
        layout="fixed"
      />
      <div className="absolute right-10">
        <p>Portfolio</p>
      </div>
    </header>
  )
}

export default Header
