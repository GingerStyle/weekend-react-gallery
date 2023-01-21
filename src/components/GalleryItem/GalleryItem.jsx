
function GalleryItem({itemProp}){
    return(
        <>
            <li key={itemProp.id}>
            <img src={itemProp.path}/>
            </li>
        </>
    );

}

export default GalleryItem;