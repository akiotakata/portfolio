const Navbar = () => {
  return (
    // cambiar md a lg block
    <div className="mt-1 hidden w-full lg:block">
      <ul className="container m-auto flex flex-row justify-end gap-8 lg:px-48 lg:text-lg xl:px-72 xl:text-xl 2xl:px-96">
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
