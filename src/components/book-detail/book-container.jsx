import React from "react";
import BookDetails2 from "./book-details2";
import BookInfo from "./book-info";

const BookContainer = (props) => {
    const bookPicture = props.bookInformation.volumeInfo.imageLinks.thumbnail;
    const bookDescription = props.bookInformation.volumeInfo.description;
    const bookRating = props.bookInformation.volumeInfo.ratingsCount ?  props.bookInformation.volumeInfo.ratingsCount : 5;
    const title = props.bookInformation.volumeInfo.title;
    const author = props.bookInformation.volumeInfo.authors ? props.bookInformation.volumeInfo.authors[0] : "Unknown";
    
    return (
        <div className="book-container">
            <BookDetails2 bookPic={bookPicture} bookRating={bookRating}/>
            <BookInfo bookID={props.bookID} categoryBook={props.categoryBook} categoryName={props.categoryName} bookDescription={bookDescription} bookTitle={title} author={author}/>
        </div>
    );
};

export default BookContainer;
