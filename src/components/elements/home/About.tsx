import { CheckIcon } from "@heroicons/react/24/outline";

const skills = [
  {
    name: "TypeScript",
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
    <div className="bg-black px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl py-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24">
        <div className="lg:col-span-2">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white">
            My Background
          </p>
          <p className="mt-4 text-lg text-gray-300">
            From my start as a coding bootcamp graduate to my present position
            as a full-time software developer, I am driven to continually learn
            new skills and refine the ones I already possess. Throughout my
            journey, I have acquired experience with a broad spectrum of
            technologies and frameworks, employing languages like Ruby, Perl,
            and TypeScript/JavaScript. As a committed developer, I am
            enthusiastic about ongoing growth and learning, utilizing my
            abilities to aid clients and organizations in overcoming obstacles
            and achieving their objectives.
          </p>
        </div>
        <div className="mt-auto flex justify-center lg:justify-end">
          <dl className="grid grid-flow-col grid-cols-2 grid-rows-3 gap-x-6 gap-y-6 sm:space-y-0 lg:gap-x-8 my-12">
            {skills.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-lg font-medium leading-6 text-white">
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
