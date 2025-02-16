import Customer from "@/components/home3/Customer";
import Projects from "@/components/home3/Projects";
import Details from "@/components/portfolio/Details";
import SectionTop from "@/components/shared/SectionTop";
import DevelopmentWork from "./DevelopmentWork";
import MerchmindWork from "@/works-samples/merchmind";

const DevelopmentPortfolio = () => {
  return (
    <>
      <SectionTop title={"Development Work"} />
      <DevelopmentWork />
      <MerchmindWork />
      <Customer />
    </>
  );
};

export default DevelopmentPortfolio;
