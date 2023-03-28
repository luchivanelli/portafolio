import { useState } from "react"

const Card = ({title, url})=> {
    const [value, setValue] = useState(false)

    const handleTitle = (e)=> {
        e.target.classList.toggle('certificateEfect')
        setValue(!value)
    }

    return (
        <div className='certificate' >
            <img src={url} alt={title} onClick={handleTitle}/>
            {value ? <p className="title">{title}</p> : null}
        </div>
    )
}

export default Card