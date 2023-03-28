import styled from "styled-components"
import './About.css'
import CV from './CV.pdf'

const P = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: var(--color-6);
    text-align: center;
`

const Button = styled.a`
    border: 3px solid var(--color-6);
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.5s;

    .svg {
        transition: all 0.5s;
        padding: 2px 4px;
    }

    &:hover {
        background-color: var(--color-6);
        transition: all 0.2s;  
    }

    & svg:hover {
        stroke: #fff;
        transition: all 0.2s; 
    }
`

const Cv = ()=> {
    return (
        <div className="cv">
            <P>Download CV</P>
            <Button href={CV} download>
                    <svg xmlns="http://www.w3.org/2000/svg" className="svg icon icon-tabler icon-tabler-download" width="32" height="32" viewBox="0 0 24 24" stroke= 'var(--color-6)' strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                        <polyline points="7 11 12 16 17 11" />
                        <line x1="12" y1="4" x2="12" y2="16" />
                    </svg>
            </Button>
        </div>
    )
}

export default Cv

