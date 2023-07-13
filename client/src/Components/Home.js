import React, {useEffect} from 'react'
import "../index.css"

import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'

function Home() {

    useEffect(() => {
        initLightboxJS("1E49-B537-98BA-8BF0", "individual");
      });

    return(
        <div className="flex h-screen bg-blue-100">
            
            <div className="flex mx-auto mt-10">
                <SlideshowLightbox className='container' theme="lightbox" modalClose="clickOutside">
                    <img className='rounded mx-auto w-5/6' src='https://live.staticflickr.com/65535/53039607720_606a4cb2b5_o.jpg' />
                </SlideshowLightbox>
            </div>
        </div>

    )
}

export default Home