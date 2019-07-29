import React from 'react';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import BooksSectionPage from './components/books-section/books-section-page.jsx';
import BookDetailPage from './components/pages/book-detail-page.jsx';
import PageNotFound from './components/pages/page-not-found.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="fixed-footer">
      <Header />

        <Switch>
          <Route path="/" exact component={BooksSectionPage} />
          <Route path="/book/:categoryBook?/:bookID?" render={(props)=>{
            // console.log(props.match.params.bookID);
            const {bookID} = props.match.params;
            const {categoryBook} = props.match.params;
            // console.log("Category "+categoryBook);
            // console.log(props);
            return <BookDetailPage bookID={bookID} categoryBook={categoryBook}/>
          }} />
          <Route path="/books/:categoryName" exact render={(props) => {
            // console.log(props.match.params.categoryName);
            const {categoryName} = props.match.params;
            console.log(props);
            return <BooksSectionPage category={categoryName} />
          }} />
          <Route component={PageNotFound} />
        </Switch>

      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
