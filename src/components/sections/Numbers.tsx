import Container from "../shared/Container";

type NumberData = { heading: string; text: string }[];

const numberData: NumberData = [
  {
    heading: "100+",
    text: "AI Models Implemented",
  },
  {
    heading: "250+",
    text: "Enterprise Charts",
  },
  {
    heading: "99.9%",
    text: "Uptime Guarantee",
  },
  {
    heading: "10+",
    text: "Years of Innovation",
  },
];

const Numbers = () => {
  return (
    <section className="relative mt-12 md:mt-6">
      <Container className="flex justify-center items-center">
        <div
          className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg border shadow shadow-box-shadow md:divide-x divide-box-border
          grid grid-cols-2 md:grid-cols-4"
        >
          {numberData.map((data, index) => (
            <div className="text-center px-5" key={index}>
              <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">{data.heading}</h2>
              <p className="mt-2 text-heading-3">{data.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Numbers;
