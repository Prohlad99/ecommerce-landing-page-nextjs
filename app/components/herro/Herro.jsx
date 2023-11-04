"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import styles from "./Herro.module.css";

const Herro = () => {
  const [text] = useTypewriter({
    words: ["Let's Grow Your Business With Us"],
    loop: {},
    typeSpeed: 100,
    delaySpeed: 140,
  });

  return (
    <div className="h-[100vh]">
      <div
        className={`${styles.banner} w-[100vw] h-[600px]  flex justify-center items-center`}
      >
        <div className="bg-slate-700 md:w-[100%] w-[100%] md:h-[100%] h-[100%]  flex items-center md:px-20 opacity-80">
          <div>
            <div className="max-w-[800px]">
              <h1 className="-opacity-0 text-4xl mx-4 md:text-6xl text-blue-300">
                {text}
                <span>
                  <Cursor />
                </span>
              </h1>
            </div>
            <p className="-opacity-0 text-white text-lg my-4 ml-4 font-mono">
              WOWNEX is supporting the next generation of entrepreneurs, <br />{" "}
              the world&apos;s biggest brands, and everyone in between
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herro;
