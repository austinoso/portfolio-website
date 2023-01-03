import { CheckIcon } from "@heroicons/react/24/outline";

const skills = [
  {
    name: "JavaScript",
  },
  {
    name: "PHP",
  },
  {
    name: "Perl",
  },
  {
    name: "SQL",
  },
  {
    name: "React",
  },
  {
    name: "NextJS",
  },
];

export default function About() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8 ">
        <div className="lg:col-span-2">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            My Background
          </p>
          <p className="mt-4 text-lg text-gray-500">
            Starting out as a bootcamp graduate 3 years ago and currently
            working as a full-stack web developer. I've gained experience
            working with a variety of technologies and frameworks. I'm always
            looking to learn new things and improve my skills.
          </p>
        </div>
        <div className="mt-12 lg:mt-0">
          <dl className="space-y-6 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-6 sm:gap-y-6 sm:space-y-0 lg:gap-x-8 my-12">
            {skills.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
