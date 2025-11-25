import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails, socialMediaUrl } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const { linkdein, github, twitter, instagram } = socialMediaUrl;

  const welcomeRef = useRef();
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const descRef = useRef();
  const socialRef = useRef();
  const skillsRef = useRef();
  const myimageref = useRef();

  // Christmas Snowfall Component
  const Snowfall = () => {
    const snowflakeCount = 90; // Adjust for more/less snow

    return (
      <>
        {Array.from({ length: snowflakeCount }).map((_, i) => (
          <div
            key={i}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${10 + Math.random() * 15}s`,
              fontSize: `${12 + Math.random() * 20}px`,
              opacity: Math.random() * 0.7 + 0.3,
              '--sway': `${(Math.random() > 0.5 ? 1 : -1) * (Math.random() * 60 + 30)}px`,
              color: i % 4 === 0 ? '#ff69b4' : i % 3 === 0 ? '#00ffff' : '#ffffff',
              animation: `fall ${10 + Math.random() * 15}s linear infinite, 
                          sway ${3 + Math.random() * 4}s ease-in-out infinite alternate${i % 7 === 0 ? ', pulse 4s infinite' : ''}`,
            }}
          >
            {i % 5 === 0 ? '✶' : i % 3 === 0 ? '❅' : '❆'}
          </div>
        ))}
      </>
    );
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(welcomeRef.current, { y: -30, opacity: 0, duration: 1, ease: "Power3.easeOut" })
      .from(h11.current, { x: "-100%", opacity: 0, duration: 1.2, ease: "Power3.easeOut" }, "-=0.8")
      .from(h12.current, { x: "-100%", opacity: 0, duration: 1.2, ease: "Power3.easeOut" }, "-=1")
      .from(h13.current, { x: "-100%", opacity: 0, duration: 1.2, ease: "Power3.easeOut" }, "-=1")
      .from(descRef.current, { y: 30, opacity: 0, duration: 1, ease: "Power3.easeOut" }, "-=0.8")
      .from([socialRef.current, skillsRef.current], { y: 30, opacity: 0, duration: 1, stagger: 0.2 }, "-=0.6")
      .from(myimageref.current, { y: "100%", opacity: 0, duration: 1.5, ease: "Power3.easeOut" }, "-=1.8");
  }, []);

  return (
    <>
      {/* FULL SCREEN MAGICAL SNOW BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <Snowfall />
      </div>

      {/* Optional: Keep your old empty div if you want */}
      {/* <div className="snowmagic" /> */}

      {/* Hero Section */}
      <main className="relative container mx-auto max-width flex items-center justify-center px-4 py-10 md:py-0">
        <div className="w-full md:flex md:items-center md:justify-between gap-10 z-10">
          {/* Left Content */}
          <div className="md:w-1/2">
            <p ref={welcomeRef} className="text-xs md:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4 font-medium animate-glow">
              Welcome To My World
            </p>

            <h1 ref={h11} className="text-3xl md:text-5xl lg:text-6xl font-bold text-dark-heading dark:text-light-heading mb-2">
              Hi, I am
            </h1>

            <h1 ref={h12} className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-2 animate-gradient">
              {name}
            </h1>

            <p ref={h13} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium mb-6">
              {tagline}
            </p>

            <p ref={descRef} className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-12">
              Designing for four years in young, rapidly growing startups taught me how to balance business goals and engineering constraints while advocating for user needs.
            </p>

            {/* Social + Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div ref={socialRef}>
                <h3 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-bold mb-5">
                  Find Me
                </h3>
                <div className="flex gap-4">
                  {twitter && (
                    <a href={twitter} target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all group">
                      <svg className="w-6 h-6 fill-gray-700 dark:fill-gray-300 group-hover:fill-pink-500 transition-colors" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  )}
                  {linkdein && (
                    <a href={linkdein} target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all group">
                      <svg className="w-6 h-6 fill-gray-700 dark:fill-gray-300 group-hover:fill-pink-500 transition-colors" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                  {instagram && (
                    <a href={instagram} target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all group">
                      <svg className="w-6 h-6 fill-gray-700 dark:fill-gray-300 group-hover:fill-pink-500 transition-colors" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.258-.149-4.771-1.699-4.919-4.92-.058-1.265-.069-1.644-.069-4.849 0-3.204.013-3.583.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.363.463 2.595.272 6.947.113 8.197.1 8.6.1 12c0 3.4.013 3.8.072 5.05.19 4.358 2.422 6.59 6.74 6.74 1.25.059 1.653.072 4.847.072 3.4 0 3.8-.013 5.05-.072 4.358-.19 6.59-2.422 6.74-6.74.059-1.25.072-1.653.072-4.847 0-3.4-.013-3.8-.072-5.05C23.637 2.695 21.405.363 17.047.272 15.797.113 15.394.1 12 .1Zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324Zm0 10.162a4 4 0 110-8 4 4 0 010 8Zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0Z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <div ref={skillsRef}>
                <h3 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-bold mb-5">
                  Skills
                </h3>
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all">
                    <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                      <path d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
            <img
              ref={myimageref}
              src={img}
              alt={name}
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-3xl shadow-2xl "
            />
          </div>
        </div>
      </main>

      {/* Pure CSS Magic Snow + Glow Effects */}
      <style jsx>{`
        @keyframes fall {
          to { 
            transform: translateY(110vh) rotate(360deg); 
          }
        }
        @keyframes sway {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(var(--sway)); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 10px #ff69b4; }
          50% { text-shadow: 0 0 30px #ff1493, 0 0 50px #ff69b4; }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .snowflake {
          position: absolute;
          top: -50px;
          user-select: none;
          pointer-events: none;
          font-weight: bold;
          text-shadow: 0 0 15px currentColor;
          z-index: 1;
        }

        .animate-glow { 
          animation: glow 4s ease-in-out infinite; 
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 12s ease infinite;
        }
      `}</style>
    </>
  );
}

export default Home;