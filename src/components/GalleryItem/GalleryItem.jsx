import Axios from "axios";

function GalleryItem({itemProp, functionProp}){

    return(
        <>
            <div className='items'>
                <img src={itemProp.path}/>
                <br></br>
                <button onClick={() => functionProp(itemProp.id)}>Like</button>
                <p>This pictures has {itemProp.likes} likes.</p>
                <br></br>
            </div>
        </>
    );

}

export default GalleryItem;