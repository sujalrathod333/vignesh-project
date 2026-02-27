import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QrGenerator = () => {
  const [text, setText] = useState("");
  const qrRef = useRef(null);

  const downloadQR = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "qr-code.png";
    link.click();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">QR Code Generator</h2>

        <input
          type="text"
          placeholder="Enter text or URL"
          className="w-full p-2 border rounded mb-4"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {text && (
          <div ref={qrRef} className="flex justify-center mb-4">
            <QRCodeCanvas value={text} size={180} />
          </div>
        )}

        {text && (
          <button
            onClick={downloadQR}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Download QR
          </button>
        )}
      </div>
    </div>
  );
};

export default QrGenerator;
