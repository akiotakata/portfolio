const Section = ({ title, children }) => {
  return (
    <section className="container mx-auto my-24 px-8 md:px-16 lg:px-48 xl:px-72 2xl:px-96">
      <h2 className="mb-4 border-b border-b-gray-400 pb-1 text-2xl text-gray-600 lg:mb-8 lg:text-3xl xl:text-4xl">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
