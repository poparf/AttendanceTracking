const QRCode = require('qrcode')

/*

Mai bine genereaza qr code ul si codul client ul 
*/

// The qr code should be a link
// to the url/{code} where participants
// can register with their names
const baseURL = "http://localhost:3001/";

const generateQR = async (code) => {
    try {
        QRCode.toFile("./output.png", baseURL + code)
        
    } catch (err) {
        console.error(err);
    }
}

