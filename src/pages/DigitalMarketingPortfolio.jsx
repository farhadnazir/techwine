import Customer from "@/components/home3/Customer";
import Projects from "@/components/home3/Projects";
import SectionTop from "@/components/shared/SectionTop";
import DigitalMarketingWork from "./DigitalMarketingWork";

const DigitalMarketingPortfolio = () => {
  return (
    <>
      <SectionTop title={"Digital Marketing"} />
      <DigitalMarketingWork />
      <Projects />
      <Customer />
    </>
  );
};

export default DigitalMarketingPortfolio;
