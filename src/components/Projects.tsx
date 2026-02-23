import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { projects } from '../data/projectsData';

export default function Projects() {
  return (
    <section id="projects" className="flex justify-center items-center min-h-[90vh] bg-[#f9f9f9] py-16 px-5">
      <div className="w-full max-w-[76.5rem]">
        <h1 className="text-center text-black text-3xl mb-12">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col">
              <Link to={`/project/${project.id}`} className="no-underline">
                <div className="relative w-full h-[300px] bg-white rounded-[20px] overflow-hidden group">
                  <div className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-[-6px] right-[-6px] w-24 h-24 bg-[#695aa6] rounded-tl-[50%] flex justify-center items-center group-hover:bg-[#543d8d] transition-colors">
                    <div className="absolute inset-2.5 bg-[#282828] rounded-[50%] flex justify-center items-center">
                      <ArrowUpRight className="text-white text-2xl" />
                    </div>
                  </div>
                </div>
              </Link>
              <div className="py-4 px-2.5">
                <Link to={`/project/${project.id}`} className="no-underline">
                  <h3 className="capitalize text-2xl mb-2 text-black hover:text-[#695aa6] transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="my-2.5 text-[#565656]">
                  {project.description}
                </p>
                <ul className="m-0 p-0 list-none flex items-center flex-wrap gap-2.5">
                  <li>
                    <Link
                      to={`/project/${project.id}`}
                      className="uppercase bg-[#695aa6] text-white font-bold text-[0.8rem] px-2.5 py-1.5 rounded-sm hover:bg-[#543d8d] transition-colors no-underline"
                    >
                      查看詳情
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}