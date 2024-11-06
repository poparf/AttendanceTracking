import QRCode from "qrcode";
import { useEffect } from "react";

const PopUp = ({ code, setShowPopUp }) => {
  const generateQR = async (text) => {
    try {
      let qrCanvas = document.getElementById("qr-canvas");
      await QRCode.toCanvas(qrCanvas, text, { width: 256 });
      console.log("done.");
    } catch (err) {
      // TODO: Do something in case of error...
      console.error(err);
    }
  };

  useEffect(() => {
    generateQR(code);
  }, [code]);

  return (
    <div className="filter fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-md relative">
        <button
          className="absolute top-3 right-3 text-red-600 hover:text-red-800"
          onClick={() => setShowPopUp(false)}
        >
          Exit
        </button>
        <div className="text-center mb-4">
          <p className="font-semibold text-lg">Code: {code}</p>
        </div>
        <div className="flex justify-center">
          <canvas id="qr-canvas" className="h-96 w-96" ></canvas>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
