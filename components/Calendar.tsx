"use client";

import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
// import SideCalendar from "./components/SideCalendar";
// import SideCalendarTitle from "./components/SideCalendarTitle";
import { currentCalendar } from "../store/modules/calendar";
// import ScheduleCalendar from "./components/ScheduleCalendar";
import getThisWeek from "../util/getThisWeek";
// import AddScheduleButton from "./components/AddScheduleButton";
// import AddScheduleModal from "./components/AddScheduleModal";
import formatDay from "../util/formatDay";

const Calendar = () => {
  const { year, month, days } = useSelector(currentCalendar);
  const [isSideCalendar, setIsSideCalendar] = useState<boolean>(true);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [modalDate, setModalDate] = useState<string>(formatDay(new Date()));
  const [timeIndex, setTimeIndex] = useState<number>(0);
  return (
    <Fragment>
      <Header
        year={year}
        month={month}
        isSideCalendar={isSideCalendar}
        setIsSideCalendar={setIsSideCalendar}
      />
    </Fragment>
  );
};

export default Calendar;
