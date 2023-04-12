import { CalendarIcon, MapPinIcon, UsersIcon } from "@heroicons/react/20/solid";

const positions = [
  {
    id: 1,
    title: "Full-Stack Software Engineer",
    type: "Full-time",
    location: "Remote",
    department: "WaveRight InfoTech",
    closeDate: "2020-01-07",
    closeDateFull: "Feb 7, 2021 - Current",
    description:
      "Worked on multiple projects using frameworks such as Perl Catalyst, WordPress, and Angularjs. Interpreted requirements, working with minimal instructions to design and implement requested features. Communicated directly with clients to gain a strong understanding of requirements",
  },
  {
    id: 2,
    title: "Freelance Software Engineer",
    type: "Part-time",
    location: "Remote",
    department: "Self-Employed",
    closeDate: "2020-01-07",
    closeDateFull: "July 2020 - Current",
    description:
      "Delivered software products such as front-end web applications, back-end APIs, and desktop applications. Built web applications with React, Firebase, Node, Express, SQL, and NoSQL Databases. Gathered requirements from clients and implemented change requests. Managed multiple projects and optimized delivery schedules to meet client expectations and deadlines",
  },
];

export default function Experience() {
  return (
    <div className="relative bg-black px-4 sm:px-6 lg:px-8 pb-16">
      <div className="relative mx-auto max-w-7xl py-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-3xl">
            Experience
          </h2>
          {/* <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p> */}
        </div>
        <ul role="list" className="divide-y divide-gray-800 mt-10">
          {positions.map((position) => (
            <li key={position.id}>
              <span className="block">
                <div className="py-4 ">
                  <div className="flex items-center justify-between">
                    <p className="truncate text-md font-medium text-white">
                      {position.title}
                    </p>
                    <div className="ml-2 flex flex-shrink-0">
                      <p className="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800">
                        {position.type}
                      </p>
                    </div>
                  </div>
                  <p className="w-3/4 text-gray-200 text-sm">
                    {position.description}
                  </p>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-200">
                        <UsersIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-white"
                          aria-hidden="true"
                        />
                        {position.department}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-200 sm:mt-0 sm:ml-6">
                        <MapPinIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-white"
                          aria-hidden="true"
                        />
                        {position.location}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-200 sm:mt-0">
                      <CalendarIcon
                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-white"
                        aria-hidden="true"
                      />
                      <p>
                        <time dateTime={position.closeDate}>
                          {position.closeDateFull}
                        </time>
                      </p>
                    </div>
                  </div>
                </div>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
