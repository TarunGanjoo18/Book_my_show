import React , {useContext , useState} from 'react'

// components
import PaymentModal from '../PaymentModal/Payment.component';

// context
import { MovieContext } from '../../context/movie.context';

const MovieInfo = () => {

    const [isOpen , setIsOpen] =useState(false);
    const [price , setPrice] =useState(0);

const {movie} = useContext(MovieContext);
// const genres= movie.genres && movie.genres.map(({name})=>  name).join(", ");
// it is more of like if else 
// here it is checking that if the movie.genre contains something...if yes then only it will move to the next statement after the && operator
// but we can short this code even more by just using ? operator 
const genres= movie.genres?.map(({name})=>  name).join(", ");
// this technique is known as optional chaining

const rentMovies = () =>{
    setIsOpen(true);
    setPrice(149)
}
const buyMovies = () =>{
    setIsOpen(true);
    setPrice(250)
}


    return (
        <>
        <PaymentModal  setIsOpen={setIsOpen}  isOpen={isOpen} price={price} / >  
            <div className="flex flex-col gap-3 lg:gap-8">
                <div className="flex gap-3 items-center">
                    <div className="w-40 h-8">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="" className="w-full h-full" />
                    </div>
                <span style={{backgroundColor:"#1F253A"}} className="p-1 text-white text-xs rounded-md">Streaming Now</span>
                </div>
            <h1 className="hidden lg:block text-white font-normal lg:text-3xl">{movie.original_title }</h1>                
           <div className="flex flex-col-reverse lg:flex-col gap-3 lg:gap-5 md:px-1">
           <div className="text-white font-light flex flex-col gap-2">
                <h4>4K  &bull;  {movie.original_language} </h4>
                 <h4>  {(movie.runtime/60).toFixed(2)} hr  &bull; {genres} &bull;  16+</h4>
            </div>
            <div className="flex items-center gap-3 md:px-1 md:w-screen  lg:w-full px-0 ">
                <button onClick={rentMovies} style={{backgroundColor:"#F84464"}} className="font-semibold w-full py-3 text-white rounded-lg">
                    Rent  ₹149
                </button>
                <button onClick={buyMovies} style={{backgroundColor:"#F84464"}} className="font-semibold w-full py-3 text-white rounded-lg">
                    Buy  ₹250
                </button>
            </div>
           </div>
            </div>
        </>
    )
}

export default MovieInfo;
