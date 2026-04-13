import Approaches from "./approaches/Approaches";
import CtaSection from "./cta/CtaSection";
import EGov from "./eGov/Egov";
import Hero from "./hero/Hero";
import Product from "./product/Product";

const Home = () => {
  return (
    <>
      <Hero />
      <Product />
      <Approaches />
      <EGov />
      <CtaSection />
    </>
  );
};

export default Home;
