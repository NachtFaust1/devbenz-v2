'use client'
import Navbar from "@/components/Static/Navbar"
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yvsv9mu', 'template_s9qwk44', form.current, 'f3QBiTa3EG_32ZjYt').then((result) => {
            toast.success('Successfully Submitted Message!')
        }, (error) => {
            toast.error('Failed to Submit Message!')
        })
    }

  return (
    <div className='max-w-7xl mx-auto pt-12 w-full px-6 lg:px-0'>
        <Navbar />
        <main className='min-h-[67vh] px-6 lg:px-0'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between w-full h-full py-24 gap-24'>
                    <div className='w-full'>
                        <form ref={form} onSubmit={sendEmail}>
                            <h1 className='text-4xl font-bold'>Contact Me</h1>
                            <p className='text-sm mt-1 text-gray-500'><i className='fa fa-envelope' /> contact@devbenz.me</p>
                            <div className='flex flex-col gap-4 mt-4'>
                                <div className='relative flex items-center rounded-lg bg-gray-400/10 dark:bg-gray-500/5 dark:hover:bg-gray-500/10 hover:bg-gray-400/20 outline-none border-2 border-white/0 w-full transition-all duration-200 ease-in-out sm:text-sm sm:leading-5 false undefined'>
                                    <div className='flex items-center justify-center h-full pl-4 false'>
                                        <i className='fa fa-user' />
                                    </div>
                                    <input name='name' placeholder='Name' className='false py-3 px-5 w-full h-full !outline-none focus:ring-0 bg-transparent !border-none focus:outline-none focus:border-none undefined' autoComplete='off' required />
                                </div>
                                <div className='relative flex items-center rounded-lg bg-gray-400/10 dark:bg-gray-500/5 dark:hover:bg-gray-500/10 hover:bg-gray-400/20 outline-none border-2 border-white/0 w-full transition-all duration-200 ease-in-out sm:text-sm sm:leading-5 false undefined'>
                                    <div className='flex items-center justify-center h-full pl-4 false'>
                                        <i className='fa fa-envelope' />
                                    </div>
                                    <input name='email' placeholder='E-Mail' className='false py-3 px-5 w-full h-full !outline-none focus:ring-0 bg-transparent !border-none focus:outline-none focus:border-none undefined' autoComplete='off' required />
                                </div>
                                <div className='relative flex items-start rounded-lg bg-gray-400/10 dark:bg-gray-500/5 dark:hover:bg-gray-500/10 hover:bg-gray-400/20 outline-none border-2 border-white/0 w-full transition-all duration-200 ease-in-out sm:text-sm sm:leading-5 false undefined'>
                                    <div className='flex items-center justify-center h-full pl-4 pt-3.5'>
                                        <i className='fa fa-comment' />
                                    </div>
                                    <textarea name='message' placeholder='Message' className='false py-3 px-5 w-full h-full !outline-none focus:ring-0 bg-transparent !border-none focus:outline-none focus:border-none undefined' rows={4} autoComplete='off' required />
                                </div>
                            </div>
                            <div className="flex items-center gap-4 justify-between mt-4">
                                <div></div>
                                <button type="submit" className="min-h-[44px] relative overflow-hidden px-4 py-2 justify-center rounded-lg bg-[#101010] hover:shadow-2xl transition-all duration-200 bg-primary group text-white flex items-center gap-2">
                                    <i className="fa fa-paper-plane" />
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Contact