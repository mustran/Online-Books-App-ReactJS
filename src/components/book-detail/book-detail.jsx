import React, { Component } from "react";
import BookContainer from "./book-container";

class BookDetail extends Component {
    componentDidMount() {
        let element = document.querySelector("#nav" + this.props.categoryBook);
        element.classList.add("active");
    }

    
    render() {
        return (
            <section id="book-detail">
                <div className="container">
                    <BookContainer
                        bookID={this.props.bookID}
                        categoryBook={this.props.categoryBook}
                        categoryName={this.props.categoryName}
                        bookInformation={this.props.bookInformation}
                    />
                </div>
            </section>
        );
    }
    // console.log(props.bookInformation );
}

export default BookDetail;
