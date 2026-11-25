import { useRef, useEffect } from "react";

/**
 * Main React bridge component that mounts the HTML5 Canvas
 * and runs the 60FPS requestAnimationFrame game loop.
 *
 * @returns {JSX.Element} The responsive game canvas element.
 */
export default function GameCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let playerX = 50;
    const playerY = 50;
    const playerSize = 32;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      playerX += 1;

      if (playerX > canvas.width) playerX = -playerSize;

      ctx.fillStyle = "red";
      ctx.fillRect(playerX, playerY, playerSize, playerSize);
      animationFrameId = requestAnimationFrame(render);
    };

    render(); // Kick off the loop

    return () => cancelAnimationFrame(animationFrameId); //Cleanup
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // This is the LOGICAL resolution. Physics are calculated based on this.
      width={800}
      height={600}
      style={{
        backgroundColor: "#5C94FC", // Classic Mario sky blue
        display: "block",
        // RESPONSIVE CSS: Scales the canvas to fit the screen without stretching
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain",
        // Forces the browser to keep pixels sharp when scaling up (no blurring)
        imageRendering: "pixelated",
      }}
    />
  );
}
