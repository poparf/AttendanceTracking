import { useEffect, useRef } from "react";
// S a incercat ceva aici // poti sterge
const VerticalCanvas = (props) => {
  const canvasRef = useRef(null);

  const draw = (ctx) => {
    const canvasWidth = canvasRef.current.width;
    const canvasHeight = canvasRef.current.height;
    const circleRadius = 100;
    const textSize = 32;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.font = `${textSize}px Arial bold`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Draw first circle
    ctx.beginPath();
    ctx.arc(canvasWidth / 4, canvasHeight / 2, circleRadius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillText("Register", canvasWidth / 4, canvasHeight / 2);
    ctx.fillText("Step 1", canvasWidth / 4 , canvasHeight / 2 - 125)

    // Draw second circle
    ctx.beginPath();
    ctx.arc(canvasWidth / 2, canvasHeight / 2, circleRadius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillText("Create event", canvasWidth / 2, canvasHeight / 2);
    ctx.fillText("Step 2", canvasWidth / 2 , canvasHeight / 2 - 125)

    // Draw third circle
    ctx.beginPath();
    ctx.arc((3 * canvasWidth) / 4, canvasHeight / 2, circleRadius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillText("QR Code", (3 * canvasWidth) / 4, canvasHeight / 2);
    ctx.fillText("Step 3", (3 * canvasWidth) / 4 , canvasHeight / 2 - 125)

    // Draw lines connecting circles
    ctx.beginPath();
    ctx.moveTo((canvasWidth / 4) + circleRadius, canvasHeight / 2);
    ctx.lineTo((canvasWidth / 2) - circleRadius, canvasHeight / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo((canvasWidth / 2) + circleRadius, canvasHeight / 2);
    ctx.lineTo((3 * canvasWidth / 4) - circleRadius, canvasHeight / 2);
    ctx.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    draw(ctx);
  }, [draw]);

  return (
    <canvas
      className="border"
      width="1500px"
      height="800px"
      ref={canvasRef}
      {...props}
    />
  );
};

export default VerticalCanvas;
