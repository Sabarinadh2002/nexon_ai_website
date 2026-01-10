import React, { useState, useEffect, useRef } from "react";

export default function Section8() {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);

  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#06b6d4,#10b981)] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#f97316,#eab308)] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#06b6d4,#10b981)] flex items-center justify-center text-white">
          Running out of content
        </div>
      ),
    },
  ];

  const backgroundColors = [
    "#0f172a", // Slate 900 (Blue-ish)
    "#000000", // Pure Black
    "#171717", // Neutral 900
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const scrollProgress = scrollTop / (scrollHeight - clientHeight);
      const cardsBreakpoints = content.map((_, index) => index / content.length);
      const closestBreakpointIndex = cardsBreakpoints.reduce(
        (acc, breakpoint, index) => {
          const distance = Math.abs(scrollProgress - breakpoint);
          if (distance < Math.abs(scrollProgress - cardsBreakpoints[acc])) {
            return index;
          }
          return acc;
        },
        
      );
      setActiveCard(closestBreakpointIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [content.length]);

  return (
    <section className="w-full bg-black font-sans">
      <div
        ref={ref}
        className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 transition-colors duration-500 scroll-smooth no-scrollbar"
        style={{
          backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }}
      >
        <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <h2
                  className={`text-2xl font-bold text-slate-100 transition-opacity duration-500 ${
                    activeCard === index ? "opacity-100" : "opacity-30"
                  }`}
                >
                  {item.title}
                </h2>
                <p
                  className={`text-lg mt-10 max-w-sm text-slate-300 transition-opacity duration-500 ${
                    activeCard === index ? "opacity-100" : "opacity-30"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          style={{ background: backgroundGradient }}
          className="sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block transition-colors duration-500"
        >
          {content[activeCard].content}
        </div>
      </div>
    </section>
  );
}