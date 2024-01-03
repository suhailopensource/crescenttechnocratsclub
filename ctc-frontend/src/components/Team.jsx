import React, { useEffect } from "react";
import "../../src/team.css";
import Members from "./Members";
import { getHod } from "../../api.js";
import { useState } from "react";
import { urlFor } from "../../sanity.js";

const Team = () => {
  const [hod, setHod] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getHod().then((data) => {
          setHod(data);
          // console.log(hod[0].name);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const imageUrl = hod[0]?.image ? urlFor(hod[0]?.image).url() : null;
  const name = hod[0]?.name ? hod[0]?.name : null;

  return (
    <>
      <div className="bg-black h-[700px] w-screen flex items-center justify-center">
        <div className="text-white h-[266px] w-[560px] text-center text-2xl smaller_text capitalize px-2">
          <span className="text-cyan-300 text-3xl">C</span>rescent Technocrats
          Club was established in 2020 as the technical club of B S Abdur Rahman
          Crescent Institute of Science and Technology. The main focus of the
          club is to get students on board for technical skill improvement
          through various kind of programs.
        </div>
      </div>

      <section className="bg-black  w-screen mb-10 z-[-1000000]  relative ">
        <div className="p-10">
          <div className=" flex justify-center ">
            <div className="text-white font-bold text-2xl">MEET THE TEAM</div>
          </div>
          <br />
          <br />
          <br />

          <div className="flex justify-center items-center landscape_card hidden">
            <div className="w-[75%]  blackie">
              <div className="flex ">
                <img className="w-2/5 h-[500px]" src={imageUrl} />
                <div className="w-3/5 flex items-center justify-center relative">
                  <div className="text-white p-5">
                    <div className="mb-5 font-bold text-3xl ">{name}</div>

                    <div className="text-2xl">
                      {hod[0]?.position} - {hod[0]?.department}
                    </div>
                    <div className="text-2xl">
                      {hod[0]?.clubPosition} - Crescent Technocrats Club
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center portrait_card hidden">
            <div className=" blackie w-[400px]">
              <div className="flex flex-col ">
                <img className="w-full h-[400px]" src={imageUrl} />
                <div className="w-full flex items-center justify-center ">
                  <div className="text-white p-5 text-center">
                    <div className="mb-5 font-bold text-3xl ">{name}</div>

                    <div className="text-2xl">
                      <span className="font-bold">{hod[0]?.position}</span> -
                      {hod[0]?.department}
                    </div>
                    <div className="text-2xl">
                      <span className="font-bold">{hod[0]?.clubPosition}</span>{" "}
                      - Crescent Technocrats Club
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute left-0 bottom-0 z-[-1] "
          src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931011/hefgru_fvgoaw.png"
        />
      </section>
      <Members />
      <img
        className="absolute left-0 bottom-0 responsive_img"
        src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931011/hefgru_fvgoaw.png"
      />
      <img
        className="absolute right-0 bottom-0 responsive_img"
        src="https://res.cloudinary.com/djbqutkuf/image/upload/v1698931011/lol-removebg-preview_o9orzd.png"
      />
    </>
  );
};

export default Team;
