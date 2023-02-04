
import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';

export default function Home() {

    const [currentImgId, setCurrentImgId] = useState();
    const [currentImgIndex, setCurrentImgIndex] = useState();

    // OLD: leave for fallback testing
    // const [imageIds, setImageIds] = useState();
    // Setting state for all image ids

    // OLD: leave for fallback testing
    // Get's all imageIds from backend/cloudinary call
    // and setting that state:
    // const loadImages = async () => {
    //     try {
    //         const res = await fetch('api/v1');
    //         const data = await res.json();
    //         console.log(data)
    //         setImageIds(data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };


    const getNewImageId = async () => {

        let randomNumber = Math.floor(Math.random() * 64)
        try {
            const res = await fetch('api/v1');
            const data = await res.json();

            // Logging to console:
            let testRandomNumber = randomNumber
            let testAllData = data[randomNumber]
            console.log(data)
            console.log(testAllData, testRandomNumber)
            
            // Setting state:
            setCurrentImgId(data[randomNumber]);
            setCurrentImgIndex(randomNumber)

            // Last log:
            console.log('ran')
            
        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        getNewImageId()
    }, [])

    
    function handleClick() {
        getNewImageId()
    }


    return (
        <div className='home-main'>
            <div className='gallery'>
                     {/*  Image - defines a Cloudinary Image tag  */}
                    <Image
                    className="single-image"
                    key={currentImgIndex}
                    cloudName={'dxov7pk4a'}
                    publicId={currentImgId}
                    width="350"
                    crop="scale"
                    onClick={() => handleClick()}
                />
            </div>
        </div>
    );
};