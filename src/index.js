import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import MyNav from './components/myNav';

const API_KEY = '';//enter your youtube v3 API key here


class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo : null
        };
        this.videoSearch('Star Wars Undercover Boss: Starkiller Base - SNL')

    }

    //method to perform search
    videoSearch(inputWord){
        YTSearch({key: API_KEY,term: inputWord}, (data)=>{
            this.setState({
                videos: data,
                selectedVideo: data[2]
            })
            //or name data videos and this.setState({videos})
        });
    }

    render(){
        //debounced version for delayed search(throttle) for 300milliseconds
        const videoSearch = _.debounce((arg)=> this.videoSearch(arg), 300)
        return (
            <div>
                <MyNav />
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video = {this.state.selectedVideo}/>
                <VideoList onVideoSelect = {(currVideo)=> this.setState({selectedVideo:currVideo})} videos = {this.state.videos} />
            </div>
        );
    }
}

//put component on the page(attach in DOM)
ReactDOM.render(<App />, document.querySelector('.container-fluid')); // not App but and instance <App />















