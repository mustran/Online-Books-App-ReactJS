import React from "react";
import {Link} from 'react-router-dom';

const BookInfo = props => {
    return (
        <div className="book-info">
            <div className="book-title">
                <h1>{props.bookTitle}</h1>
            </div>
            <div className="book-author">
                <h3>{props.author}</h3>
            </div>
            <div className="book-description">
                {props.bookDescription}
            </div>
            <div style={{fontSize: "1.5rem"}}>
            <Link to={"/books/"+ props.categoryBook}>Back</Link>
            </div>
        </div>
    );
};

export default BookInfo;
