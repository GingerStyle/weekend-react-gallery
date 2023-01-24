import {useState} from 'react';

function GalleryItem({itemProp, functionProp}){
    
    //variable to hold value to determines whether to display photo od description
    const [photoToggle, setPhotoToggle] = useState(true);

    //function to switch the photo to the description when the photo is clicked
    const switchPhoto = () => {
        if(photoToggle){
            //setPhotoToggle(!photoToggle);
            return <img src={itemProp.path} onClick={() => switchPhoto()}/>;
        }else{
            //setPhotoToggle(!photoToggle);
            return <p  onClick={() => switchPhoto()}>{itemProp.description}</p>;
        };
    }

    return(
        <>
            <div className='items'>
                {/* <img src={itemProp.path}/> */}
                <div>{switchPhoto()}</div>
                <br></br>
                <button onClick={() => functionProp(itemProp.id)}>Like</button>
                <p>This pictures has {itemProp.likes} likes.</p>
                <br></br>
            </div>
        </>
    );

}

export default GalleryItem;