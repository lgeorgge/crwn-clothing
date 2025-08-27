import { useNavigate } from 'react-router-dom';
import './directory-item.styles.scss'

const DirectoryItem = ({ category }) => {
    const nav = useNavigate();


    return (
        <div className="directory-container">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${category.imageUrl})`,
                }}
            ></div>
            <div onClick={() => nav(`/shop/${category.title}`)} className="directory-body-container">
                <h2>{category.title.toUpperCase()}</h2>
                <p >Shop Now</p>
            </div>
        </div>
    )

}


export default DirectoryItem;