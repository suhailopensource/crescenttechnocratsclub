import React, { useEffect } from "react";
import { useState } from "react";
import { getTeamMember } from "../../api";
import { urlFor } from "../../sanity";

const Members = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getTeamMember().then((data) => {
          setTeamMembers(data);
          // console.log(teamMembers);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // const imageUrl = teamMembers[0]?.image
  //   ? urlFor(teamMembers[0]?.image).url()
  //   : null
  return (
    <>
      <section className="bg-black w-screen relative z-[-100000] pt-10">
        <div className="p-10">
          <div className=" gap-8 place-content-center gap-y-[100px] bob flex items-center justify-center flex-wrap">
            {teamMembers?.map((i, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={urlFor(teamMembers[idx]?.image).url()}
                  className="bg-white rounded-full h-64 w-64 item my-3"
                />

                <div className="text-white capitalize text-center">
                  <div className="font-bold">{i?.name}</div>
                  <div>{i?.position}</div>
                  <div>
                    {i?.department} {i?.year}
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="flex flex-col items-center justify-center">
              <img
                src="https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"
                className="bg-white rounded-full h-64 w-64 item my-3"
              />

              <div className="text-white capitalize text-center">
                <div className="font-bold">Talha Abdur Rahman</div>
                <div>Director Of Technology</div>
                <div>B.Tech CSE IV Year</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"
                className="bg-white rounded-full h-64 w-64 item my-3"
              />

              <div className="text-white capitalize text-center">
                <div className="font-bold">Talha Abdur Rahman</div>
                <div>Director Of Technology</div>
                <div>B.Tech CSE IV Year</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"
                className="bg-white rounded-full h-64 w-64 item my-3"
              />

              <div className="text-white capitalize text-center">
                <div className="font-bold">Talha Abdur Rahman</div>
                <div>Director Of Technology</div>
                <div>B.Tech CSE IV Year</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"
                className="bg-white rounded-full h-64 w-64 item my-3"
              />

              <div className="text-white capitalize text-center">
                <div className="font-bold">Talha Abdur Rahman</div>
                <div>Director Of Technology</div>
                <div>B.Tech CSE IV Year</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"
                className="bg-white rounded-full h-64 w-64 item my-3"
              />

              <div className="text-white capitalize text-center">
                <div className="font-bold">Talha Abdur Rahman</div>
                <div>Director Of Technology</div>
                <div>B.Tech CSE IV Year</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"
                className="bg-white rounded-full h-64 w-64 item my-3"
              />

              <div className="text-white capitalize text-center">
                <div className="font-bold">Talha Abdur Rahman</div>
                <div>Director Of Technology</div>
                <div>B.Tech CSE IV Year</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"
                className="bg-white rounded-full h-64 w-64 item my-3"
              />

              <div className="text-white capitalize text-center">
                <div className="font-bold">Talha Abdur Rahman</div>
                <div>Director Of Technology</div>
                <div>B.Tech CSE IV Year</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"
                className="bg-white rounded-full h-64 w-64 item my-3"
              />

              <div className="text-white capitalize text-center">
                <div className="font-bold">Talha Abdur Rahman</div>
                <div>Director Of Technology</div>
                <div>B.Tech CSE IV Year</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"
                className="bg-white rounded-full h-64 w-64 item my-3"
              />

              <div className="text-white capitalize text-center">
                <div className="font-bold">Talha Abdur Rahman</div>
                <div>Director Of Technology</div>
                <div>B.Tech CSE IV Year</div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;
