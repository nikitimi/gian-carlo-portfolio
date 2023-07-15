import Image from "next/image"
import { useEffect, useRef } from "react"
import { Background, Header, SEO } from "../components"
import dynamic from "next/dynamic"
import Link from "next/link"



const Main = () => {
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
 const techstack = [
   "VS Code",
   "Terminal",
   "Github",
   "Firebase",
   "NodeJS",
   "ReactJS",
   "ThreeJS",
   "NextJS",
   "p5JS",
   "Express",
   "TailwindCSS",
   "MUI",
   "SCSS/SASS",
   "Android Studio",
 ]
 const composers = [
   "Ludwig van Beethoven",
   "Niccolò Paganini",
   "Franz Liszt",
   "Frédéric François Chopin",
   "Sergei Vasilyevich Rachmaninoff",
   "Claude Debussy",
   "Francisco Buencamino Sr.",
   "Shaun Choo",
 ]
 const DIMENSION = 120

 return <main className="grid gap-2 dark:bg-black bg-white dark:text-white duration-300 ease-in-out">
       <section className="relative isolate bg-slate-300 dark:bg-blue-syntexia dark:after:from-violet-syntexia dark:after:to-green-syntexia after:bg-gradient-to-tr after:from-violet-syntexia after:to-violet-syntexia after:absolute after:inset-0 after:-skew-y-6 after:-z-20">
         <div className="max-w-3xl mx-auto px-4 duration-300">
           <h1 className="m-4 text-slate-300 dark:text-green-syntexia font-bold text-4xl sm:text-5xl xl:text-6xl">Gian Carlo Carranza</h1>
           <h6 className="mb-8 text-slate-300 dark:text-green-syntexia font-bold text-lg sm:text-xl xl:text-3xl">Web Developer | Musician</h6>
           <div className="rounded-full">
           <Image
             draggable={false}
             // className="rounded-full"
             src="/avatar.jpg"
             alt=''
             width={DIMENSION}
             height={DIMENSION}
             layout="intrinsic"
           />
           </div>
           <h2 className="m-4 text-slate-300 dark:text-green-syntexia font-semibold text-base sm:text-lg xl:text-2xl">
             Hello there! My name is Gian Carlo, nice to meet you!
           </h2>
           <h6 className="text-slate-300 dark:text-white font-normal text-sm sm:text-base xl:text-xl">
             I&apos;m a passionate programmer most of the time, musician in
             free time. I&apos;m aspiring to contribute to the IT industry and
             to my future clients hence I&apos;m eagerly learning new web
             trends and technology.
           </h6>
         </div>
       </section>
       <section>
         <div className="max-w-3xl mx-auto px-4 duration-300 columns">
           <h2 className="m-4 text-slate-300 dark:text-green-syntexia  font-semibold text-base sm:text-lg xl:text-2xl">Web Developer</h2>
           <h6 className="my-8 p-2 rounded-xl bg-slate-300 dark:text-violet-syntexia bg-blue-syntexia/80 dark:bg-white/80 font-semibold text-sm sm:text-base xl:text-xl">Languages I speak:</h6>
           <h6 className="text-slate-300 dark:text-white font-normal text-sm sm:text-base xl:text-xl">HTML, CSS, Javascript, PHP, Java</h6>
           <h6 className="my-8 p-2 rounded-xl bg-slate-300 dark:text-violet-syntexia bg-blue-syntexia/80 dark:bg-white/80 font-semibold text-sm sm:text-base xl:text-xl">
             Tools, Libraries, &amp; Frameworks I have used in the past:
           </h6>
           <ul className="flex flex-col gap-2 font-light text-sm sm:text-base xl:text-lg">
             {techstack.map((value) => (
               <li key={value}>{value}</li>
             ))}
           </ul>
         </div>
       </section>
       <section className="wavy columns">
         <div className="max-w-3xl mx-auto px-4 duration-300">
           <h2 className="m-4 text-slate-300 dark:text-green-syntexia  font-semibold text-base sm:text-lg xl:text-2xl">Musician</h2>
           <h6 className="text-slate-300 dark:text-white font-normal text-sm sm:text-base xl:text-xl">Self taught and classical music enthusiast</h6>
           <h6 className="my-8 p-2 rounded-xl bg-slate-300 dark:text-violet-syntexia bg-blue-syntexia/80 dark:bg-white/80 font-semibold text-sm sm:text-base xl:text-xl">My go to composers:</h6>
           <ul className="flex flex-col gap-2 font-light text-sm sm:text-base xl:text-lg">
             {composers.map((value) => (
               <li key={value}>{value}</li>
             ))}
           </ul>
           <h6 className="my-8 p-2 rounded-xl bg-slate-300 dark:text-violet-syntexia bg-blue-syntexia/80 dark:bg-white/80 font-semibold text-sm sm:text-base xl:text-xl">My all-time favorite pieces</h6>
           <h6 className="text-slate-300 dark:text-white font-normal text-sm sm:text-base xl:text-xl">
             Ballade No 1 in G Minor Op 23, Debussy - Reverie, Transcendental
             Etude No.8, Rachmaninoff/Kreisler - Liebesleid, Caprice No. 24 in
             A minor
           </h6>
         </div>
       </section>
       <section>
         <div className="max-w-3xl mx-auto px-4 duration-300">
           <h2 className="m-4 text-slate-300 dark:text-green-syntexia  font-semibold text-base sm:text-lg xl:text-2xl">Recent Works:</h2>
           <ul className="flex flex-col gap-2 font-light text-sm sm:text-base xl:text-lg">
             {works.map(({ label, href }, I: number) => (
               <li key={I} className="underline hover:animate-bounce">
                 <Link href={href} passHref>
                   {label}
                 </Link>
               </li>
             ))}
           </ul>
           <h2 className="my-8 p-2 rounded-xl bg-slate-300 dark:text-violet-syntexia bg-blue-syntexia/80 dark:bg-white/80 font-semibold text-sm sm:text-base xl:text-xl">Upgrade in Portfolio coming soon...</h2>
         </div>
       </section>
     </main>
}
const Index = () => {
  const observer = useRef<IntersectionObserver | null>()

  const DynamicFooter = dynamic(() => import('../components/Footer'), {
    loading: () => <p>Loading</p>
   })

  useEffect(() => {
    let unsub = true
    function initializeObserver() {
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const classList = ["opacity-100", "blur-none", "translate-x-0"]
            if (entry.isIntersecting) return classList.forEach((className) => entry.target.classList.add(className))
            classList.forEach((className) => entry.target.classList.remove(className))
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
    }
    if (unsub) {
      initializeObserver()
    }
    return () => { unsub = false}
  }, [])

  return (
    <Background>
      <SEO title="Gian Carlo" description="Hey! welcome to my Portfolio~" />
      <Header />
      <Main />
      <DynamicFooter />
    </Background>)
  
}

export default Index
