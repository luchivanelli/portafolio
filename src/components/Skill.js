import './Skill.css'

const Skill = ({url, title}) => {
    return (
        <div className="skill">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default Skill