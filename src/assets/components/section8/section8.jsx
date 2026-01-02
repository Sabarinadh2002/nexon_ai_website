import React, { useState, useEffect, useRef } from 'react'

export default function Section8() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)
  const panelRef = useRef(null)

  const backgroundColors = [
    "#0f172a", // Slate 900 (Blue-ish)
    "#000000", // Pure Black
    "#1e1b4b", // Indigo 950 (Deep Purple-ish)
  ]

  const contentData = [
    {
      gradient: "linear-gradient(to bottom right, #06b6d4, #10b981)",
      text: "Collaborative Editing",
      type: "text"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
      type: "image"
    },
    {
      gradient: "linear-gradient(to bottom right, #f97316, #eab308)",
      text: "Version Control",
      type: "text"
    },
    {
      gradient: "linear-gradient(to bottom right, #06b6d4, #10b981)",
      text: "Running out of content",
      type: "text"
    }
  ]

  const scrollCards = [
    {
      title: "Collaborative Editing",
      description: "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity."
    },
    {
      title: "Real time changes",
      description: "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates."
    },
    {
      title: "Version control",
      description: "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned."
    },
    {
      title: "Running out of content",
      description: "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned."
    }
  ]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const containerTop = container.getBoundingClientRect().top
      let minDistance = Infinity
      let currentIndex = 0

      const cards = container.querySelectorAll('.scroll-card')
      cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top
        const distance = Math.abs(cardTop - containerTop - 100)

        if (distance < minDistance) {
          minDistance = distance
          currentIndex = index
        }
      })

      setActiveIndex(currentIndex)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  const styles = `
    .gradient-text {
      background: linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .custom-scrollbar::-webkit-scrollbar {
      display: none;
    }
    
    .custom-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.5s ease-out forwards;
    }
  `

  const bgIndex = activeIndex % backgroundColors.length
  const currentContent = contentData[activeIndex]

  return (
    <>
      <style>{styles}</style>
      <section 
        id="security-panel" 
        ref={panelRef}
        className="py-24 px-4 sm:px-8 lg:px-16 relative transition-colors duration-700 overflow-hidden w-full" 
        style={{ backgroundColor: backgroundColors[bgIndex] }}
      >
        <div className="container mx-auto">
          
          {/* Section Header */}
          <div className="mb-12 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Enterprise-Grade <span className="gradient-text">Security</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Your data is protected by industry-leading security standards. We prioritize privacy and compliance at every step.
            </p>
          </div>

          {/* Sticky Scroll Container */}
          <div 
            ref={containerRef}
            className="h-[35rem] overflow-y-auto flex flex-col lg:flex-row gap-10 relative custom-scrollbar pr-2 scroll-smooth"
          >
            
            {/* Scrollable Content (Left) */}
            <div className="w-full lg:w-1/2 relative z-10">
              
              {scrollCards.map((card, idx) => (
                <div 
                  key={idx}
                  className="mb-64 scroll-card transition-opacity duration-500"
                  style={{ opacity: activeIndex === idx ? 1 : 0.3 }}
                >
                  <h2 className="text-3xl font-bold text-slate-100">{card.title}</h2>
                  <p className="text-xl mt-6 text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
              
              <div className="h-40"></div>
            </div>

            {/* Sticky Visual (Right) */}
            <div className="hidden lg:block w-full lg:w-1/2 relative h-[35rem]">
              <div 
                className="sticky top-0 h-full w-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-500 shadow-2xl flex items-center justify-center"
                style={{ 
                  background: currentContent.type === 'text' ? currentContent.gradient : 'transparent'
                }}
              >
                {currentContent.type === 'text' ? (
                  <div className="flex h-full w-full items-center justify-center text-white text-3xl font-bold p-8 text-center animate-fadeIn">
                    {currentContent.text}
                  </div>
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-black animate-fadeIn">
                    <img 
                      src={currentContent.imageSrc} 
                      className="h-full w-full object-cover opacity-80" 
                      alt="Visual" 
                    />
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}