import React, { useEffect, useRef } from 'react'

export default function Section6() {
  const globeContainerRef = useRef(null)

  useEffect(() => {
    // Check if Three.js is available
    if (typeof THREE === 'undefined' || typeof ThreeGlobe === 'undefined') {
      console.warn('Three.js or ThreeGlobe not loaded yet')
      return
    }

    if (!globeContainerRef.current) return

    const container = globeContainerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // Scene setup
    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x000000, 400, 2000)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 4000)
    camera.position.z = 1000
    camera.position.y = 200

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    container.appendChild(renderer.domElement)

    // Initialize Globe
    const globe = new ThreeGlobe()
      .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
      .arcsData(getArcs())
      .arcColor('color')
      .arcDashLength(0.4)
      .arcDashGap(4)
      .arcDashInitialGap(() => Math.random() * 5)
      .arcDashAnimateTime(1000)

    // Globe material customization
    const globeMaterial = globe.globeMaterial()
    globeMaterial.color = new THREE.Color(0x3a228a)
    globeMaterial.emissive = new THREE.Color(0x220038)
    globeMaterial.emissiveIntensity = 0.1
    globeMaterial.shininess = 0.7

    scene.add(globe)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xbbbbbb, 0.3)
    scene.add(ambientLight)

    const dLight = new THREE.DirectionalLight(0xffffff, 0.8)
    dLight.position.set(-800, 2000, 400)
    scene.add(dLight)

    const dLight2 = new THREE.DirectionalLight(0x7982f6, 1)
    dLight2.position.set(-200, 500, 200)
    scene.add(dLight2)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      globe.rotation.y += 0.001
      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      container.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  const getArcs = () => {
    const colors = ['#ff0000', '#ffffff', '#0000ff', '#00ff00']
    const N = 20
    return [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: [colors[Math.floor(Math.random() * colors.length)], colors[Math.floor(Math.random() * colors.length)]]
    }))
  }

  const styles = `
    .gradient-text {
      background: linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .bg-grid {
      background-size: 50px 50px;
      background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
      background-attachment: fixed;
    }
  `

  return (
    <>
      <style>{styles}</style>
      <section className="py-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden w-full bg-grid" style={{ backgroundColor: '#050505', color: '#ffffff' }}>
        
        {/* Background Decorative Blur */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
              <i data-lucide="globe" className="w-3 h-3 text-purple-400"></i>
              <span className="text-purple-300 text-xs font-semibold tracking-wider uppercase">Global Scale</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Speak your customers' <br />
              <span className="gradient-text">Language</span>, anywhere.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Expand your reach beyond borders. Nexon-AI fluently handles conversations in over 50 languages, detecting the caller's preference instantly. Whether you operate locally with a diverse clientele or manage an international enterprise, we ensure you never miss a lead due to a language barrier.
            </p>

            {/* Big Stats Numbers (Grid) */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-800/50 mt-6">
              {/* Stat 1 */}
              <div className="text-center lg:text-left">
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">50+</h3>
                <p className="text-sm text-gray-400 uppercase tracking-wide">Languages</p>
              </div>

              {/* Stat 2 */}
              <div className="text-center lg:text-left">
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">24/7</h3>
                <p className="text-sm text-gray-400 uppercase tracking-wide">Availability</p>
              </div>

              {/* Stat 3 */}
              <div className="text-center lg:text-left">
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">99%</h3>
                <p className="text-sm text-gray-400 uppercase tracking-wide">Uptime</p>
              </div>
            </div>
          </div>

          {/* Right Visual: Three.js Globe Container */}
          <div 
            ref={globeContainerRef}
            className="flex items-center justify-center relative h-[600px] w-full overflow-hidden"
            id="globe-container"
          ></div>

        </div>
      </section>
    </>
  )
}