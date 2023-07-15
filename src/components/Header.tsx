import Image from 'next/image'

const Header = () => {
    const dimension = 80
    return (
        <header className="relative flex items-center bg-white p-6 duration-300 ease-in-out dark:bg-black dark:text-white">
            <div className="h-12 w-12">
                <Image
                    draggable={false}
                    alt="Syntexia Logo"
                    src="/SyntexiaLogo.svg"
                    height={dimension}
                    width={dimension}
                />
            </div>
            <div className="absolute right-10 z-10">
                <p>Portfolio</p>
            </div>
        </header>
    )
}

export default Header
