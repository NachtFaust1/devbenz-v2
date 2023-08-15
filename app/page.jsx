import Navbar from '@/components/Static/Navbar';
import Hero from '@/components/Hero';
import Repos from '@/components/Repos';
import Tech from '@/components/Tech';
import Footer from '@/components/Static/Footer';

function Home() {
  return (
        <>
            <div className='max-w-7xl mx-auto pt-12 w-full px-6 lg:px-0'>
                <Navbar />
                <main className='min-h-[67vh] px-4 lg:px-0'>
                    <Hero />
                    <Repos />
                    <Tech />
                    <Footer />
                </main>
            </div>
        </>
  )
}

export default Home