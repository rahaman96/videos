import React from 'react'
import ReactDom from 'react-dom'
class SearchBar extends React.Component{
    state={term:''}
    onInputChange = (event ) =>{
        this.setState({term:event.target.value})

    };

    onFormSubmit = event =>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);

    };
    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui-form">
                <div className="field">
                    <label className="ui-nav">
                        Video Bucket
                    </label>
                    <input  style = {{padding:"5px",paddingRight:"300px",fontWeight:"10px"}} type="text" 
                   placeholder= "Search"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />
                     <label className="ui-right">
                        Watched More videos
                    </label>

                </div>
                </form>    
            </div>
        );
    }
}
export default SearchBar