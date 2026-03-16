import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <article className = "creator-card">
            {/*if iamge exst then show it up */}
            {props.imageURL && <img src={props.imageURL} alt={props.name} style={{ width: '100%', borderRadius: '8px' }} />}

            <div className='card-content'>

                <h3>{props.name}</h3>
                <div className='info-edit' style = {{ display: 'flex', gap :'10px'}}>
                    <Link to ={`/view/${props.id}`}>
                        <img src="/icons/info.png" alt="info" style={{ width: '24px' }} />
                    </Link>
                    <Link to ={`/edit/${props.id}`}>
                        <img src="/icons/pen.png" alt="pen" style={{ width: '24px' }} />
                    </Link>
                    
                </div>
                <div className='social-rows' style = {{ display: 'flex', gap :'10px'}}> 
                    {/*only show the media icon if that the databse have */}
                    {props.youtube &&(
                        <a href = {props.youtube} target = "_blank" rel="noreferrer">
                            <img src="/icons/youtube.png" alt="YouTube" style={{ width: '24px' }} />
                        </a> 
                    )}

                    {props.twitter && (
                        <a href={props.twitter} target="_blank" rel="noreferrer">
                            <img src="/icons/twitter.png" alt="Twitter" style={{ width: '24px' }} />
                        </a>
                    )}

                    {props.instagram && (
                    <a href={props.instagram} target="_blank" rel="noreferrer">
                        <img src="/icons/instagram.png" alt="Instagram" style={{ width: '24px' }} />
                    </a>
                    )}
                    
                </div>
                <p>{props.description}</p>

            </div>
        </article>
    )
} 
export default Card