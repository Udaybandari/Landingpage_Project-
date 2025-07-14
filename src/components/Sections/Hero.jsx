import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      {/* This Element is the scroll target for "hero" */}
      <Element name="hero">
        <div className="container">
          <div className="relative z-10 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Video Editing
            </div>

            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly simple
            </h1>

            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We designed XORA AI Video Editor to be easy to use, quick to
              learn, and surprisingly powerful.
            </p>

            {/* CTA button scrolls to Features */}
            <LinkScroll
              to="features"
              offset={-100} // Adjust to match your header height
              spy
              smooth
              duration={500} // Optional: scroll speed in ms
            >
              <Button icon="/images/zap.svg">Try it now</Button>
            </LinkScroll>
          </div>

          {/* Decorative hero image */}
          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto"
              alt="Hero graphic"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
