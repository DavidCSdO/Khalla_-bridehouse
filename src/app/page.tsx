import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Discover from "@/src/components/Discover";
import Categories from "@/src/components/Categories";
import Collection from "@/src/components/Collection";
import About from "@/src/components/About";
import Process from "@/src/components/Process";
import Benefits from "@/src/components/Benefits";
import FeaturedProducts from "@/src/components/FeaturedProducts";
import Testimonials from "@/src/components/Testimonials";
import Stats from "@/src/components/Stats";
import Newsletter from "@/src/components/Newsletter";
import InstagramFeed from "@/src/components/InstagramFeed";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Discover Section */}
      <Discover />

      {/* Categories Section */}
      <Categories />

      {/* Collection Section */}
      <Collection />

      {/* About Section */}
      <About />

      {/* Process Section */}
      <Process />

      {/* Benefits Section */}
      <Benefits />

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Stats Section */}
      <Stats />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Instagram Feed Section */}
      <InstagramFeed />

      {/* Footer */}
      <Footer />
    </>
  );
}
