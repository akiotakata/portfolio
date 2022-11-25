import Section from './Section';
import css from '../assets/images/css-96.png';
import html from '../assets/images/html-96.png';
import js from '../assets/images/js-96.png';
import react from '../assets/images/react-96.png';
import wp from '../assets/images/wp-96.png';
import php from '../assets/images/php-128.png';
import git from '../assets/images/git-96.png';
import python from '../assets/images/python-96.png';
import sql from '../assets/images/sql-96.png';

const Skills = () => {
  const skillsList = [
    {
      name: 'React',
      logo: react,
    },
    {
      name: 'Javascript',
      logo: js,
    },
    {
      name: 'Php',
      logo: php,
    },
    {
      name: 'Html',
      logo: html,
    },
    {
      name: 'Css',
      logo: css,
    },
    {
      name: 'Wordpress',
      logo: wp,
    },
    {
      name: 'Python',
      logo: python,
    },
    {
      name: 'Sql',
      logo: sql,
    },
    {
      name: 'Git',
      logo: git,
    },
  ];

  return (
    <Section title="Technologies I've been using:">
      <div className="grid grid-cols-3 gap-4 md:grid-cols-5">
        {skillsList.map(({ name, logo }) => (
          <div key={name} className="flex flex-col items-center">
            <div className="flex h-12 w-12 flex-col items-center md:h-16 md:w-16">
              <img src={logo} alt="" />
            </div>
            <h4>{name}</h4>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
