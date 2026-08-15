import { useOutletContext } from 'react-router-dom';
import './../style/Courosel.css'
import { useRef } from 'react';
import Card from './Card';
const Courosel=()=>{
    const {resturants}=useOutletContext();
    const slideContainerRef=useRef();
   const handleNextClick = () => {
    const slideWidth = slideContainerRef.current.clientWidth;
    slideContainerRef.current.scrollLeft += slideWidth;
};

const handlePrevClick = () => {
    const slideWidth = slideContainerRef.current.clientWidth;
    slideContainerRef.current.scrollLeft -= slideWidth;
};
    return(
        <div className="carousel">
            <div className="carousel__container">
                <h2 className="carousel__title">Top resturant chains in Noida</h2>
                <div className="carousel__controls">
                    <button className="carousel__arrow" onClick={handlePrevClick}>
                    <img src="/images/left.png"></img>
                    </button>
                    <button className="carousel__arrow" onClick={handleNextClick}>
                    <img src="/images/right.png"></img>
                    </button>
                </div>
                <section className='carousel__slider'>
                    <ul className='carousel__slides' ref={slideContainerRef}>
                        {resturants.map((res)=>{
                            return <li key={res._id}>
                                <Card res={res}></Card>
                                </li>
                            })}
                    </ul>
                </section>

            </div>
            
        </div>
    )
}

export default Courosel;