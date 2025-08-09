import DirectoryItem from '../directory-item/directory-item.component';
import './categories.styles.scss'


const Categories = (props) => {


    return (
        <div className="categories-container">
            {props.categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </div>
    );
}

export default Categories