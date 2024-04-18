// import React from 'react';
// import { Link } from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group';

// function Home() {
//     return (
//         <CSSTransition in={true} appear={true} timeout={300} classNames="page-transition">
//             <div className='content-container' style={{
//                 backgroundImage: "url('/images/portfolio/rosesCloseUp.JPG')",
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundAttachment: 'fixed'  // Optional based on desired effect
//             }}>
//                 <div className='text-overlay'>
//                     <h1>SHELBY FLORAL</h1>
//                     <h2>Creating beautiful, bright, romantic florals that make your moments unforgettable.</h2>
//                     <Link to="/about" className="button-link">About Me</Link>
//                 </div>
//             </div>
//         </CSSTransition>
//     );
// }


// export default Home;




// import React from 'react';
// import { Link } from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group';

// function Home() {
//     return (
//         <CSSTransition in={true} appear={true} timeout={300} classNames="page-transition">
//             <>
//                 <div className='content-container'>
//                     <img src="/images/portfolio/rosesCloseUp.JPG" alt="Shelby home" className='HomePageImage' />
//                     <div className='text-overlay'>
//                         <h1 >SHELBY FLORAL</h1>
//                         <h2>Creating beautiful, bright, romantic florals that make your moments unforgettable.</h2>
//                         <Link to="/about" className="button-link">About Me</Link>
//                     </div>
//                 </div>
//             </>
//         </CSSTransition>
//     );
// }

// export default Home;

// import React from 'react';
// import { CSSTransition } from 'react-transition-group';

// function Home() {
//     return (
//         <CSSTransition in={true} appear={true} timeout={300} classNames="page-transition">
//             <div className='content-container'>
//                 <img src="/images/portfolio/rosesCloseUp.JPG" alt="Shelby home" className='HomePageImage' />
//                 <img src="/images/portfolio/shelby-floral-logo-white.png" alt="Decorative overlay" className='OverlayImage' />
//             </div>
//         </CSSTransition>
//     );
// }

// export default Home;





import React from 'react';

function Home() {
    return (
        <div className="content-container">
            <img src="/images/portfolio/rosesCloseUp.JPG" alt="Roses close-up" className="HomePageImage" />
            <div className="OverlayImage">
                <img src="/images/portfolio/shelby-floral-logo-white.png" alt="Decorative overlay" />
            </div>
        </div>
    );
}

export default Home;
