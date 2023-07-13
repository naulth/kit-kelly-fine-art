import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import '../index.css'
import grid from '../img/grid.jpg'


function Paintings() {

    // const images = [
    //     {
    //       src: 'https://live.staticflickr.com/65535/53039607720_606a4cb2b5_o.jpg',
    //       alt: 'A Singularity Farm',
    //       caption: 'A Singularity Farm',
          
    //     },
    //     {
    //         src: 'https://live.staticflickr.com/65535/53039218186_5f55b95013_o.jpg',
    //         alt: "Don't Over Think It, Think It Over",
    //         caption: "Don't Over Think It, Think It Over",
            
    //       },
    //       {
    //         src: 'https://live.staticflickr.com/65535/53039218141_dec630e594_o.jpg',
    //         alt: 'Paradox',
    //         caption: 'Paradox',
            
    //       },
    //       {
    //         src: 'https://live.staticflickr.com/65535/53039405509_29cdcb4ee1_o.jpg',
    //         alt: 'Mandala',
    //         caption: 'Mandala',
            
    //       },
    //       {
    //         src: 'https://live.staticflickr.com/65535/53039218136_2f5ea07f04_o.jpg',
    //         alt: 'Obliterating Obscurity',
    //         caption: 'Obliterating Obscurity',
    //       },
        
    //   ]

    return(
        <div className="bg-blue-100">
            <div className="w-4/5 mx-auto bg-blue-100">
                <h1 id="title" className="font-black text-xl pt-10 text-center">Original Acryllic Paintings</h1>
            </div>
            <div className="flex h-screen bg-blue-100">
                <div className="flex w-4/5 m-auto ">
                    <SlideshowLightbox className='container grid grid-cols-3  gap-x-4 gap-y-8' theme="lightbox" showThumbnails={true} modalClose="clickOutside">
                        <img className='w-full rounded' src='https://live.staticflickr.com/65535/53039607720_606a4cb2b5_o.jpg' alt="A Singularity Farm" />
                        <img className='w-full rounded' src='https://live.staticflickr.com/65535/53039218186_5f55b95013_o.jpg' />
                        <img className='w-full rounded' src='https://live.staticflickr.com/65535/53039218141_dec630e594_o.jpg' />  
                        <img className='w-full rounded' src='https://live.staticflickr.com/65535/53039405509_29cdcb4ee1_o.jpg' />
                        <img className='w-3/4 mx-auto rounded' src='https://live.staticflickr.com/65535/53039218136_2f5ea07f04_o.jpg' />
                        <img className='w-full rounded' src={grid} />
                    </SlideshowLightbox> 
                </div>
            </div>
        </div>
    )
}

export default Paintings