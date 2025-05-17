import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// Import images
import skywallsImage from '../../public/assets/skywalls.png'
import plasticDetectionImage from '../../public/assets/Pd1.jpg'
import covidTrackerImage from '../../public/assets/Covid-snap1.png'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'SkyWalls',
    description: 'A modern wallpaper platform built with React and Sanity CMS.',
    tags: ['React', 'Sanity', 'Tailwind'],
    image: skywallsImage,
    link: 'https://skywallsproject.netlify.app/',
  },
  {
    title: 'Plastic Detection',
    description: 'Real-time plastic waste detection system using YOLOv5.',
    tags: ['Python', 'YOLOv5', 'Computer Vision', 'Deep Learning'],
    image: plasticDetectionImage,
    link: 'https://github.com/NckCode/plastic-detection-yolo',
  },
  {
    title: 'COVID Tracker',
    description:
      'Real-time COVID-19 statistics dashboard with interactive visualizations.',
    tags: ['React', 'API Integration', 'Data Visualization'],
    image: covidTrackerImage,
    link: 'https://github.com/NckCode/Covid-Tracker',
  },
]

const Projects = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const projectRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
      })

      // Project cards animation with stagger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom bottom',
        },
      })

      projectRefs.current.forEach((project, index) => {
        tl.from(
          project,
          {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
          },
          index * 0.3
        ) // Stagger each project
      })

      // Hover animations for project cards
      projectRefs.current.forEach((project) => {
        const image = project.querySelector('.image-wrapper img')
        const content = project.querySelector('.mt-6')
        const overlay = project.querySelector('.bg-black\\/50')

        project.addEventListener('mouseenter', () => {
          gsap.to(image, {
            scale: 1.1,
            duration: 0.5,
            ease: 'power2.out',
          })
          gsap.to(content, {
            y: -10,
            duration: 0.3,
            ease: 'power2.out',
          })
          gsap.to(overlay, {
            opacity: 1,
            duration: 0.3,
          })
        })

        project.addEventListener('mouseleave', () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
          })
          gsap.to(content, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
          })
          gsap.to(overlay, {
            opacity: 0,
            duration: 0.3,
          })
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black px-6 md:px-10 py-32 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-light mb-24 tracking-widest text-center"
        >
          SELECTED WORK
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {projects.map((project, index) => (
            <article
              key={project.title}
              ref={(el) => (projectRefs.current[index] = el)}
              className="group w-full max-w-md mx-auto"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="image-wrapper aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-light">
                      View Project
                    </span>
                  </div>
                </div>
                <div className="mt-8 space-y-4 text-center">
                  <h3 className="text-2xl font-light text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-3 justify-center mt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-sm text-gray-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
