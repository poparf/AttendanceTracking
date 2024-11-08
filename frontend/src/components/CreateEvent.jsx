import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import axios from "axios";
import { serverBaseUrl } from "../utils/variables";

const CreateEvent = () => {
  const { groups, setGroups } = useUser();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [newEvent, setNewEvent] = useState({
    name: "",
    description: "",
    openDate: new Date().toISOString().split("T")[0],
    closeTime: new Date().toISOString().split("T")[0],
    groupName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createEvent = async (e) => {
    e.preventDefault();

    const openDateTime = new Date(
      `${newEvent.openDate}T${newEvent.openTime || "00:00"}`
    );
    const closeDateTime = new Date(
      `${newEvent.closeDate}T${newEvent.closeTime || "00:00"}`
    );

    if (openDateTime > closeDateTime) {
      setError(
        "Open date and time must not be after the closing date and time."
      );
      return;
    }

    if (
      newEvent.name === "" ||
      newEvent.description === "" ||
      newEvent.groupName === ""
    ) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    // Send the new event to the backend
    const groupId = groups.find((group) => group.name === newEvent.groupName).id;
    if (!groupId) {
      setError("Group not found");
      return;
    }
    let requestBody = {
      name: newEvent.name,
      description: newEvent.description,
      openDate: openDateTime,
      closeDate: closeDateTime,
      groupId: groupId,
    }
      try {
        const response = await axios.post(`${serverBaseUrl}/api/event`, requestBody, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setMessage("Event created successfully.");
        setGroups((prevGroups) =>
          prevGroups.map((group) =>
            group.id === groupId
              ? {
            ...group,
            events: [
              ...group.events,
              response.data
            ],
          }
              : group
          )
        );
        
      } catch (error) {
        console.error("Failed to create event", error);
        setError("Failed to create event");
    }
    setTimeout(() => setMessage(""), 3000);
    setTimeout(() => setError(""), 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <Link to="/home">
            <ArrowLeft size={24} />
          </Link>
          <p className="ml-2 text-gray-700">Go Back</p>
        </div>
        <form onSubmit={createEvent} className="flex flex-col">
          <select
            name="groupName"
            value={newEvent.groupName}
            onChange={handleInputChange}
            className="mb-4 p-2 border rounded-md"
          >
            <option value="" disabled>Select Group</option>
            {groups.map((group) => (
              <option key={group.name} value={group.name}>
                {group.name}
              </option>
            ))}
          </select>
          <input
            className="mb-4 p-2 border rounded-md"
            name="name"
            type="text"
            value={newEvent.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <textarea
            className="mb-4 p-2 border rounded-md"
            name="description"
            value={newEvent.description}
            onChange={handleInputChange}
            placeholder="Description"
          ></textarea>

          <div className="flex flex-col justify-between">
            <div className="flex justify-evenly">
              <label className="mb-2 text-gray-700">Open date:</label>
              <label className="mb-2 text-gray-700">Open time:</label>
            </div>
            <div className="flex justify-evenly">
              <input
                className="mb-4 p-2 border rounded-md"
                name="openDate"
                type="date"
                value={newEvent.openDate}
                onChange={handleInputChange}
              />
              <input
                className="mb-4 p-2 border rounded-md"
                name="openTime"
                type="time"
                value={newEvent.openTime}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex justify-evenly">
              <label className="mb-2 text-gray-700">Close date:</label>
              <label className="mb-2 text-gray-700">Close time:</label>
            </div>
            <div className="flex justify-evenly">
              <input
                className="mb-4 p-2 border rounded-md"
                name="closeDate"
                type="date"
                value={newEvent.closeDate}
                onChange={handleInputChange}
              />
              <input
                className="mb-4 p-2 border rounded-md"
                name="closeTime"
                type="time"
                value={newEvent.closeTime}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Create Event
          </button>
        </form>
        {message && (
          <div className="fixed top-4 right-4 bg-green-500 text-white p-2 rounded-md">
            {message}
          </div>
        )}
        {error && (
          <div className="fixed top-4 right-4 bg-red-500 text-white p-2 rounded-md">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateEvent;
