const Event = ({event}) => {
    const generateQRCode = () => {
        // TODO:generate qr code and show it on the screen
    }
    return <div className="container">
        <div className="row">
            <div className="col-1">
                <p>{event.name}</p>
                <p>{event.status}</p>
            </div>
        </div>
        <div className="row">
            <div className="col-1">
                <p>{event.openDate} - {event.closeDate}</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <p>{event.description}</p>
            </div>
            <div className="col-md-6">
                <p>Code: {event.code}</p>
                <button onClick={generateQRCode}>Generate QR Code</button>
            </div>
        </div>
    </div>
}

export default Event;