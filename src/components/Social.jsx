import { Linkedin, GitHub, Download } from 'react-feather';

const Social = ({ orientation }) => {
  const links = [
    {
      href: 'https://www.linkedin.com/in/akiotakata/',
      icon: <Linkedin className="hover:scale-110 hover:text-indigo-600" />,
      name: 'LinkedIn',
    },
    {
      href: 'https://github.com/akiotakata',
      icon: <GitHub className="hover:scale-110 hover:text-indigo-600" />,
      name: 'GitHub',
    },
    {
      href: '/src/assets/akio_takata_resume.pdf',
      icon: <Download className="hover:scale-110 hover:text-indigo-600" />,
      name: 'Download Resume',
    },
  ];

  return (
    <ul className={`flex flex-${orientation} justify-center gap-8`}>
      {links.map(({ href, icon, name }, index) => (
        <li key={index}>
          <a href={href} target="_blank" rel="noreferrer">
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
