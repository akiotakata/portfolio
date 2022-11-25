import Section from './Section';

const Contact = () => {
  return (
    <Section title="How can I help you?">
      <p className="lg:text-lg xl:text-xl">
        I'm glad to hear about your project and company. Besides my technical
        skills, I'm a fast learner, focused, and with excellent communication
        skills. I'm sure I can help your team reach quality goals.
      </p>
      <a
        href="mailto:akiotakata1@gmail.com"
        className="mt-8 block w-36 rounded-lg border border-gray-400 p-2 text-center hover:border-indigo-600 hover:text-indigo-600"
      >
        Let's Talk
      </a>
    </Section>
  );
};

export default Contact;
