import GalleryItem from '../GalleryItem/GalleryItem';
import Axios from 'axios'

function GalleryList({galleryProp, getItemsProp}) {
    console.log('galleryProp contains:', galleryProp);

    //function to update likes when the like button is pressed
    const updateLikes = (id) => {
        Axios({
            method: 'PUT',
            url: `/gallery/like/${id}`,
        }).then((response) => {
            console.log('response from PUT request', response);
            getItemsProp();
        }).catch((error) => {
            console.log('error with PUT request', error);
        });
    }

    return(
        <>
            <div> 
                {galleryProp.map(animal => (
                    <GalleryItem key={animal.id} itemProp={animal} functionProp={updateLikes}/>
                ))}
                
            </div>
        </>
    );
}

export default GalleryList;