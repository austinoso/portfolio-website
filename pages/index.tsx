import Header from "../src/components/elements/home/Header";
import About from "../src/components/elements/home/About";
import Projects from "../src/components/elements/home/Projects";
import Experience from "../src/components/elements/home/Experience";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Experience />
    </div>
  );
}
