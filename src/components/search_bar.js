import React,{Component} from 'react';
import YoutubeAutocomplete from 'react-youtube-autocomplete';



class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term:""}
    }

    render(){
     return (
         <div className="search-bar" >
             <input onChange={event => this.onInputChange(event.target.value)} placeholder="Search youtube..." />
         </div>
     );
    }
    //change state term property to the value of input and call onSearchTermChange in props with argument of value
    onInputChange(value){
        this.setState({term: value});
        this.props.onSearchTermChange(value);
    }
}


export default SearchBar;