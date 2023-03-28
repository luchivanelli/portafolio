import './Proyects.css'
import Proyect from './Proyect'
import styled from 'styled-components'

const proyects = [
    {title: 'Horses in freedom', link: 'https://manuel14mds.github.io/viewinkua/', skills: 'Html, Css, Javascript', img: 'https://www.svgrepo.com/show/455283/barn.svg'},
    {title: 'PIA', link: 'https://luchivanelli.github.io/LandingPagePIA/', skills: 'Html, Css', img: 'https://www.svgrepo.com/show/510167/robot.svg'},
    {title: 'Images search', link: 'https://luchivanelli.github.io/buscador/', skills: 'React (Formik, Api "unsplash")', img: 'https://www.svgrepo.com/show/502798/photo.svg'},
    {title: 'Compound interest calculator', link: 'https://luchivanelli.github.io/interes-compuesto/', skills: 'React (Formik, Styled-components, Yup)', img: 'https://www.svgrepo.com/show/501117/calculator.svg'},
    {title: 'My attached', link: 'https://luchivanelli.github.io/portafolio/', skills: 'React (Styled-components), Css', img: 'https://www.svgrepo.com/show/510353/woman.svg'},
]

const Title = styled.h2`
    font-size: 28px;
    margin-top: 0;
    color: #000;
    width: 100%;
    text-align: center;
`

const Proyects = ()=> {
    return (
        <div className='proyects' id='proyects'>
            <Title>These are my latest projects</Title>
            {proyects.map(proyect => {
                return <Proyect 
                title={proyect.title} 
                link={proyect.link}
                skills={proyect.skills}
                img= {proyect.img}
                />
            })}
        </div>
    )
}

export default Proyects