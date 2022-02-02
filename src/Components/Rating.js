import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import React from "react";

const Rating = ({rating}) =>{
    return(
        <div className="rating">
            <span className='rating__icon'>{rating?.rate >= 1 ? <StarIcon/> : rating?.rate >= 0.5 ? <StarHalfIcon/> : <StarBorderIcon/> }</span>
            <span className='rating__icon'>{rating?.rate >= 2 ? <StarIcon/> : rating?.rate >= 1.5 ? <StarHalfIcon/> : <StarBorderIcon/> }</span>
            <span className='rating__icon'>{rating?.rate >= 3 ? <StarIcon/> : rating?.rate >= 2.5 ? <StarHalfIcon/> : <StarBorderIcon/> }</span>
            <span className='rating__icon'>{rating?.rate >= 4 ? <StarIcon/> : rating?.rate >= 3.5 ? <StarHalfIcon/> : <StarBorderIcon/> }</span>
            <span className='rating__icon'>{rating?.rate >= 5 ? <StarIcon/> : rating?.rate >= 4.5 ? <StarHalfIcon/> : <StarBorderIcon/> }</span>
        </div>
    )
}
export default Rating;