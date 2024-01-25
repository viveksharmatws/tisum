import Image from 'next/image'
import React from 'react'

const BenefitsofTisum = () => {
  return (
    <>
    <section className='bg-yellow_light px-10'>
      <div className='container'>
        <div className='py-20 flex flex-col space-y-[43px]'>
          <div className='space-y-2.5'>
            <h2 className=' font-normal text-[27px] xl:text-[36px] font-poppins  text-gray text-center xl:leading-12 leading-8'>Benefits of using the Tisume platform</h2>
            <p className='font-normal text-[16px]  xl:text-[18px] font-poppins  text-gray text-center leading-normal '> Book appointments, and read reviews, all in one place.</p>
          </div>
          <div className='md:flex  gap-[50px] max-sm:flex-col justify-center mx-auto'>
           
            <div className='flex-col flex space-y-[30px] py-10    '>
              <div className='flex flex-col space-y-[14px] p-7 max-w-[320px] bg-white rounded-[30px]' >
                <div className='flex justify-center'>
                  <Image  src="/img/Ben1icon.png" width={500} height={500} className='w-[50px]' alt='benefit icon'/>
                </div>
                <div className='space-y-1'>
                  <span className=' text-[16px] font-poppins font-medium leading-6 text-center text-gray'>
                  Reviews & Recommendations
                  </span >
                  <p className='text-[14px] font-poppins font-normal leading-5 text-center text-gray '>Receive online reviews and ratings, which can build trust and credibility with potential clients</p>
                </div>
              </div>
              <div className='flex flex-col space-y-[14px] p-7 max-w-[320px] bg-white rounded-[30px]' >
                <div className='flex justify-center'>
                  <Image  src="/img/Ben2icon.png" width={500} height={500} className='w-[50px]' alt='benefit icon'/>
                </div>
                <div className='space-y-1'>
                  <span className=' text-[16px] font-poppins font-medium leading-6 text-center text-gray'>
                  Reviews & Recommendations
                  </span >
                  <p className='text-[14px] font-poppins font-normal leading-5 text-center text-gray '>Receive online reviews and ratings, which can build trust and credibility with potential clients</p>
                </div>
              </div>
            
            </div>
            <div className='lg:py-10 md:flex md:items-center  '>
              <Image src="/img/Girl.png" alt='girl image' width={311} height={450}  />
             </div> 
             <div className='flex-col flex space-y-[30px] py-10  '>
              <div className='flex flex-col space-y-[14px] p-7 max-w-[320px] bg-white rounded-[30px]' >
                <div className='flex justify-center'>
                  <Image  src="/img/Ben3icon.png" width={500} height={500} className='w-[50px]' alt='benefit icon'/>
                </div>
                <div className='space-y-1'>
                  <span className=' text-[16px] font-poppins font-medium leading-6 text-center text-gray'>
                  Reviews & Recommendations
                  </span >
                  <p className='text-[14px] font-poppins font-normal leading-5 text-center text-gray '>Receive online reviews and ratings, which can build trust and credibility with potential clients</p>
                </div>
              </div>
              <div className='flex flex-col space-y-[14px] p-7 max-w-[320px] bg-white rounded-[30px]' >
                <div className='flex justify-center'>
                  <Image  src="/img/Ben4icon.png" width={500} height={500} className='w-[50px]' alt='benefit icon'/>
                </div>
                <div className='space-y-1'>
                  <span className=' text-[16px] font-poppins font-medium leading-6 text-center text-gray'>
                  Reviews & Recommendations
                  </span >
                  <p className='text-[14px] font-poppins font-normal leading-5 text-center text-gray '>Receive online reviews and ratings, which can build trust and credibility with potential clients</p>
                </div>
              </div>
            
            </div>


          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default BenefitsofTisum