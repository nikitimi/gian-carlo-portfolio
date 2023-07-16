import Image from 'next/image'

const Header = () => {
    const dimension = 80
    return (
        <header className="fixed inset-x-0 z-10 flex items-center bg-white/90 p-6 duration-300 ease-in-out dark:bg-black/90 dark:text-white">
            <div className="flex h-12 w-12 items-center gap-1">
                <Image
                    draggable={false}
                    alt="Syntexia Logo"
                    src="/SyntexiaLogo.svg"
                    height={dimension}
                    width={dimension}
                />
                <p className="dark:text-green-syntexia">yntexia</p>
            </div>
            <div className="absolute right-10 z-10">
                <p>Portfolio</p>
            </div>
        </header>
    )
}

export default Header
