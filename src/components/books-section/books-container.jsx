import React from "react";
import Book from "../books-section/book";

const BooksContainer = props => {
    return (
        <div className="books-container">
            {props.books.map((e,i)=>{
                // console.log(e);
                return (<Book category={props.category} book={e} key={i}/>)
            })}
        </div>
    );
};

export default BooksContainer;
