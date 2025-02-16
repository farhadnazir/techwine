import Customer from "@/components/home3/Customer";
import Projects from "@/components/home3/Projects";
import SectionTop from "@/components/shared/SectionTop";
import DesignCreativesWork from "./DesignCreativesWork";

const DesignAndCreativesPortfolio = () => {
  return (
    <>
      <SectionTop title={"Videos & Designs"} />
      <DesignCreativesWork />
      <Projects />
      <Customer />
    </>
  );
};

export default DesignAndCreativesPortfolio;
