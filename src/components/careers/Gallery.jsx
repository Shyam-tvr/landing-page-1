import Link from 'next/link'
import React from 'react'
import HorizontalCarousel from './Carousel';

const galleryImages = Array.from({ length: 15 }, (_, i) => ({
  src: `/careers/gallery/${i + 1}.jpg`,
  alt: `Career image ${i + 1}`,
}));


const Gallery = () => {
  return (
     <section className='my-24'>
        <div className='max-w-xl mx-auto space-y-4 flex flex-col'>
            <h1 className='font-anton text-white text-center'>Life At <span className='text-[#FCD901]'> Genrobotics</span></h1>
            <h4 className='text-white text-center'>A glimpse into our world of innovation and camaraderie.</h4>
        </div>
        <div className="flex flex-col gap-8 mt-8 mx-8">
            <HorizontalCarousel items={galleryImages}/>
            <Link href="" className='px-4 py-2 bg-[#FCD901] rounded-lg w-fit mx-auto'>Follow Life at Genrobotics</Link>
        </div>
    </section>
  )
}

export default Gallery