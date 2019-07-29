import React, { Component } from "react";
import BooksSection from "../pages/books-section.jsx";
import axios from "axios";
import Loader from '../../loader.jsx';

class BooksSectionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            isLoading: true
        };
    }

    componentDidMount() {
        // console.log(this.props.category);
        axios
            .get(
                "https://www.googleapis.com/books/v1/volumes?q=" +
                    this.props.category
            )
            .then(response => {
                // console.log(response);
                this.setState({
                    books: response.data.items,
                    isLoading: false
                });
                // console.log(this.state.books);
                // console.log(this.state.isLoading);
            });
        // console.log(this.props);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.category !== this.props.category) {
            this.setState({
                isLoading: true
            })
            axios
                .get(
                    "https://www.googleapis.com/books/v1/volumes?q=" +
                        this.props.category
                )
                .then(response => {
                    this.setState({
                        books: response.data.items,
                        isLoading: false
                    });
                });
        }
    }
    render() {
        if (this.state.isLoading) {
            return (<Loader/>)
        } else {
            // const books = [1, 2, 3, 4];
            return (
                <div>
                    <BooksSection
                        category={this.props.category}
                        title={this.props.category}
                        books={this.state.books}
                    />
                </div>
            );
        }
    }
}
BooksSectionPage.defaultProps = {
    category: "HTML"
};
export default BooksSectionPage;
