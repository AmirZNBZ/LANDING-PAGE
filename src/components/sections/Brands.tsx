import Container from "../shared/Container";
import Title from "../shared/Title";

const logos = ["discord", "openai", "paypal", "slack", "spotify", "youtube"];

const Brands = () => {
  return (
    <section>
      <Container className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <Title>Trusted Industry Leaders</Title>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          {logos.map((logo, index) => (
            <div key={index} className="p-4 sm:p-5 rounded-xl bg-body border border-box-border">
              <img
                src={`./assets/logos/${logo}.png`}
                alt="logo"
                width="100"
                height="60"
                className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale hover:!grayscale-0 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Brands;
