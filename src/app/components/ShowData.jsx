"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import dropdown from '@/app/assets/polygon-black.svg';
import { useSpring, animated } from '@react-spring/web';

const studentData = [
    {
      ID: 22,
      Name: "Daniel Grant",
      Gender: "Male",
      Class: 2,
      Parents: "Kofi Grant",
      Address: "59 Australia, Sydney",
      DateOfBirth: "02/05/2001",
      Phone: "+123 9988568"
    },
    {
      ID: 23,
      Name: "Daniel Grant",
      Gender: "Male",
      Class: 3,
      Parents: "Kofi Grant",
      Address: "59 Australia, Sydney",
      DateOfBirth: "02/05/2001",
      Phone: "+123 9988568"
    },
    {
      ID: 24,
      Name: "Daniel Grant",
      Gender: "Male",
      Class: 5,
      Parents: "Kofi Grant",
      Address: "59 Australia, Sydney",
      DateOfBirth: "02/05/2001",
      Phone: "+123 9988568"
    },
    {
      ID: 25,
      Name: "Daniel Grant",
      Gender: "Male",
      Class: 4,
      Parents: "Kofi Grant",
      Address: "59 Australia, Sydney",
      DateOfBirth: "02/05/2001",
      Phone: "+123 9988568"
    },
    {
      ID: 26,
      Name: "Daniel Grant",
      Gender: "Male",
      Class: 2,
      Parents: "Kofi Grant",
      Address: "59 Australia, Sydney",
      DateOfBirth: "02/05/2001",
      Phone: "+123 9988568"
    },
    {
      ID: 27,
      Name: "Daniel Grant",
      Gender: "Male",
      Class: 1,
      Parents: "Kofi Grant",
      Address: "59 Australia, Sydney",
      DateOfBirth: "02/05/2001",
      Phone: "+123 9988568"
    },
    {
      ID: 28,
      Name: "Daniel Grant",
      Gender: "Male",
      Class: 3,
      Parents: "Kofi Grant",
      Address: "59 Australia, Sydney",
      DateOfBirth: "02/05/2001",
      Phone: "+123 9988568"
    },
    {
      ID: 29,
      Name: "Daniel Grant",
      Gender: "Male",
      Class: 4,
      Parents: "Kofi Grant",
      Address: "59 Australia, Sydney",
      DateOfBirth: "02/05/2001",
      Phone: "+123 9988568"
    },
    {
      ID: 30,
      Name: "Daniel Grant",
      Gender: "Male",
      Class: 4,
      Parents: "Kofi Grant",
      Address: "59 Australia, Sydney",
      DateOfBirth: "02/05/2001",
      Phone: "+123 9988568"
    },
    {
      ID: 31,
      Name: "Daniel Grant",
      Gender: "Male",
      Class: 1,
      Parents: "Kofi Grant",
      Address: "59 Australia, Sydney",
      DateOfBirth: "02/05/2001",
      Phone: "+123 9988568"
    },
    {
      ID: 32,
      Name: "Daniel Grant",
      Gender: "Male",
      Class: 3,
      Parents: "Kofi Grant",
      Address: "59 Australia, Sydney",
      DateOfBirth: "02/05/2001",
      Phone: "+123 9988568"
    },
    {
      ID: 33,
      Name: "Daniel Grant",
      Gender: "Male",
      Class: 4,
      Parents: "Kofi Grant",
      Address: "59 Australia, Sydney",
      DateOfBirth: "02/05/2001",
      Phone: "+123 9988568"
    },
    {
      ID: 34,
      Name: "Daniel Grant",
      Gender: "Male",
      Class: 4,
      Parents: "Kofi Grant",
      Address: "59 Australia, Sydney",
      DateOfBirth: "02/05/2001",
      Phone: "+123 9988568"
    },
    {
        ID: 35,
        Name: "Daniel Grant",
        Gender: "Male",
        Class: 4,
        Parents: "Kofi Grant",
        Address: "59 Australia, Sydney",
        DateOfBirth: "02/05/2001",
        Phone: "+123 9988568"
      },
      {
        ID: 36,
        Name: "Daniel Grant",
        Gender: "Male",
        Class: 4,
        Parents: "Kofi Grant",
        Address: "59 Australia, Sydney",
        DateOfBirth: "02/05/2001",
        Phone: "+123 9988568"
      },
      {
        ID: 37,
        Name: "Daniel Grant",
        Gender: "Male",
        Class: 4,
        Parents: "Kofi Grant",
        Address: "59 Australia, Sydney",
        DateOfBirth: "02/05/2001",
        Phone: "+123 9988568"
      },
      {
        ID: 38,
        Name: "Daniel Grant",
        Gender: "Male",
        Class: 4,
        Parents: "Kofi Grant",
        Address: "59 Australia, Sydney",
        DateOfBirth: "02/05/2001",
        Phone: "+123 9988568"
      },
      {
        ID: 39,
        Name: "Daniel Grant",
        Gender: "Male",
        Class: 4,
        Parents: "Kofi Grant",
        Address: "59 Australia, Sydney",
        DateOfBirth: "02/05/2001",
        Phone: "+123 9988568"
      },
      {
        ID: 40,
        Name: "Daniel Grant",
        Gender: "Male",
        Class: 4,
        Parents: "Kofi Grant",
        Address: "59 Australia, Sydney",
        DateOfBirth: "02/05/2001",
        Phone: "+123 9988568"
      },
      {
        ID: 41,
        Name: "Daniel Grant",
        Gender: "Male",
        Class: 4,
        Parents: "Kofi Grant",
        Address: "59 Australia, Sydney",
        DateOfBirth: "02/05/2001",
        Phone: "+123 9988568"
      },
      {
        ID: 42,
        Name: "Daniel Grant",
        Gender: "Male",
        Class: 4,
        Parents: "Kofi Grant",
        Address: "59 Australia, Sydney",
        DateOfBirth: "02/05/2001",
        Phone: "+123 9988568"
      },
      {
        ID: 43,
        Name: "Daniel Grant",
        Gender: "Male",
        Class: 4,
        Parents: "Kofi Grant",
        Address: "59 Australia, Sydney",
        DateOfBirth: "02/05/2001",
        Phone: "+123 9988568"
      },
      {
        ID: 44,
        Name: "Daniel Grant",
        Gender: "Male",
        Class: 4,
        Parents: "Kofi Grant",
        Address: "59 Australia, Sydney",
        DateOfBirth: "02/05/2001",
        Phone: "+123 9988568"
      },
      {
        ID: 45,
        Name: "Daniel Grant",
        Gender: "Male",
        Class: 4,
        Parents: "Kofi Grant",
        Address: "59 Australia, Sydney",
        DateOfBirth: "02/05/2001",
        Phone: "+123 9988568"
      },
      {
        ID: 46,
        Name: "Daniel Grant",
        Gender: "Male",
        Class: 4,
        Parents: "Kofi Grant",
        Address: "59 Australia, Sydney",
        DateOfBirth: "02/05/2001",
        Phone: "+123 9988568"
      },
      {
        ID: 47,
        Name: "Daniel Grant",
        Gender: "Male",
        Class: 4,
        Parents: "Kofi Grant",
        Address: "59 Australia, Sydney",
        DateOfBirth: "02/05/2001",
        Phone: "+123 9988568"
      },
      {
        ID: 48,
        Name: "Daniel Grant",
        Gender: "Male",
        Class: 4,
        Parents: "Kofi Grant",
        Address: "59 Australia, Sydney",
        DateOfBirth: "02/05/2001",
        Phone: "+123 9988568"
      },
      {
        ID: 49,
        Name: "Daniel Grant",
        Gender: "Male",
        Class: 4,
        Parents: "Kofi Grant",
        Address: "59 Australia, Sydney",
        DateOfBirth: "02/05/2001",
        Phone: "+123 9988568"
      },
      {
        ID: 50,
        Name: "Daniel Grant",
        Gender: "Male",
        Class: 4,
        Parents: "Kofi Grant",
        Address: "59 Australia, Sydney",
        DateOfBirth: "02/05/2001",
        Phone: "+123 9988568"
      },
      {
        ID: 51,
        Name: "Daniel Grant",
        Gender: "Male",
        Class: 4,
        Parents: "Kofi Grant",
        Address: "59 Australia, Sydney",
        DateOfBirth: "02/05/2001",
        Phone: "+123 9988568"
      },
      {
        ID: 52,
        Name: "Daniel Grant",
        Gender: "Male",
        Class: 4,
        Parents: "Kofi Grant",
        Address: "59 Australia, Sydney",
        DateOfBirth: "02/05/2001",
        Phone: "+123 9988568"
      }
  ];

  const studentClass = [
    {
      id: 1,
      name: 'One'
    },
    {
      id: 2,
      name: 'Two'
    },
    {
      id: 3,
      name: 'Three'
    },
    {
      id: 4,
      name: 'Four'
    },
    {
      id: 5,
      name: 'Five'
    },
    {
      id: 6,
      name: 'Six'
    },
    {
      id: 7,
      name: 'Seven'
    },
    {
      id: 8,
      name: 'Eight'
    },
    {
      id: 9,
      name: 'Nine'
    },
    {
      id: 10,
      name: 'Ten'
    },
  ]

