import React from "react";
import { stackList } from "../../data/ProjectData";
import img from "../../Assets/img.png";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={img}
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Moses Elechi</strong> and I enjoy
            solving problems with codes. Experienced with all stage of development cycle from simple to dynamic web projects. Well-versed in numerous programming technologies including HTML, CSS, JavaScript, PHP, laravel, node js, and React. 
          </div>
          <div className="AboutBio tagline2">
            Here are some of technologies I use in solving Problems.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
