import Link from "next/link"
import { Anchor } from "./"

interface Social {
  details: Array<{
    href: string
    label: string
    delay?: string
  }>
}

const Footer = () => {
  const social: Social = {
    details: [
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
        href: "https://www.youtube.com/channel/UCtnF1a7ZVYnt-ybxErb1TDg",
        label: "youtube",
      },
    ],
  }
  return (
    <footer className="bg-[#120a3d] text-white">
      <nav className="flex gap-4 items-center justify-center p-10">
        {social.details.map(({ href, label }, I: number) => (
          <Link key={I} href={href} passHref>
            <Anchor>{label}</Anchor>
          </Link>
        ))}
      </nav>
    </footer>
  )
}

export default Footer
