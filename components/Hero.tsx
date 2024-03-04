import React from 'react'
import TextAnimation from './TextAnimation'
import Image from 'next/image'
import { ArrowDownCircleIcon } from '@heroicons/react/16/solid'

const Hero = () => {

    const downloadCV = () => {
        let pdf = '/pdf/resume.pdf'
        window.open(pdf, '_blank');
    }
    return (
        <div className='flex  items-center justify-start w-[100%] h-[80vh]'>
            <div className='flex flex-row justify-between items-center w-[100%] mx-10 '>
                <div className=''>
                    <h1 className='text-[2rem] md:text-[3rem] font-extrabold'>
                        Hi, I&apos;M Priyanshu Tripathi
                    </h1>
                    <TextAnimation />
                    <p className='w-[400px] md:w-[800px]'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam impedit optio sint atque, eum, magni sed 
                        facilis numquam facere assumenda non neque. Libero esse dicta animi consectetur aperiam ratione hic!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam impedit optio sint atque, eum, magni sed 
                        facilis numquam facere assumenda non neque. Libero esse dicta animi consectetur aperiam ratione hic!
                    </p>
                   
                    <button onClick={downloadCV} className='bg-blue-400 flex flex-row p-3 my-4 rounded-md items-center'>
                        Download CV <ArrowDownCircleIcon className="ml-2 w-6 h-6"/>
                    </button>
                </div>
                <div className=''>
                    <Image className='rounded-full' width={400} height={400} src="/images/avatar.avif" alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Hero