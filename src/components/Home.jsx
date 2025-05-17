import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Home.css'
// Import images
import greekImage from '../../public/assets/Greek.png'
import deskImage from '../../public/assets/Desk.JPG'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  {
    category: 'Frontend',
    items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Spring Boot', 'Java'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'VS Code', 'Postman'],
  },
  {
    category: 'Other',
    items: ['REST APIs', 'Responsive Design', 'UI/UX', 'Agile'],
  },
]

const Home = () => {
  const mainRef = useRef(null)
  const nameRef = useRef(null)
  const profileImageRef = useRef(null)
  const devImageRef = useRef(null)
  const devTitleRef = useRef(null)
  const skillsRef = useRef(null)
  const skillItemRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations
      gsap.from(nameRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
      })

      gsap.from(profileImageRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        delay: 0.3,
        ease: 'power3.out',
      })

      // Developer section animations
      ScrollTrigger.create({
        trigger: devImageRef.current,
        start: 'top center+=100',
        onEnter: () => {
          gsap.from(devImageRef.current, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
          })
          gsap.from(devTitleRef.current, {
            x: 100,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: 'power3.out',
          })
        },
      })

      // Skills animations
      ScrollTrigger.create({
        trigger: skillsRef.current,
        start: 'top center',
        onEnter: () => {
          skillItemRefs.current.forEach((item, index) => {
            gsap.from(item, {
              y: 30,
              opacity: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: 'power3.out',
            })
          })
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main ref={mainRef} className="bg-black">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-10">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 md:gap-20">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h1
              ref={nameRef}
              className="text-5xl md:text-7xl font-light tracking-wider  mb-8"
            >
              NISHANT MUTHIYA
            </h1>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div
              ref={profileImageRef}
              className="image-wrapper w-80 h-80 mx-auto"
            >
              <img src={greekImage} alt="Profile" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-10 py-32">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          <div className="w-full flex flex-col items-center gap-20">
            <h2
              ref={devTitleRef}
              className="text-4xl md:text-6xl font-light tracking-widest text-center order-2 md:order-1"
            >
              FULL STACK DEVELOPER
            </h2>
            <div
              ref={devImageRef}
              className="w-full max-w-2xl order-1 md:order-2 mx-auto"
            >
              <div className="image-wrapper aspect-video">
                <img src={deskImage} alt="Developer" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={skillsRef}
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-10 py-32"
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-light mb-24 tracking-widest text-center">
            SKILLS
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-5xl mx-auto">
            {skills.map((skillGroup, groupIndex) => (
              <div
                key={skillGroup.category}
                className="space-y-8 text-center"
                ref={(el) => (skillItemRefs.current[groupIndex] = el)}
              >
                <h3 className="text-2xl font-light tracking-wider text-white/80">
                  {skillGroup.category.toUpperCase()}
                </h3>
                <ul className="space-y-4">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
