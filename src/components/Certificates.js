import Certificate from './Certificate'
import inkua from '../images/inkua.jpg'
import js from '../images/javascript.jpg'
import desarrolloWeb from '../images/desarrolloWeb.jpg'
import htmlCss from '../images/htmlCss.jpg'

const certificates = [
    {title: 'Desarrollo Web', url: desarrolloWeb},
    {title: 'Html y Css', url: htmlCss},
    {title: 'Javascript', url: js},
    {title: 'Práctica profesional', url: inkua},
]

const Certificates = ()=> {
    return (
        <div className='certificates-container'>
            <div className='certificates'>
            {certificates.map(certificate => {
                return <Certificate 
                title={certificate.title} 
                url={certificate.url} 
                key={certificate.title} 
                />
            })}
            </div>
            <div className='certificates2'>
            {certificates.map(certificate => {
                return <Certificate 
                title={certificate.title} 
                url={certificate.url} 
                key={certificate.title} 
                />
            })}
            </div>
        </div>
    )
}

export default Certificates