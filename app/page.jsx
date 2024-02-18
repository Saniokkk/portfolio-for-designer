import { Services, Hero, Recenzie, Projects, About } from "./components";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Projects />
            <Services />
            <Recenzie />
        </main>
    );
}
