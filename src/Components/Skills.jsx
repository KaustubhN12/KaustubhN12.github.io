import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./skills.module.css";

const Skills = () => {
  var settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 2000,
    arrows: false,
    rtl: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll6: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var settings1 = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Skills = [
    {
      id: 1,
      name: "HTML",
      image: "https://img.icons8.com/color/1x/html-5.png",
    },
    {
      id: 2,
      name: "CSS",
      image: "https://img.icons8.com/color/1x/css3.png",
    },
    {
      id: 3,
      name: "Javascript",
      image: "https://img.icons8.com/color/1x/javascript.png",
    },
    {
      id: 4,
      name: "React",
      image: "https://img.icons8.com/color/1x/react-native.png",
    },
    {
      id: 5,
      name: "Redux",
      image: "https://img.icons8.com/color/1x/redux.png",
    },
    {
      id: 6,
      name: "Chakra UI",
      image: "https://img.icons8.com/color/1x/chakra-ui.png",
    },
    {
      id: 7,
      name: "Node.js",
      image: "https://img.icons8.com/color/1x/nodejs.png",
    },
    {
      id: 8,
      name: "Express.js",
      image: "https://img.icons8.com/color/1x/css3.png",
    },
    {
      id: 9,
      name: "Javascript",
      image: "https://img.icons8.com/color/1x/javascript.png",
    },
    {
      id: 10,
      name: "React",
      image: "https://img.icons8.com/color/1x/react-native.png",
    },
    {
      id: 11,
      name: "Redux",
      image: "https://img.icons8.com/color/1x/redux.png",
    },
    {
      id: 12,
      name: "Firebase",
      image: "https://img.icons8.com/color/1x/firebase.png",
    },
    {
      id: 13,
      name: "Github",
      image: "https://img.icons8.com/windows/2x/github.png",
    },
    {
      id: 14,
      name: "Tailwind",
      image: "https://img.icons8.com/color/1x/tailwindcss.png",
    },
  ];
  return (
    <>
      <Text
        fontSize="4xl"
        fontWeight="600"
        margin="auto"
        textAlign="center"
        marginTop={{ base: "30px", md: "20px", lg: "50px" }}
      >
        Tech Stacks
      </Text>
      <Box id="skills" height={["45vh", "40vh", "60vh"]}>
        <Box className="mainContainer" marginTop={"20px"}>
          <Slider {...settings}>
            {Skills.map((el) => {
              return (
                <Box
                  key={el.id}
                  alignItems={"center"}
                  textAlign={"center"}
                  padding={{ base: "10px", md: "20px", lg: "40px" }}
                  height="auto"
                >
                  <Image className={styles.skillscardimg} src={el.image} />
                  <Text className="skills-card-name">{el.name}</Text>
                </Box>
              );
            })}
          </Slider>
        </Box>

        <Box className="mainContainer" marginTop={"10px"}>
          <Slider {...settings1}>
            {Skills.map((el) => {
              return (
                <Box
                  key={el.id}
                  alignItems={"center"}
                  textAlign={"center"}
                  padding={{ base: "10px", md: "20px", lg: "40px" }}
                  height="auto"
                >
                  <Image className={styles.skillscardimg} src={el.image} />
                  <Text className="skills-card-name">{el.name}</Text>
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
