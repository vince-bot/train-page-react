import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import sideTab from '../../menu/sidetab';
import menuData, { getFilterData } from '../../static-data/test';
import test from '../../static-data/test';

const TestPage = () => {

   const router = useRouter();
   const { category } = router.query;

   const filterData = menuData.filter(course => course.category === category);



   return (
      <>
         <div className='flex flex-col justify-center items-center w-full py-20 px-8'>
            <div className='flex w-full top-0 max-w-[1240px]'>
               <div className="flex flex-col w-1/4 ">
                  {sideTab.map((data, i) =>
                     <div
                        className="flex gap-4 cursor-pointer"
                        key={i}
                     >
                        <Link
                           href={`/our-programs?category=${data.category}`}
                           className=""

                        >
                           {data.name}
                        </Link>
                     </div>
                  )}
               </div>
               
               <div className="w-3/4">
                  {filterData?.length ?
                     <>
                        {filterData.map((item, index) => (
                           <>
                              <div key={index}>
                                 <div>
                                    {item.category}
                                 </div>
                              </div>
                           </>
                        ))}
                     </> : <>
                        <div className="flex justify-center w-full text-sm p-10 ">
                           No Data Found
                        </div>
                     </>
                  }
               </div>
            </div>
         </div>
      </>
   )
}

export default TestPage