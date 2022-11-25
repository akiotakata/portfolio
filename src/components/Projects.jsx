import Section from './Section';
import snapshot_sd from '../assets/images/sumie_digital_website.png';
import snapshot_jj from '../assets/images/jjiterman_website.png';
import { Link, GitHub } from 'react-feather';

const Projects = () => {
  const projectsList = [
    {
      title: 'Sumie Digital',
      image: snapshot_sd,
      description:
        'Sumie Digital is an e-commerce dedicated to japanese art. Built with Wordpress and Woocommerce.',
      link: 'https://sumiedigital.com',
      github: '',
    },
    {
      title: 'Julieta Jiterman',
      image: snapshot_jj,
      description:
        'Artist portfolio for Julieta Jiterman. Built with Oxygen builder in Wordpress.',
      link: 'https://julietajiterman.com',
      github: '',
    },
  ];

  return (
    <Section title="Personal Projects">
      <div className="grid grid-cols-1 gap-8 md:gap-12">
        {projectsList.map(({ image, description, link, github }, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <a href={link} target="_blank" rel="noreferrer">
              <img
                className="shadow xl:shadow-none xl:brightness-75 xl:hover:brightness-100"
                src={image}
                alt="Snapshot from Sumie Digital"
              />
            </a>
            <p className="lg:text-base xl:text-lg">{description}</p>
            <div className="flex flex-row gap-8">
              <a href={link} target="_blank" rel="noreferrer">
                <Link className="w-4 hover:scale-110 hover:text-indigo-600 md:w-5 " />
              </a>
              <a
                href={github}
                className={github ? '' : 'hidden'}
                target="_blank"
                rel="noreferrer"
              >
                <GitHub className="w-4 hover:scale-110 hover:text-indigo-600 md:w-5 " />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
