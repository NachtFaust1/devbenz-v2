'use client'
import swr from '@/lib/swr';

function Tech() {

    const { data: fetchedTechs } = swr('/api/techs');
    const techs = fetchedTechs?.data || null;

  return (
    <div className='w-full py-16'>
        <div className='mx-auto w-full'>
            <div className='flex items-center space-x-3'>
                <div className='select-none w-10 h-10 flex items-center justify-center'>
                    <i className='fas fa-circle-bookmark text-black text-4xl' />
                </div>
                <h1 className='text-2xl text-black font-bold'>Technologies I Use</h1>
            </div>
            <div className='gap-2 pt-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {techs ? techs?.map((tech, index) => (
                    <div key={index} className='bg-[#101010] hover:bg-[#090909] text-white transition-all duration-200 rounded-xl p-2 px-3 flex items-center justify-between'>
                    <img src={'/img/techs/' + tech[1]} className='h-6 max-w-[24px]' /> {tech[0]}
                </div>
                )) : Array.from({ length: 12 }).map((_, index) => (
                    <div key={index} className="bg-[#101010] hover:bg-[#090909] transition-all duration-200 rounded-lg p-2 px-3 flex items-center justify-between">
                        <div className="animate-pulse w-6 h-6 rounded-lg bg-white/10" />
                        <div className={`animate-pulse h-6 rounded-lg bg-white/10`} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Tech