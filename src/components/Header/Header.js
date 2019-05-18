import React, { Component } from 'react';

class Header extends Component {

    //stateの初期化
    state = {keyword: ''};

    onInputChangeHandler = (event) => {
        this.setState({keyword: event.target.value});
        this.props.onKeywordChanged(event.target.value);
    }

    render() {
        const fontStyle = {
            fontFamily: 'M PLUS Rounded 1c',
        }
        return(
            <nav className="navbar navbar-expand
                            navbar-light bg-light
                            mb-3 p-3">
                <h2 className="mb-0" >
                <span className="bg-dark text-white p-2 mr-2">P</span>
                <span className="d-none d-md-inline" style={fontStyle}>Programming on YouTube</span>
                </h2>
                <form className="form-group my-2 my-lg-0 ml-sm-2 ">
                <input
                    onChange={this.onInputChangeHandler} value={this.state.keyword}
                    className="form-control form-control-lg mr-sm-2" type="text" placeholder="検索..." aria-label="検索..." />
                </form>
            </nav>
        );
    }
}

export default Header;