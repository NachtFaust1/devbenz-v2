'use client'

function Navbar() {

    const navLinks = [
        { id: '1', name: 'Home', link: '/', icon: 'fal fa-house' },
        { id: '2', name: 'About', link: '/about', icon: 'fal fa-user' },
        // { id: '3', name: 'Projects', link: '/projects', icon: 'fal fa-folder' },
    ]

  return (
    <div className='flex items-center justify-between px-4'>
        <div className='hidden lg:flex items-center'>
            <a href='/' className='text-xl font-bold text-black'>Nacht Faust</a>
        </div>
        <a href='/'>
            <div className='flex lg:hidden items-center'>
                <img src='https://i.imgur.com/yU9FMcP.png' width={90} height={90} />
            </div>
        </a>
        <div className='hidden lg:flex items-center gap-6'>
            {navLinks.map((itm, itIdx) => (
                <a key={itIdx} href={itm.link} className='flex text-black text-sm font-medium items-center px-4 gap-2'>
                    {itm.name}
                </a>
            ))}
            <a href="/contact" className='bg-[#101010] flex px-4 py-2 text-white justify-center rounded-full items-center gap-2 cursor-pointer'>
                <p className='text-sm font-medium'>Contact</p>
            </a>
        </div>
        <div className='lg:hidden flex flex-row justify-end gap-4 items-center'>
            {navLinks.map((itm, itIdx) => (
                <a key={itIdx} href={itm.link} className='flex text-black text-sm font-medium items-center'>
                    {itm.name}
                </a>
            ))}
        </div>
    </div>
  )
}

export default Navbar