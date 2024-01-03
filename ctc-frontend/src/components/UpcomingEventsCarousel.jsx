import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect } from "react";
import { getUpcomingEvent } from "../../api";
import { urlFor } from "../../sanity";

// this is upcoming events carousel

const UpcomingReactCarousel = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getUpcomingEvent().then((data) => {
          setUpcomingEvents(data);
          // console.log(upcomingEvents);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col">
      <Carousel
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
      >
        {upcomingEvents?.map((i, idx) => (
          <img key={idx} src={urlFor(upcomingEvents[idx]?.image).url()} />
        ))}

        {/* <img src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931619/6_cvzbgn.png" />
        <img src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931620/7_sd8u5b.png" />
        <img src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931619/3_ji3ctw.png" />
        <img src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931619/5_pgkgby.jpg" />
        <img src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931619/2_vbk5ox.jpg" />
        <img src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931619/2_vbk5ox.jpg" />
        <img src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931618/4_b1pppk.jpg" /> */}
      </Carousel>
    </div>
  );
};

export default UpcomingReactCarousel;
