import React from "react";
import BookStars from "./book-stars.jsx";


const BookDetails2 = props => {
    let ratingArray = new Array(props.bookRating);
    ratingArray = [...ratingArray];
    // console.log(ratingArray);
    console.log(props);
    return (
        <div className="books-details">
            <div className="book-img">
                <img src={props.bookPic} alt="" />
            </div>
            <div className="book-rating">
                <div className="book-stars">
                    {ratingArray.map((e, i) => {
                        // console.log(i);
                        return <BookStars key={i} />;
                    })}
                </div>
                <div className="book-reviews">
                    <p>(11)</p>
                </div>
            </div>
            
        </div>
    );
};

export default BookDetails2;
