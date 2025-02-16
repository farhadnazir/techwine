import Customer from "@/components/home3/Customer";
import Projects from "@/components/home3/Projects";
import Details from "@/components/portfolio/Details";
import SectionTop from "@/components/shared/SectionTop";
import SeoWork from "./SeoWork";

const SeoPortfolio = () => {
  return (
    <>
      <SectionTop title={"SEO Optimization"} />
      <SeoWork />
      <Projects />
      <Customer />
    </>
  );
};

export default SeoPortfolio;
