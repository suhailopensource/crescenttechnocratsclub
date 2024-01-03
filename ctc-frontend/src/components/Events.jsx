import React from "react";
import ReactCarousel from "./ReactCarousel";
import UpcomingReactCarousel from "./UpcomingEventsCarousel";

const Events = () => {
  return (
    <>
      <section className="w-screen h-[500px] flex items-center justify-center">
        <div className="text-white w-[560px] text-center text-2xl">
          <span className="text-cyan-200 text-3xl">C</span>rescent Technocrats
          Club was established as a technical club of B S Abdur Rahman Crescent
          Institute of Science and Technology. The club's primary focus is to
          enhance and improve the various technical skills of students through
          various kinds of programs and activities. Within a span of four
          months, the Crescent Technocrats Club contributed and conducted
          various activities.
        </div>
      </section>
      <section className=" flex flex-col ">
        <div className="flex flex-col items-center my-2">
          <div className="text-white mb-5">
            <span className="font-bold text-2xl">PAST EVENTS</span>
          </div>
          <div className="w-[400px] ">
            <ReactCarousel />
          </div>
        </div>
        <hr />

        <div className="flex flex-col items-center">
          <div className="text-white my-5">
            <span className="font-bold text-2xl">UPCOMING EVENTS</span>
          </div>
          <div className="w-[400px]">
            <UpcomingReactCarousel />
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
