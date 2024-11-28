// @flow strict
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

function ProjectCard({ project }) {
  return (
    <div className={`border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group ${project.featured ? 'ring-2 ring-violet-500' : ''}`}>
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={project.image}
          height={1080}
          width={1920}
          alt={`Imagem do projeto ${project.name}`}
          className='h-full w-full group-hover:scale-110 transition-all duration-300 object-cover'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <div className="flex items-center gap-2">
            <p>{project.name}</p>
            {project.featured && (
              <span className="bg-violet-500 text-white text-xs px-2 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {project.code && (
              <Link href={project.code} target="_blank" className="text-white hover:text-violet-500">
                <FaGithub size={20} />
              </Link>
            )}
            {project.demo && (
              <Link href={project.demo} target="_blank" className="text-white hover:text-violet-500">
                <BiLinkExternal size={20} />
              </Link>
            )}
          </div>
        </div>
        <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
          {project.name}
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tools.map((tool, index) => (
            <span key={index} className="text-xs bg-[#1a1443] text-[#16f2b3] px-2 py-1 rounded">
              {tool}
            </span>
          ))}
        </div>
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {project.description}
        </p>
        {project.status !== 'production' && (
          <span className="absolute top-2 right-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded">
            {project.status}
          </span>
        )}
      </div>
    </div>
  );
}

export default ProjectCard; 