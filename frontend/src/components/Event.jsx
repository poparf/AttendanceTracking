const parseDate = (date) => {
  let openingDate = new Date(date);
  let modifiedEventOpeningDate = '';
  modifiedEventOpeningDate = modifiedEventOpeningDate.concat(openingDate.getDate());
  modifiedEventOpeningDate = modifiedEventOpeningDate.concat("/");
  modifiedEventOpeningDate = modifiedEventOpeningDate.concat(openingDate.getMonth());
  modifiedEventOpeningDate = modifiedEventOpeningDate.concat("/");
  modifiedEventOpeningDate = modifiedEventOpeningDate.concat(openingDate.getFullYear());
  modifiedEventOpeningDate = modifiedEventOpeningDate.concat(" ");
  modifiedEventOpeningDate = modifiedEventOpeningDate.concat(openingDate.getHours());
  modifiedEventOpeningDate = modifiedEventOpeningDate.concat(":");
  modifiedEventOpeningDate = modifiedEventOpeningDate.concat(openingDate.getMinutes());

  return modifiedEventOpeningDate;
}

const Event = ({event}) => {
    const generateQRCode = () => {
        // TODO:generate qr code and show it on the screen
    }

    return <div className="flex-row md:m-12">
    <div>
        <div className="flex justify-between bg-red-400">
          <p>{event.name}</p>
          <p>{event.status}</p>
        </div>
        <div className="flex justify-end bg-red-600">
          <p>{parseDate(event.openDate)} - {parseDate(event.closingDate)}</p>
        </div>
        <div className="flex justify-between bg-green-300">
          <p>{event.description}</p>
          <div className="flex-col bg-blue-300">
            <p>Code: {event.code}</p>
            <button>Generate QR Code</button>
          </div>
        </div>
      </div>
    </div>
}

export default Event;