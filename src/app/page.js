import Hero from '../components/Hero';
import Wishes from '../components/Wishes';
import Poem from '../components/Poem';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <main>
      <Hero />
      <Wishes />
      <Poem />
      <Gallery />
      <Footer />
    </main>
  );
}
