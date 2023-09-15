import { useDispatch } from "react-redux";
import { lastWeek, nextWeek, selectDay } from "../store/modules/calendar";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";

export default function Header({
  year,
  month,
  isSideCalendar,
  setIsSideCalendar,
}: {
  year: number;
  month: number;
  isSideCalendar: boolean;
  setIsSideCalendar: Dispatch<SetStateAction<boolean>>;
}) {
  const dispatch = useDispatch();
  return (
    <header className="flex items-center justify-between px-2 w-full h-14 border-b border-gray-300">
      <div className="flex items-center">
        <div
          className="flex items-center p-2 rounded-full hover:bg-slate-100 cursor-pointer"
          onClick={() => setIsSideCalendar(!isSideCalendar)}
        >
          {/* <img src="/menu.svg" alt="menu" width={24} height={24} /> */}
          <GiHamburgerMenu size={24} />
        </div>
        <div className="flex items-center ml-3">
          <Image src="/calendar.svg" alt="logo" width={30} height={30} />
          <h1 className="ml-2 text-lg text-gray-500 hidden md:block">
            Calendar
          </h1>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="px-3 py-1 mx-3 border border-gray-200 rounded text-sm"
          onClick={() => dispatch(selectDay(new Date().toString()))}
        >
          Today
        </button>
        {/* <img
          src="/left.svg"
          alt="logo"
          width={26}
          height={26}
          className="cursor-pointer"
          onClick={() => dispatch(lastWeek())}
        />
        <img
          src="/right.svg"
          alt="logo"
          width={26}
          height={26}
          className="cursor-pointer"
          onClick={() => dispatch(nextWeek())}
        /> */}
        <div className="cursor-pointer" onClick={() => dispatch(lastWeek())}>
          <AiOutlineLeft className="ml-2" size={24} />
        </div>
        <div className="cursor-pointer" onClick={() => dispatch(nextWeek())}>
          <AiOutlineRight className="ml-2" size={24} />
        </div>

        <span className="text-sm md:text-lg ml-3">
          {year}Year {month}Month
        </span>
      </div>
      <span className="px-3 py-1 mx-3 border border-gray-200 rounded text-sm">
        주
      </span>
    </header>
  );
}
