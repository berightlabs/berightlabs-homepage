import { BuiltNote } from './components/BuiltNote';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Method } from './components/Method';
import { Section } from './components/Section';
import { StatementBlock } from './components/StatementBlock';
import { Work } from './components/Work';
import { indexContent } from './data/manifesto';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <Header />
      <main id="main-content">
        <Hero />

        <Section
          id="index"
          label="Index"
          number={indexContent.number}
          title={indexContent.title}
        >
          <div className="space-y-7 sm:space-y-9">
            {indexContent.body.map((paragraph, index) => (
              <StatementBlock
                key={paragraph}
                emphasized={index === indexContent.body.length - 1}
              >
                {paragraph}
              </StatementBlock>
            ))}
          </div>
        </Section>

        <Work />
        <Method />
        <Contact />
        <BuiltNote />
      </main>
      <Footer />
    </div>
  );
}

export default App;
