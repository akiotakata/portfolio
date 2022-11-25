import Social from './Social';

const Footer = () => {
  return (
    <section className="container m-auto px-8 md:px-16 lg:px-48 xl:px-72 2xl:px-96">
      <Social orientation="row lg:hidden" />
      <p className="p-4 text-center text-sm text-gray-400">
        Designed & Built by Akio Takata
      </p>
    </section>
  );
};

export default Footer;
