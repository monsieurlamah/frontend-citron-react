import { testimonials } from "../../../data/dummyData";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
      <h1 className="mx-auto sub-heading">Témoignages</h1>
      <h1 className="heading">Ce qu'ils pensent de notre travail et de nos réalisations</h1>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard {...testimonial} key={testimonial.id} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
