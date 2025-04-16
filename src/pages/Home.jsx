import {
  Brands,
  Categories,
  Counter,
  Featured,
  Projects,
  Services,
} from "../components/common/page-componets";
import {
  Feeds,
  Filters,
  Hero,
  Invest,
  Speciality,
} from "../components/home/home-1";
import { LatestForSale } from "../components/home/home-2";
import { Testimonial } from "../components/home/home-3";

const Home = () => {
  return (
    <div className="pt-16 max-w-7xl mx-auto px-4">
      <Hero />
      <Filters />
      {/* <Invest /> */}
      {/* <Speciality /> */}
      {/* <Services /> */}
      <Categories />
      {/* <Projects /> */}
     
      <Featured />
      <LatestForSale />
      <Counter />
      {/* <Testimonial /> */}
      <Testimonial />

      {/* <Brands /> */}
      <Feeds />
    </div>
  );
};

export default Home;
