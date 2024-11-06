const parseDate = (date) => {
  let openingDate = new Date(date);
  let modifiedEventOpeningDate = openingDate.getDate() + "/" + openingDate.getMonth() + "/"  + openingDate.getFullYear() + " " + openingDate.getHours() + ":" + openingDate.getMinutes();
  return modifiedEventOpeningDate;
}

const Event = ({event}) => {
   
    const [showPopUp, setShowPopUp] = useState(false);
    const []

    const handleGenerateBtnClick = () => {
      setShowPopUp(!showPopUp);
    }

    const generateQRCode = () => {
        
    }

    console.log(event);
    return <div className="flex-row md:m-12 border-2 p-2">
    <div>
        <div className="flex justify-between">
          <p>{event.name}</p>
          <p>{event.status}</p>
        </div>
        <div className="flex justify-end">
          <p>{parseDate(event.openDate)} - {parseDate(event.closingDate)}</p>
        </div>
        <div className="flex justify-between border-t-2">
          <p>{event.description}</p>
        <div className="flex-col border-l-2 p-2">
          <p>Code: {event.code}</p>
          <button className="btn btn-primary" onClick={handleGenerateBtnClick}>QRCode</button>
        </div>
        </div>
      </div>
    </div>
}

export default Event;