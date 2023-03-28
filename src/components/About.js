import styled from "styled-components"
import './About.css'
import Cv from './Cv'
import Certificates from "./Certificates"


const Title = styled.h2`
    font-size: 28px;
    color: var(--color-2);
    font-weight: 700;
    margin-top: 0;
`

const Title2 = styled.h3`
    font-size: 22px;
    font-weight: 400;
    color: var(--color-2);
    text-align: center;
    margin: 50px 0 0;
`

const Description = styled.p`
    font-weight: 100;
    color: var(--color-2);
    font-size: 18px;
    width: 60%;
    line-height: 26px;
    text-align: justify;
`

const About = ()=> {
    return (
        <div className="about" id="about">
            <Title>About Me</Title>
            <Description>Hello, my name is Luciana Vanelli, I am 22 years old and I live in Arroyo Seco, Santa Fe, Argentina. I am a trainee/junior web developer, oriented to the frontend branch. I studied Systems Engineering for 2 years at the National Technological University of Rosario</Description>
            <Description>I consider myself a self-taught person eager to grow and acquire new skills. Currently, I am taking courses to improve myself and thus, be able to insert myself into the world of work.</Description>
            <Description><b>Goals: Sass, Bootstrap, Flutter</b></Description>
            <Cv/>
            <Title2>Some of my certificates...</Title2>
            <Certificates/>
        </div>
    )
}

export default About