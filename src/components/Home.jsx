import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsChevronDown } from "react-icons/bs";
import me from "../assets/photo.png";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 20, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section style={{ marginBottom: "100px" }}>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Bittu Kumar
          </motion.h1>

          <Typewriter
            options={{
              strings: ["Full Stack Web Developer", "Competitive Programmer", "Problem Setter and Freelancer", "Subject Matter Expert"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:bittukumar1181@gmail.com" target={"blank"}>Hire Me</a>

            <a href="https://drive.google.com/file/d/1FKpXGrG8YBdZba67C62M6eHJlyLUYuAy/view?usp=sharing" target={"blank"}>Resume</a>
          </div>

          <article textContent>
            <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              +
              {ratio < 3 && (
                <motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span>
              )}
            </p>
            <span style={{ textAlign: 'center', display: 'block' }}>Clients Worldwide</span>
          </article>

          <aside>
            <article>
              <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                +
                {ratio < 3 && (
                  <motion.span ref={projectCount} whileInView={animationProjectsCount}>
                    20
                  </motion.span>
                )}
              </p>
              <span style={{ textAlign: 'center', display: 'block' }}>Projects Done</span>
            </article>

            <article data-special>
              <p style={{ textAlign: 'center' }}>Contact</p>
              <span style={{ textAlign: 'center', display: 'block' }}>bittukumar1181@gmail.com</span>
            </article>
          </aside>

        </div>
      </section>
      <section>
        <img src={me} alt="Bittu K" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
