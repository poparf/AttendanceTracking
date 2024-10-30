import axios from "axios";
import Event from "./Event";
import { useEffect, useState } from "react";

const GroupList = ({ user }) => {
  const [groupEvents, setGroupEvents] = useState(null);
  const [haveEvents, setHaveEvents] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/group?organizer=${user.name}`)
      .then((res) => {
        console.log(res.data);
        setHaveEvents(true);
        setGroupEvents(res.data);
      })
      .catch((error) => {
        setHaveEvents(false);
      });
  }, []);

  return (
    <div>
      {haveEvents ? (
        <>
          {groupEvents.map((group) => {
            return (
            <div>
              <p>Group name: {group.name}</p>
              {group.events.map((event, idx) => {
                return (
                <div key={idx}>
                  <Event event={event} />;
                </div>
                )
              })}
            </div>
            )
          })}
        </>
      ) : (
        <div>You don't have any events created.</div>
      )}
    </div>
  );
};

export default GroupList;
