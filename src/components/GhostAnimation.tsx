"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import GhostImage from "@root/assets/img/imgs/ghoost.png";
import coverImage from "@root/assets/img/imgs/BlockchainCover.gif";
import { Box } from "@mui/material";

const GhostAnimation = () => {
  const ghostRef = useRef(null);

  useEffect(() => {
    if (ghostRef.current) {
      // Bounce up and down animation
      gsap.to(ghostRef.current, {
        y: -40, // Move 30px up
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Glow effect pulsing
      gsap.to(ghostRef.current, {
        filter: "drop-shadow(0 0 30px #00f0ff)",
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "fit-content",
        margin: "0 auto", // center the whole container horizontally
      }}
    >
      {/* Cover Image */}
      <Image
        src={coverImage}
        alt="Cover"
        style={{ width: "500px", height: "auto" }}
      />

      {/* Ghost Image */}
      <Box
        ref={ghostRef}
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "200px",
          height: "200px",
          pointerEvents: "none", // Let mouse clicks pass through
        }}
      >
        <Image
          src={GhostImage}
          alt="Ghost"
          width={200}
          height={200}
          style={{
            width: "100%",
            height: "auto",
            filter: "drop-shadow(0 0 20px #00f0ff) brightness(1.2)",
          }}
        />
      </Box>
    </Box>
  );
};

export default GhostAnimation;
