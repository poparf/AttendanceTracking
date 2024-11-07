import axios from "axios";
import Event from "./Event";
import { useEffect, useState } from "react";
import useUser from "../hooks/useUser";

const GroupList = () => {
  const { groups } = useUser();
  return (
    <>
      {groups ? (
        <>
          {groups.map((group, idx) => {
            return (
              <div key={idx} className="bg-white rounded-2xl border shadow-md w-auto p-2 md:p-4">
                <p className="text-2xl font-extrabold mb-2 text-center">
                  {group.name}
                </p>
                {group.events.map((event, idx) => {
                  return (
                    <div key={idx}>
                      <Event event={event} />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </>
      ) : (
        <p>You don't have any events created.</p>
      )}
    </>
  );
};

export default GroupList;
