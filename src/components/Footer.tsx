import Link from "next/link"

type SocialDetailType = {
    href: string
    label: string
    delay?: string
}

const Footer = () => {
  const social: SocialDetailType[] = [
    {
      href: "https://www.facebook.com/weepingpianist",
      label: "facebook",
    },
    {
      href: "https://www.fiverr.com/resyntech",
      label: "fiverr",
    },
    {
      href: "https://github.com/Resyntech",
      label: "github",
    },
    {
      href: "https://www.linkedin.com/in/gian-carlo-carranza-5a6861216/",
      label: "linkedin",
    },
    {
      href: "https://www.youtube.com/@realsyntexia",
      label: "youtube",
    },
  ]

  return (
    <footer className="bg-[#120a3d] text-white">
      <nav className="flex gap-4 items-center justify-center p-10">
        {social.map(({ href, label }, I: number) => (
          <Link key={I} href={href} passHref>
            {label}
          </Link>
        ))}
      </nav>
    </footer>
  )
}

export default Footer