const ShowData = (props) => {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');

    const animation = useSpring({
        height: open ? `${studentData?.length * 1.05}rem` : '0rem', 
        opacity: open ? 1 : 0,
        overflow: 'hidden',
        config: { duration: 300 },
      }); 

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 13;

    const totalPages = Math.ceil(studentData.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = studentData.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleItemSelect = (item) => {
        setSelectedItem(item);
        setOpen(!open);
    }

    return (
        <div className='bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] w-[100%] p-[20px] mt-[40px] rounded-[10px]'>
            <h1 className='text-dark font-[400] font-poppins text-[28px] leading-[42px]'>{props.title}</h1>

            <form className='flex items-center justify-between mt-[15px]'>
                <input
                    type="text"
                    placeholder='Search by name...'
                    className='w-[35%] h-[54px] px-[18px] bg-[#DDDEEE80]/50 rounded-[5px] outline-none text-[#757576] font-[400] font-poppins text-[16px] leading-[24px] placeholder:text-[#757576]'
                />
                <div className='w-[35%] h-[54px] px-[18px] bg-[#DDDEEE80]/50 rounded-[5px] outline-none text-[#757576] font-[400] font-poppins text-[16px] leading-[24px] flex items-center justify-between' onClick={() => setOpen(!open)}>
                    <p>{selectedItem.name || 'Select Class'}</p>
                    <Image src={dropdown} alt='dropdown' className={`w-[12px] h-[12px] inline-block ${open ? 'rotate-180 transition-rotate duration-300' : 'rotate-0 transition-rotate duration-300'}`} />
                </div>
                <button className='w-[20%] h-[54px] bg-darkRed rounded-[5px] text-white font-[600] font-poppins text-[20px] leading-[30px]'>
                    SEARCH
                </button>
            </form>

            <animated.div style={animation} className="w-[35%] my-[0.5rem] ml-[40%]">
            <ul className='h-auto w-[100%] p-[20px] bg-[#C4C4C4] flex flex-col justify-between gap-[10px]'>
              {
              studentClass.map((item) => (
                <li
                  key={item.id}
                  className={`h-[39px] text-[24px] font-[500] font-montserrat leading-[39.01px] cursor-pointer text-center ${selectedItem === item ? 'bg-blue text-white' : 'bg-white text-dark'}`}
                  onClick={() => handleItemSelect(item)}
                >
                  {item.name}
                </li>
              ))}
          </ul>
         </animated.div>

            <div className='my-[30px]'>
                <div className='flex justify-between items-center h-[60px] border-[1px] border-[#DDDEEE] pl-[20px] pr-[10px]'>
                <p className='text-darkRed font-[500] font-poppins text-[18px] leading-[27px]  w-[5%]'>ID</p>
                <p className='text-darkRed font-[500] font-poppins text-[18px] leading-[27px] w-[13%]'>Name</p>
               <p className='text-darkRed font-[500] font-poppins text-[18px] leading-[27px] w-[9%]'>Gender</p>
              <p className='text-darkRed font-[500] font-poppins text-[18px] leading-[27px] w-[7.5%]'>Class</p>
              <p className='text-darkRed font-[500] font-poppins text-[18px] leading-[27px] w-[11%]'>Parents</p>
              <p className='text-darkRed font-[500] font-poppins text-[18px] leading-[27px] w-[17.5%]'>Address</p>
              <p className='text-darkRed font-[500] font-poppins text-[18px] leading-[27px] w-[10.5%]'>Date of Birth</p>
             <p className='text-darkRed font-[500] font-poppins text-[18px] leading-[27px] w-[12.5%]'>Phone</p>
            </div>

                {/* Student Data Rows */}
                {currentData.map((data) => (
                    <div key={data.ID} className='flex justify-between items-center h-[60px] border-[1px] border-[#DDDEEE] pl-[20px] pr-[10px]'>
                    <p className='text-dark font-[400] font-poppins text-[16px] leading-[24px] w-[5%]'>{data.ID}</p>
                    <p className='text-dark font-[400] font-poppins text-[16px] leading-[24px] w-[13%]'>{data.Name}</p>
                    <p className='text-dark font-[400] font-poppins text-[16px] leading-[24px] w-[9%]'>{data.Gender}</p>
                    <p className='text-dark font-[400] font-poppins text-[16px] leading-[24px] w-[7.5%]'>{data.Class}</p>
                    <p className='text-dark font-[400] font-poppins text-[16px] leading-[24px] w-[11%]'>{data.Parents}</p>
                    <p className='text-dark font-[400] font-poppins text-[16px] leading-[24px] w-[17.5%]'>{data.Address}</p>
                    <p className='text-dark font-[400] font-poppins text-[16px] leading-[24px] w-[10.5%]'>{data.DateOfBirth}</p>
                    <p className='text-dark font-[400] font-poppins text-[16px] leading-[24px] w-[12.5%]'>{data.Phone}</p>
                    </div>
                ))}

                {/* Pagination Buttons */}
                <div className='flex justify-end items-center gap-[15px] mt-[30px]'>
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className='text-[#747474] font-[400] font-poppins text-[22px] leading-[33px]'>
                        Previous
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-[60px] h-[44px] ${currentPage === i + 1 ? 'bg-darkRed text-white' : 'text-dark'} font-[400] font-poppins text-[22px] leading-[33px] border border-darkRed`}>
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className='text-[#747474] font-[400] font-poppins text-[22px] leading-[33px]'>
                        Next
                    </button>
                </div>


            </div>
        </div>
    );
};

export default ShowData;
