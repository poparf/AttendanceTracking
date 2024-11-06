import PopUp from "./PopUp";
import { useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";

const parseDate = (date) => {
  const openingDate = new Date(date);
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return openingDate.toLocaleString("en-GB", options);
};

const Event = ({ event }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleGenerateBtnClick = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-4">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isExpanded ? (
                <ChevronUp onClick={() => setIsExpanded(false)} className="h-5 w-5 text-gray-600" />
              ) : (
                <ChevronDown onClick={() => setIsExpanded(true)} className="h-5 w-5 text-gray-600" />
              )}
            </button>
            <h2 className="ml-2 text-xl font-semibold text-gray-800">
              {event.name}
            </h2>

            <span
              className={
                event.status === "OPEN"
                  ? "ml-auto px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  : "ml-auto px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800"
              }
            >
              {event.status}
            </span>
          </div>

            
          <div
            className={`overflow-hidden transition-all ease-in-out duration-400 ${
              isExpanded ? "max-h-[1000px]" : "max-h-0"
            }`}>
              {/* Date Range */}
              <div className="text-right text-sm text-gray-600">
                <span>
                  {parseDate(event.openDate)} - {parseDate(event.closingDate)}
                </span>
              </div>

              {/* Content */}
              <div className="flex gap-6 pt-4 border-t border-gray-200">
                <div className="flex-grow">
                  <p className="text-gray-700 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="pl-6 border-l border-gray-200 flex flex-col items-center space-y-3">
                  <div className="text-sm text-gray-600">
                    Code:{" "}
                    <span className="font-mono font-medium">{event.code}</span>
                  </div>
                  <button
                    onClick={handleGenerateBtnClick}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    QR Code
                  </button>
                </div>
              </div>
            </div>


        </div>
      </div>

      {showPopUp && <PopUp code={event.code} setShowPopUp={setShowPopUp} />}
    </div>
  );
};

export default Event;
