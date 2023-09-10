import React, { useEffect, useRef } from 'react';
import './../component-css/BackgroundAnimation.css';

function BackgroundAnimation() {
  const backgroundCanvasRef = useRef();
  const foregroundCanvas1Ref = useRef();
  const foregroundCanvas2Ref = useRef();
  const config = {
    circle: {
      amount: 18,
      layer: 3,
      color: [157, 97, 207],
      alpha: 0.3,
    },
    speed: 0.5,
    angle: 20,
  };

  useEffect(() => {
    const backgroundCanvas = backgroundCanvasRef.current;
    const foregroundCanvas1 = foregroundCanvas1Ref.current;
    const foregroundCanvas2 = foregroundCanvas2Ref.current;
    const M = window.Math;
    const degree = (config.angle / 360) * M.PI * 2;
    let circles = [];
    let wWidth, wHeight;
    let timer;

    const requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      function (callback) {
        setTimeout(callback, 1000 / 60);
      };

    const cancelAnimationFrame =
      window.cancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.msCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      clearTimeout;

    const setCanvasHeight = () => {
      wWidth = window.innerWidth;
      wHeight = window.innerHeight;

      backgroundCanvas.width = wWidth;
      backgroundCanvas.height = wHeight;
      foregroundCanvas1.width = wWidth;
      foregroundCanvas1.height = wHeight;
      foregroundCanvas2.width = wWidth;
      foregroundCanvas2.height = wHeight;
    };

    const drawCircle = (x, y, radius, color, alpha) => {
      const fctx1 = foregroundCanvas1.getContext('2d');
      const gradient = fctx1.createRadialGradient(x, y, radius, x, y, 0);
      gradient.addColorStop(
        0,
        `rgba(${color[0]},${color[1]},${color[2]},${alpha})`
      );
      gradient.addColorStop(
        1,
        `rgba(${color[0]},${color[1]},${color[2]},${alpha - 0.1})`
      );

      fctx1.beginPath();
      fctx1.arc(x, y, radius, 0, M.PI * 2, true);
      fctx1.fillStyle = gradient;
      fctx1.fill();
    };

    const drawBack = () => {
      const bctx = backgroundCanvas.getContext('2d');
      bctx.clearRect(0, 0, wWidth, wHeight);

      const gradient = [];

      gradient[0] = bctx.createRadialGradient(
        wWidth * 0.3,
        wHeight * 0.1,
        0,
        wWidth * 0.3,
        wHeight * 0.1,
        wWidth * 0.9
      );
      gradient[0].addColorStop(0, 'rgb(0, 26, 77)');
      gradient[0].addColorStop(1, 'transparent');

      bctx.translate(wWidth, 0);
      bctx.scale(-1, 1);
      bctx.beginPath();
      bctx.fillStyle = gradient[0];
      bctx.fillRect(0, 0, wWidth, wHeight);

      gradient[1] = bctx.createRadialGradient(
        wWidth * 0.1,
        wHeight * 0.1,
        0,
        wWidth * 0.3,
        wHeight * 0.1,
        wWidth
      );
      gradient[1].addColorStop(0, 'rgb(0, 150, 240)');
      gradient[1].addColorStop(0.8, 'transparent');

      bctx.translate(wWidth, 0);
      bctx.scale(-1, 1);
      bctx.beginPath();
      bctx.fillStyle = gradient[1];
      bctx.fillRect(0, 0, wWidth, wHeight);

      gradient[2] = bctx.createRadialGradient(
        wWidth * 0.1,
        wHeight * 0.5,
        0,
        wWidth * 0.1,
        wHeight * 0.5,
        wWidth * 0.5
      );
      gradient[2].addColorStop(0, 'rgb(40, 20, 105)');
      gradient[2].addColorStop(1, 'transparent');

      bctx.beginPath();
      bctx.fillStyle = gradient[2];
      bctx.fillRect(0, 0, wWidth, wHeight);
    };

    const animate = () => {
      const sin = M.sin(degree);
      const cos = M.cos(degree);

      if (config.circle.amount > 0 && config.circle.layer > 0) {
        const fctx1 = foregroundCanvas1.getContext('2d');
        fctx1.clearRect(0, 0, wWidth, wHeight);
        for (let i = 0, len = circles.length; i < len; i++) {
          const item = circles[i];
          let x = item.x;
          let y = item.y;
          const radius = item.radius;
          const speed = item.speed;

          if (x > wWidth + radius) {
            x = -radius;
          } else if (x < -radius) {
            x = wWidth + radius;
          } else {
            x += sin * speed;
          }

          if (y > wHeight + radius) {
            y = -radius;
          } else if (y < -radius) {
            y = wHeight + radius;
          } else {
            y -= cos * speed;
          }

          item.x = x;
          item.y = y;
          drawCircle(x, y, radius, item.color, item.alpha);
        }
      }

      timer = requestAnimationFrame(animate);
    };

    const createItem = () => {
      circles = [];

      if (config.circle.amount > 0 && config.circle.layer > 0) {
        for (let i = 0; i < config.circle.amount / config.circle.layer; i++) {
          for (let j = 0; j < config.circle.layer; j++) {
            circles.push({
              x: M.random() * wWidth,
              y: M.random() * wHeight,
              radius: M.random() * (20 + j * 5) + (20 + j * 5),
              color: config.circle.color,
              alpha: M.random() * 0.2 + (config.circle.alpha - j * 0.1),
              speed: config.speed * (1 + j * 0.5),
            });
          }
        }
      }

      cancelAnimationFrame(timer);
      timer = requestAnimationFrame(animate);
      drawBack();
    };

    const handleResize = () => {
      setCanvasHeight();
      createItem();
    };

    setCanvasHeight();
    createItem();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="bg">
      <canvas ref={backgroundCanvasRef}></canvas>
      <canvas ref={foregroundCanvas1Ref}></canvas>
      <canvas ref={foregroundCanvas2Ref}></canvas>
    </div>
  );
}

export default BackgroundAnimation;
