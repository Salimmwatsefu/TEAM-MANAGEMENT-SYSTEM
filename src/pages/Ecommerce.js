import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot} from "react-icons/go";
import { Stacked, Pie, Button, SparkLine} from "../components";
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  return (
    <div>
    <div className='flex mt-3 justify-between gap-2 items-center'>
    {earningData.map((item) => (
      <div key={item.title} className="bg-gray-100 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 pl-4  pt-5 rounded-2xl">
        <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg}} className="text-2xl rounded-full p-4 hover:drop-shadow-xl">
          {item.icon}
          </button><span> 
            <span className='text-2xl font-bold ml-10'>{item.amount}</span>
            <p className='text-sm font-semibold text-black mt-1 ml-16'>{item.title}</p>
            </span>
      </div>
    ))}

  </div>
  <div className='flex gap-10 flex-wrap justify-center'>
    <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg mt-5 m-3 p-4 rounded-2xl md:w-780'>
      <div className='flex justify-between'>
        <p className='font-semibold text-xl'>Total Revenue</p>
        <div className='flex items-center gap-4'>
          <p className='flex items-center gap-2 text-black hover:drop-shadow-xl'>
            <span><GoPrimitiveDot/></span>
            <span>Expense</span>
          </p>
          <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
            <span><GoPrimitiveDot/></span>
            <span>Budget</span>
          </p>

        </div>

      </div>
      <div className='mt-10 flex gap-10 flex-wrap justify-center'>
        <div className='border-r-1 border-color m-4 pr-10'>
          <div>
            <p>
              <span className='text-3xl font-semibold'>$8500</span>
              <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>15%</span>
            </p>
            <p className='text-black mt-1'>Budget</p>
          </div>

          <div className='mt-8'>
            <p>
              <span className='text-3xl font-semibold'>$5300</span>
            </p>
            <p className='text-black mt-1'>Expense</p>
          </div>

          <div className='mt-5'>
            <SparkLine currentColor="white" id="line-sparkline" type="Line" height="80px" width="250px" data={SparklineAreaData} color="white"/>

          </div>
          <div className="mt-10">
            <Button color="white" bgColor="orange" text="Download Report" borderRadius="10px"/>

          </div>


        </div>
        <div>
          <Stacked width="320px" height="360px"/>
        </div>
      </div>

    </div>

  </div>
  </div>
  )
}

export default Ecommerce