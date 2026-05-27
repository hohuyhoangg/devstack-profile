import { useState } from "react";

const TiltCard = ({ children, className = "", max = 15, scale = 1, speed = 450 }) => {
  const [style, setStyle] = useState({});

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((rect.height / 2 - y) / (rect.height / 2)) * max;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * max;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
      transition: "transform 80ms ease-out",
    });
  };

  const handlePointerLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: `transform ${speed}ms ease`,
    });
  };

  return (
    <div
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={style}
    >
      {children}
    </div>
  );
};

export default TiltCard;
