import Footer from "@/components/Static/Footer"
import Navbar from "@/components/Static/Navbar"

function About() {
  return (
    <div className="max-w-7xl mx-auto pt-12 w-full px-6 lg:px-0">
        <Navbar />
        <main className="min-h-[67vh] px-4 lg:px-0">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between w-full h-full py-24 gap-24">
                    <div>
                        <h1 className="text-4xl font-bold">
                            About Me
                        </h1>
                        <p className="text-xl mt-1">
                            Hey there I'm Nacht, a 19 year old second-year freshman college student. I've been coding for a little over 2 years now. I began with Javascript, used it to create Discord Bots and used NextJS TailwindCSS to develop my biggest project yet, a Ticket Bot with a complete functionality and dashboard. Since then, programming has become more of a hobby for me than a dream. I've spent days honing my hobby and working to advance my coding expertise for at least 4 to 5 hours each day. Now, I have a fantastic project in the works.
                        </p>
                    </div>
                    <div className="relative flex-shrink-0">
                        <img src="https://i.imgur.com/yU9FMcP.png" draggable="false" className="relative z-1 w-full lg:w-64 h-full lg:h-64 rounded-full hidden lg:flex lg:rounded-lg" />
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default About