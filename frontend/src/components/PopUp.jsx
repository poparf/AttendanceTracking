import QRCode from 'qrcode';

const PopUp = ({code}) => {

    const generateQR = async text => {
        try {
            let qrCanvas = document.getElementById('qr-canvas');
            await QRCode.toCanvas(qrCanvas, text);
        } catch (err) {
            // TODO: Do something in case of error...
            console.error(err);
        }
    }

    return <div className="flex flex-row items-center justify-center">
        <div>
            <p>Code: {code}</p>
        </div>
        <div>
            <canvas id="qr-canvas" className='h-2/6 w-2/6'></canvas>
        </div>
    </div>
}

export default PopUp;