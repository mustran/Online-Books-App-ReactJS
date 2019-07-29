import React from "react";
import { Link } from "react-router-dom";


const Book = props => {
    // console.log(props); 
    const bookInfo = {
        image: props.book.volumeInfo.imageLinks
            ? props.book.volumeInfo.imageLinks.thumbnail
            : "https://via.placeholder.com/150",
        title: props.book.volumeInfo.title,
        author: props.book.volumeInfo.authors
            ? props.book.volumeInfo.authors[0]
            : "Unknown",
        id: props.book.id,
        categoryBook: props.category
    };


    return (
        <div className="book">
            <div className="book-img">
                <img src={bookInfo.image} alt="" />
            </div>
            <div className="book-info">
                <div className="book-title">
                    <h3>{bookInfo.title}</h3>
                </div>
                <div className="book-author">
                    <p>
                        By <em>{bookInfo.author}</em>
                    </p>
                </div>
                <div className="book-call-to-action">
                    <Link
                        className="btn btn-highlight"
                        to={"/book/" + bookInfo.categoryBook + "/" + bookInfo.id}
                    >
                        Detail
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Book;
