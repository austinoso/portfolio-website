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
    <div className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl py-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24">
        <div className="lg:col-span-2">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            My Background
          </p>
          <p className="mt-4 text-lg text-gray-500">
            As a bootcamp graduate and current full-time software developer, I
            have a passion for learning new skills and improving current ones.
            Throughout my journey, I have had the opportunity to work with a
            range of technologies and frameworks, using languages like Ruby,
            Perl, and JavaScript. I am excited to continue growing and learning
            as a developer, and to apply my skills to help clients and
            organizations solve problems and achieve their goals.
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
