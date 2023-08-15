'use client'
import Link from 'next/link'
import React from 'react'
import swr from '@/lib/swr';

function Repos() {

    const { data: fetchedRepos } = swr('/api/repos');
    const repos = fetchedRepos?.data

  return (
    <div className='w-full pb-16 pt-32 block'>
        <div className='mx-auto w-full'>
            <div className='flex items-center space-x-3'>
                <div className='select-none w-10 h-10 flex items-center justify-center'>
                    <i className='fab fa-github text-black text-4xl' />
                </div>
                <h1 className='text-2xl text-black font-bold'>Github Repositories</h1>
            </div>
            {fetchedRepos ? <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {repos?.map((__, index) => (
                    <Link href={__.html_url} target='_blank' key={index} className='bg-[#101010] hover:bg-[#090909] relative transition-all duration-100 flex flex-col rounded-lg py-4 px-5 cursor-pointer'>
                        <i className='fal fa-arrow-up-right-from-square absolute top-4 right-5' />
                        <h1 className='leading-none font-bold text-lg text-white'>{__.name}</h1>
                        <div className='flex items-center space-x-2 mt-1 text-white'>
                            <h1 className='text-zinc-400'>by</h1>
                            <div className='flex items-center space-x-1.5 '>
                                <img src={__.owner?.avatar_url ?? `https://opengraph.githubassets.com/15ced7abddd056302fa4e531c75f0c1e3510242eca654c93dd8a8f2b5cc92d44/${__.full_name}`} className='rounded-full w-6 h-6' />
                                <h1>{__.owner?.login ?? 'Nacht'}</h1>
                            </div>
                        </div>
                        <ul className="mt-3 text-white">
                            <li className="text-sm">
                                <i className="far fa-code text-center w-4 mr-1.5" /> {__.language ?? 'TypeScript'}
                            </li>
                            <li className="text-sm">
                                <i className="far fa-star text-center w-4 mr-1.5" /> {__.stargazers_count ?? 0} star{(__.stargazers_count ?? 0) > 1 && 's'}
                            </li>
                            <li className="text-sm">
                                <i className="far fa-code-branch text-center w-4 mr-1.5" /> {__.forks_count ?? 0} fork{(__.forks_count ?? 0) > 1 && 's'}
                            </li>
                        </ul>
                    </Link>
                ))}
            </div> : <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="bg-[#090909] relative rounded-lg p-5">
                            <div className="animate-pulse rounded-lg w-28 h-4 bg-white/10" />
                            <div className="flex items-center space-x-2">
                                <div className="animate-pulse rounded-lg w-6 h-4 mt-2 mb-1 bg-white/10" />
                                <div className="animate-pulse rounded-lg w-4 h-4 mt-2 mb-1 bg-white/10" />
                                <div className="animate-pulse rounded-lg w-8 h-4 mt-2 mb-1 bg-white/10" />
                            </div>
                            <div className="mt-2 flex items-center space-x-2">
                                <div className="animate-pulse rounded-lg w-3 h-3 mt-2 mb-1 bg-white/10" />
                                <div className="animate-pulse rounded-lg w-12 h-3 mt-2 mb-1 bg-white/10" />
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="animate-pulse rounded-lg w-3 h-3 mt-2 mb-1 bg-white/10" />
                                <div className="animate-pulse rounded-lg w-12 h-3 mt-2 mb-1 bg-white/10" />
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="animate-pulse rounded-lg w-3 h-3 mt-2 mb-1 bg-white/10" />
                                <div className="animate-pulse rounded-lg w-12 h-3 mt-2 mb-1 bg-white/10" />
                            </div>
                            <div className="absolute top-4 right-5 w-5 h-5 rounded bg-white/10 animate-pulse" />
                        </div>
                    ))}
                </div>}
        </div>
    </div>
  )
}

export default Repos