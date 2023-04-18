"use client";
import Cover from "@/components/cover";
import Grid from "@/components/grid";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const ref = useRef<HTMLDivElement>(null!);

  //smooth scroll lenis
  const lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
  });
  const scrollFn = () => {
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
  };
  requestAnimationFrame(scrollFn);

  //animation
  useLayoutEffect(() => {
    const gridItems = [...ref.current.querySelectorAll(".grid > .grid-item")];
    // console.log(gridItems);

    const ctx = gsap.context(() => {
      gridItems.forEach((item) => {
        const image = item.querySelector(".grid-item-img");
        gsap
          .timeline({
            scrollTrigger: {
              trigger: item,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          })
          .set(image, {
            transformOrigin: `${gsap.utils.random(0, 1) > 0.5 ? 0 : 100}% 100%`,
          })
          .to(image, {
            ease: "none",
            scale: 0,
          });
      });
    });

    //clean up animation
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main
      ref={ref}
      className="block min-h-screen flex-col items-center justify-between"
    >
      <Grid />
      <Cover />
      <Footer />
    </main>
  );
}
