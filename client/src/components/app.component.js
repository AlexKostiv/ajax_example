/**
 * Created by IlyaLitvinov on 07.04.17.
 */
import React, { Component } from 'react';
import Header from '../containers/header.container';
import List from '../containers/list.container';
import Footer from '../containers/footer.container';

class App extends Component {
    render() {
        return <div className="app_container">
            <Header />
            <List />
            <Footer />
        </div>;
    }
}


export default App;