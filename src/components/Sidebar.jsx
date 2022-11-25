import { Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';
import Social from './Social';

const Sidebar = () => {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  return (
    <section className="fixed bottom-0 z-10 mx-4 my-8 hidden w-8 lg:block">
      <Transition
        show={showing}
        enter={`transition-opacity delay-500 duration-300`}
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <Social orientation="col" />
      </Transition>
    </section>
  );
};

export default Sidebar;
