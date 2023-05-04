import Skill from "./Skill"
import './Skill.css'
import styled from "styled-components"

const skills = [
    {title: 'HTML', url: 'https://www.svgrepo.com/show/508839/html5-02.svg'},
    {title: 'CSS', url: 'https://www.svgrepo.com/show/508795/css3-02.svg'},
    {title: 'SASS', url: 'https://www.svgrepo.com/show/394408/sass.svg'},
    {title: 'JAVASCRIPT', url: 'https://www.svgrepo.com/show/378430/javascript-fill.svg'},
    {title: 'REACT', url: 'https://www.svgrepo.com/show/503536/react.svg'},
    {title: 'GIT', url: 'https://www.svgrepo.com/show/509966/git.svg'},
    {title: 'GITHUB', url: 'https://www.svgrepo.com/show/473620/github.svg'}
]

const skills2 = [
    {title: 'VISUAL STUDIO CODE', url: 'https://www.svgrepo.com/show/342347/visual-studio-code.svg'},
    {title: 'TRELLO', url: 'https://www.svgrepo.com/show/394518/trello.svg'}
]

const Hr = styled.hr`
    display: block;
    height: 3px;
    background-color: #000;
    margin: 0;
    border: none;
`
const Title = styled.h2`
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    margin: 0;
    text-align: center;
    padding: 60px 0 20px;
    letter-spacing: 1px;
`

const Skills = ()=> {
    return (
        <div className="container" id="skills">
            <Title>Skills</Title>
            <div className="skills">
            {skills.map(skill => {
                return <Skill title={skill.title} url={skill.url} key={skill.title}/>
            })}            
            </div>
            <Hr/>
            <div className="skills skills-2">
            {skills2.map(skill => {
                return <Skill title={skill.title} url={skill.url} key={skill.title}/>
            })}            
            </div>
        </div>
    )
}

export default Skills