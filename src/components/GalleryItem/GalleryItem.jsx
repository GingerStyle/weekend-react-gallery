import Axios from "axios";

function GalleryItem({itemProp, functionProp}){

    return(
        <>
            <li>
                <img src={itemProp.path}/>
                <button onClick={() => functionProp(itemProp.id)}>Like</button>
                <p>This pictures has {itemProp.likes} likes.</p>
            </li>
        </>
    );

}

export default GalleryItem;