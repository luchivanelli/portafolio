import styled from "styled-components"

const Title = styled.h4`
    font-size: 18px;
    margin: 0;
    padding: 2px 0;
    font-weight: 400;
`

const Skills = styled.p`
    margin: 0;
    padding: 2px 0;
    font-size: 14px;
    font-weight: 100;
`

const Link = styled.a`
    margin-top: 10px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    color: #000;
    padding: 4px 10px;
    background-color: #fff;
    border-radius: 10px;
    transition: all 0.5s;
    border: 2px solid #000;

    &:hover {
        color: #fff;
        background-color: #000;
        transition: all 0.2s;
    }
`

const Proyect = ({title, link, skills, img})=> {
    return (
        <div className="proyect">
            <div className="div-img">
                <img src={img} alt={title}/>
            </div>
            <div className="div-info">
                <Title>{title}</Title>
                <Skills>{skills}</Skills>
                <Link href={link} target='_blank'>See proyect</Link>
            </div> 
        </div>
    )
}

export default Proyect