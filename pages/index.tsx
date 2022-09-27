import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect } from "react"
import { Anchor, Background, Footer, Header, SEO } from "../components"

const works: Array<{
  label: string
  href: string
}> = [
  {
    label: "Foodie Blog",
    href: "https://foodie-blog.vercel.app/",
  },
  {
    label: "Questionnaire",
    href: "https://next-genetics.vercel.app/",
  },
  {
    label: "Resume",
    href: "https://gian-carlo.vercel.app/",
  },
]

const Index = () => {
  const dimension = 120
  const observer = useRef<IntersectionObserver | null>()

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) return entry.target.classList.add("show")
          return entry.target.classList.remove("show")
        })
      },
      {
        root: document.querySelector("#scrollArea"),
        rootMargin: "0px",
        threshold: 0.4,
      }
    )
    const hiddenElements = document.querySelectorAll("section")
    hiddenElements.forEach((el) => observer.current?.observe(el))
  }, [])

  return (
    <Background>
      <SEO title="Gian Carlo" description="Hey! welcome to my Portfolio~" />
      <Header />
      <main className="grid gap-64 text-center paper py-64">
        <section className="w-3/4 mx-auto hide">
          <h1 className="title text-[#120a3d] dark:text-[#68da23]">
            Gian Carlo Carranza
          </h1>
          <h6 className="subtitle text-[#120a3d] dark:text-[#68da23]">
            Web Developer | Musician
          </h6>
          <Image
            draggable={false}
            className="rounded-full"
            src="/avatar.jpg"
            alt="avatar"
            width={dimension}
            height={dimension}
            layout="intrinsic"
          />
          <h2 className="heading">
            Hello there! My name is Gian Carlo, nice to meet you!
          </h2>
          <h6 className="body">
            I&apos;m a passionate programmer most of the time, musician in free
            time. I&apos;m aspiring to contribute to the IT industry and to my
            future clients hence I&apos;m eagerly learning new web trends and
            technology.
          </h6>
        </section>
        <section className="w-3/4 mx-auto hide">
          <div className="bg-white/30 dark:bg-black/30 border-2 rounded-xl border-green-black/20 p-10">
            <h2 className="heading">Web Developer</h2>
            <h6 className="subheading">Languages I speak:</h6>
            <h6 className="body">HTML, CSS, Javascript, PHP, Java</h6>
            <h6 className="subheading">
              Tools, Libraries, &amp; Frameworks I have used in the past:
            </h6>
            <ul className="list">
              <li>VS Code</li>
              <li>Terminal</li>
              <li>Github</li>
              <li>Firebase</li>
              <li>Node JS</li>
              <li>React JS</li>
              <li>Next JS</li>
              <li>Three JS</li>
              <li>p5 JS</li>
              <li>Express JS</li>
              <li>Tailwind CSS</li>
              <li>MUI</li>
              <li>SCSS / SASS</li>
              <li>Android Studio</li>
            </ul>
          </div>
        </section>
        <section className="w-3/4 mx-auto hide">
          <div className="bg-white/30 dark:bg-black/30 border-2 rounded-xl border-green-black/20 p-10">
            <h2 className="heading">Musician</h2>
            <h6 className="body">Self taught and classical music enthusiast</h6>
            <h6 className="subheading">My go to composers:</h6>
            <ul className="list">
              <li>Ludwig van Beethoven</li>
              <li>Niccolò Paganini</li>
              <li>Franz Liszt</li>
              <li>Frédéric François Chopin</li>
              <li>Sergei Vasilyevich Rachmaninoff</li>
              <li>Claude Debussy</li>
              <li>Francisco Buencamino Sr.</li>
              <li>Shaun Choo</li>
            </ul>
            <h6 className="subheading">My all-time favorite pieces</h6>
            <h6 className="body">
              Ballade No 1 in G Minor Op 23, Debussy - Reverie, Transcendental
              Etude No.8, Rachmaninoff/Kreisler - Liebesleid, Caprice No. 24 in
              A minor
            </h6>
          </div>
        </section>
        <section className="w-3/4 mx-auto hide">
          <h2 className="heading">Recent Works:</h2>
          <ul className="list">
            {works.map(({ label, href }, I: number) => (
              <li key={I} className="underline hover:animate-bounce">
                <Link href={href} passHref>
                  <Anchor>{label}</Anchor>
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="subheading">Upgrade in Portfolio coming soon...</h2>
        </section>
      </main>
      <Footer />
    </Background>
  )
}

export default Index
