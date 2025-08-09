import './directory-item.styles.scss'

const DirectoryItem = ({ category }) => {


    return (
        <div className="directory-container">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${category.imageUrl})`,
                }}
            ></div>
            <div className="directory-body-container">
                <h2>{category.title.toUpperCase()}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )

}


export default DirectoryItem;