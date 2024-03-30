// import React from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//     return (
//         <div className='content-container'>
//             <img src="/images/Kylie2.JPG" alt="Shelby home" className='HomePageImage' />
//             <div className='text-overlay'>
//                 <h1>Hi, I'm Shelby</h1>
//                 <h2>Your wedding and event Florist</h2>
//                 <h3>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</h3>
//                 <div className='button-container'>
//                     <Link to="/about" className="button-link">About Me</Link>
//                 </div>
//             </div>
//             {/* Split Section Below Image */}
//             <div className='split-section'>
//                 <div className='left-side'>
//                     <img src="/images/shelStandFlowers.JPG" alt="A description" />
//                 </div>
//                 <div className='right-side'>
//                     <h1>Hi, I'm Shelby</h1>
//                     <h2>I am a florsit based out of Salt Lake City</h2>
//                     <h3>I'm so excited to make your flower dreams come true</h3>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Home() {
    return (
        <div className='content-container'>
            <img src="/images/shelPuttingInFlower.JPG" alt="Shelby home" className='HomePageImage' />
            <div className='text-overlay'>
                <h1>Hi, I'm Shelby</h1>
                <h2>Your wedding and event Florist</h2>
                <h3>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</h3>
                <Link to="/about" className="button-link">About Me</Link> {/* Button link to About page */}
            </div>
        </div>
    );
}

export default Home;

