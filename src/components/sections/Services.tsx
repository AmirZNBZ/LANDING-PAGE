import { services } from "../../utils/services-data";
import Service from "../cards/Service";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";

const Services = () => {
  return (
    <section id="#services">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>Our AI Services</Title>
          <Paragraph>
            Unlock the potential of advanced machine learning, natural language processing, and predictive
            analytics. Our services include:
          </Paragraph>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Service
              title={service.title}
              description={service.description}
              icon={service.icon}
              key={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
