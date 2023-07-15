import Image from "next/image"

const Header = () => {
  const dimension = 80
  return (
    <header className="dark:bg-black bg-white dark:text-white duration-300 ease-in-out flex items-center relative">
      <Image
        draggable={false}
        alt="Syntexia Logo"
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
