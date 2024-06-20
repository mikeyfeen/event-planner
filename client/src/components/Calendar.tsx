import React from "react";
import "./calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const CalendarComp = () => {
    const localizer = momentLocalizer(moment);
    return (
        <>
            <Calendar
                className=""
                localizer={localizer}
                events={[]}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 700, width: 1000, display: "flex" }}
                views={{
                    month: true,
                    week: true,
                    day: false,
                    agenda: false,
                }}
            />
        </>
    );
};

export default CalendarComp;
