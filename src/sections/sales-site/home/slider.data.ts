import { styled } from "@mui/material";
import Slider from "react-slick";

export const SliderContainer = styled(Slider)`
  margin: 0 0 1rem 1.5rem;   

  .slick-slide {
    padding:70px;
    height: 500px; 
  }

  .slick-prev,
  .slick-next {
    z-index: 1000; 
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: grey;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    // opacity: 0.75;

    &:hover {
      opacity: 1;
    }
  }

  .slick-prev {
    left: 10px; // Adjust as needed
  }

  .slick-next {
    right: 10px; // Adjust as needed
  }
`;