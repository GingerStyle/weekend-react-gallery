import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryProp}) {
    console.log('galleryProp contains:', galleryProp);
    return(
        <>
            <ul> 
                {galleryProp.map(animal => (
                    <GalleryItem itemProp={animal}/>
                ))}
            </ul>
        </>
    );
}

export default GalleryList;