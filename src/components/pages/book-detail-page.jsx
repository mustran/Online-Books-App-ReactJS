import React, { Component } from "react";
import BookDetail from "../book-detail/book-detail.jsx";
import axios from "axios";
import Loader from "../../loader.jsx";

class BookDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {},
            isLoading: true
        };
        // console.log(props);
    }

    componentDidMount() {
        axios
            .get(
                "https://www.googleapis.com/books/v1/volumes/" +
                    this.props.bookID
            )
            .then(response => {
                // console.log(response);
                this.setState({
                    book: response.data,
                    isLoading: false
                });
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>
                    <Loader />
                </div>
            );
        } else {
            return (
                <div>
                    <BookDetail categoryBook={this.props.categoryBook} bookInformation={this.state.book} bookID={this.props.bookID}/>
                </div>
            );
        }
    }
}

export default BookDetailPage;
