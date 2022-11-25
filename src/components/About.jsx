import { Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';

const About = () => {
  const [showing, setShowing] = useState(false);

  const h1 = <h1 className="lg:text-lg xl:text-xl">Hello, my name is</h1>;

  const h2 = (
    <h2 className="text-5xl text-gray-600 transition delay-200 lg:text-6xl xl:text-7xl">
      Akio Takata
    </h2>
  );

  const h3 = (
    <h3 className="text-5xl text-gray-400 lg:text-6xl xl:text-7xl">
      I'm a Web Developer
    </h3>
  );

  const p = (
    <>
      <p className="max-w-lg lg:text-lg xl:text-xl 2xl:max-w-2xl">
        I have experience working with Javascript, PHP libraries, Wordpress, and
        SQL. I also know React and Python.
      </p>
      <p className="max-w-lg lg:text-lg xl:text-xl 2xl:max-w-2xl">
        I enjoy learning new skills. I started programming as a personal
        challenge. And found that I can grow every day as a developer.
      </p>
    </>
  );

  useEffect(() => {
    setShowing(true);
  }, []);

  return (
    <section className="container m-auto flex min-h-screen flex-col justify-center gap-6 p-8 sm:py-20 md:px-16 lg:px-48 xl:px-72 2xl:px-96">
      <Transition className="flex flex-col gap-2" show={showing}>
        <Transition.Child
          enter={`transition-translate duration-150`}
          enterFrom="translate-y-2/4"
          enterTo="translate-y-0"
        >
          {h1}
        </Transition.Child>
        <Transition.Child
          enter={`transition-translate duration-300`}
          enterFrom="translate-y-2/4"
          enterTo="translate-y-0"
        >
          {h2}
        </Transition.Child>
        <Transition.Child
          enter={`transition-translate duration-500`}
          enterFrom="translate-y-2/4"
          enterTo="translate-y-0"
        >
          {h3}
        </Transition.Child>
        <Transition.Child
          enter={`transition-translate duration-700`}
          enterFrom="translate-y-2/4"
          enterTo="translate-y-0"
        >
          {p}
        </Transition.Child>
      </Transition>
    </section>
  );
};

export default About;
