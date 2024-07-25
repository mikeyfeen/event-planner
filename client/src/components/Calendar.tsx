import React, { useState } from "react";
import "./calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

const DnDCalendar = withDragAndDrop(Calendar);

const CalendarComp = () => {
    const tempevents = [
        {
            start: new Date(),
            end: new Date(moment().add(1, "days")),
            title: "Some title",
            id: 0,
        },
    ];

    const [events, setEvents] = useState(tempevents);

    const handleEventDrop = (event: Event) => {
        setEvents((prev: Event[]) => {
            const existing = prev.find((ev) => ev.id === event.id) ?? {};
            const filtered = prev.filter((ev) => ev.id !== event.id);
            return [
                ...filtered,
                {
                    ...existing,
                    start: event.start,
                    end: event.end,
                    allDay: event.allDay,
                },
            ];
        });
    };

    const localizer = momentLocalizer(moment);
    return (
        <>
            <DnDCalendar
                key={events.length}
                className=""
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 700, width: 1000, display: "flex" }}
                views={{
                    month: true,
                    week: true,
                    day: false,
                    agenda: false,
                }}
                onEventDrop={handleEventDrop}
                resizable
            />
        </>
    );
};

export default CalendarComp;
