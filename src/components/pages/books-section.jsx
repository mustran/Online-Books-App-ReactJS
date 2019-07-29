import React from "react";
import BooksContainer from "../books-section/books-container";

const BookSection = props => {
    if (props.books.length === 0) {
        return (
            <section id="books-section">
                <div className="section-title">
                    <h1>No books found for {props.title}</h1>
                </div>
            </section>
        );
    } else {
        return (
            <section id="books-section">
                <div className="section-title">
                    <h1>{props.title} books</h1>
                </div>
                <BooksContainer category={props.category}  books={props.books} />
            </section>
        );
    }
};

export default BookSection;
