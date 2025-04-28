import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";
import Avatar1 from "@root/assets/img/imgs/avatar1.png";
import Avatar2 from "@root/assets/img/imgs/Ellipse7.png";
import Avatar3 from "@root/assets/img/imgs/Ellipse5.png";
import Avatar4 from "@root/assets/img/imgs/Ellipse8.png";
import Avatar5 from "@root/assets/img/imgs/Ellipse9.png";
import Avatar6 from "@root/assets/img/imgs/Ellipse11.png";
import DiscordIcon from "@root/assets/img/imgs/610663ab3f94187ed091605cd582520ca651911b.gif";
import Image, { StaticImageData } from "next/image";

interface Avatar {
  id: number;
  img: StaticImageData;
  speed: number; // in pixels/sec
}

const avatars: Avatar[] = [
  { id: 1, img: Avatar1, speed: 30 },
  { id: 2, img: Avatar2, speed: 30 },
  { id: 3, img: Avatar3, speed: 30 },
  { id: 4, img: Avatar4, speed: 60 },
  { id: 5, img: Avatar5, speed: 60 },
  { id: 6, img: Avatar6, speed: 60 },
];

const createCirclePath = (cx: number, cy: number, r: number): string => {
  return `
    M ${cx + r}, ${cy}
    a ${r},${r} 0 1,0 ${-2 * r},0
    a ${r},${r} 0 1,0 ${2 * r},0
  `;
};

const OrbitAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animate = async () => {
      const { MotionPathPlugin } = await import("gsap/MotionPathPlugin");
      gsap.registerPlugin(MotionPathPlugin);

      const center = 0;
      const radius1 = 120; // Inner orbit radius
      const radius2 = 200; // Outer orbit radius

      const path1 = createCirclePath(center, center, radius1);
      const path2 = createCirclePath(center, center, radius2);

      const circumference1 = 2 * Math.PI * radius1;
      const circumference2 = 2 * Math.PI * radius2;

      const avatarsEl = containerRef.current?.querySelectorAll(".avatar");
      if (!avatarsEl) return;

      // Group avatars by orbit
      const innerOrbitAvatars = Array.from(avatarsEl).slice(0, 3);
      const outerOrbitAvatars = Array.from(avatarsEl).slice(3);

      // Position avatars in the inner orbit with equal spacing
      innerOrbitAvatars.forEach((el, i) => {
        const avatar = avatars[i];
        const speed = avatar.speed;
        const duration = circumference1 / speed;
        
        // Calculate starting position - evenly distribute around the circle
        const startPosition = i / innerOrbitAvatars.length;
        
        // Set initial position on the path
        gsap.set(el, {
          motionPath: {
            path: path1,
            start: startPosition,
            end: startPosition + 1,
            autoRotate: false,
          },
        });
        
        // Animate along the path
        gsap.to(el, {
          duration,
          repeat: -1,
          ease: "none",
          motionPath: {
            path: path1,
            start: startPosition,
            end: startPosition + 1,
            autoRotate: false,
          },
        });
      });

      // Position avatars in the outer orbit with equal spacing
      outerOrbitAvatars.forEach((el, i) => {
        const avatarIndex = i + 3;
        const avatar = avatars[avatarIndex];
        const speed = avatar.speed;
        const duration = circumference2 / speed;
        
        // Calculate starting position - evenly distribute around the circle
        const startPosition = i / outerOrbitAvatars.length;
        
        // Set initial position on the path
        gsap.set(el, {
          motionPath: {
            path: path2,
            start: startPosition,
            end: startPosition + 1,
            autoRotate: false,
          },
        });
        
        // Animate along the path
        gsap.to(el, {
          duration,
          repeat: -1,
          ease: "none",
          motionPath: {
            path: path2,
            start: startPosition,
            end: startPosition + 1,
            autoRotate: false,
          },
        });
      });
    };

    animate();
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        width: 500,
        height: 500,
        margin: "auto",
        borderRadius: "50%",
        border: "2px dashed #0590FB52",
      }}
    >
      {/* Center Discord Logo */}
      <Box
        sx={{
          position: "absolute",
          width: 100,
          height: 100,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        <Image
          src={DiscordIcon}
          alt="Discord Logo"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Avatars */}
      {avatars.map((avatar, index) => (
        <Box
          key={avatar.id}
          className="avatar"
          sx={{
            position: "absolute",
            width: 60,
            height: 60,
            borderRadius: "50%",
            zIndex: 1,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src={avatar.img}
            alt={`Avatar ${avatar.id}`}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Box>
      ))}

      {/* Orbit circles */}
      <Box
        sx={{
          position: "absolute",
          width: 150,
          height: 150,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "#44DBCE63",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "#48E0CB17",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 230,
          height: 230,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "#48E0CB26",
        }}
      />
    </Box>
  );
};

export default OrbitAnimation;