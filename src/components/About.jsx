import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageCarousel from "./ImageCarousel";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations with timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "center center",
        },
      });

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      })
        .from(
          imageRef.current,
          {
            x: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .from(
          contentRef.current,
          {
            x: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=1"
        );

      // Paragraphs fade in with scroll
      const paragraphs = contentRef.current.querySelectorAll("p");
      paragraphs.forEach((p, index) => {
        gsap.from(p, {
          scrollTrigger: {
            trigger: p,
            start: "top bottom-=50",
            end: "top center",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0.3,
          duration: 1,
        });
      });

      // Image parallax effect
      gsap.to(imageRef.current.querySelector("img"), {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: "20%",
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black px-6 md:px-10 py-32 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-light mb-24 tracking-widest text-center"
        >
          ABOUT
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div
            ref={imageRef}
            className="w-full relative overflow-hidden flex justify-center"
          >
            <div className="w-full max-w-md">
              <ImageCarousel />
            </div>
          </div>

          <div
            ref={contentRef}
            className="w-full flex flex-col justify-center space-y-10 text-center md:text-left"
          >
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              I'm a full-stack software engineer with experience building
              scalable enterprise web applications. In the images you can see
              three of my role models. These people have inspired me to be
              better and taught me the importance of hard work and dedication.
            </p>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              My tech stack includes React.js, JavaScript, Docker, CSS, Java,
              and Tailwind. I'm passionate about creating fast, accessible, and
              interactive user interfaces.
            </p>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              I began my career at Jio Platforms Limited, where I contributed to
              the development of both CRM and PRM systems, handling critical
              infrastructure for operations.And creating a micro-frontend
              architecture which can be resued.
            </p>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Currently exploring new opportunities to grow and make an impact
              with teams that value clean code, thoughtful design, and
              innovative thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
