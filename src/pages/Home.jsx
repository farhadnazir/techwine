import Blog from "@/components/home1/Blog";
import Header from "@/components/home1/Header";
import Hero from "@/components/home1/Hero";
import HowItWork from "@/components/home1/HowItWork";
import Info from "@/components/home1/Info";
import Introduction from "@/components/home1/Introduction";
// import Pricing from "@/components/home1/Pricing";
import Projects from "@/components/home3/Projects";
import Service from "@/components/home1/Service";
import TeamMembers from "@/components/home1/Team";
import Testimonial from "@/components/home3/Testimonial";
import Footer from "@/components/home3/Footer";
import PopularServices from "@/components/home3/Services";
import WorkingProcess from "@/components/home3/WorkingProcess";
import WhyUs from "@/components/home3/WhyUs";

const Home = () => {
  return (
    <>
      {/* header */}
      <Header />

      {/* <!-- Hero Section --> */}
      <Hero />

      {/* <!-- Introduction Section --> */}
      <Introduction />

      {/* <!-- Info Section --> */}
      {/* <Info /> */}

      {/* <!-- Services Section --> */}
      <PopularServices />
      {/* <!-- Services Section End --> */}
   {/* <!-- Latest Projects --> */}
   <Projects />


      {/* <!-- Working Process Section --> */}
      <WorkingProcess />
      {/* <!-- Working Process Section End --> */}

      {/* <!-- Team Section --> */}
      <TeamMembers />

      {/* <!-- Services Section --> */}
      {/* <Service /> */}

   
      {/* <!-- Pricing Section --> */}
      {/* <Pricing /> */}

      {/* <!-- How It Work --> */}
      {/* <HowItWork /> */}

      {/* <!-- Choose Us --> */}
      <WhyUs />


      {/* <!-- Testimonials Section --> */}
      <Testimonial />

      {/* <!-- Blog Section --> */}
      <Blog />

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
};

export default Home;
