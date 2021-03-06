import React from 'react';
import {Link} from 'react-router-dom';

class FeaturedMovie extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      movie_id: 26
    };
    this.addItem = this.addItem.bind(this);
    this.playVid = this.playVid.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    
    this.props.createListItem(this.state.movie_id);
  }

  playVid() {
    var myVideo = document.getElementById("showVid");
    setTimeout(() => {
      myVideo.play();
    }, 1000);
  }

  render() {
    return (
      <>
        <div className="featured_vid">
          {this.playVid}
          <video
            src="https://s3-us-west-1.amazonaws.com/worldflix-dev/Vids/Piazza+dei+Miracoli_+Pisa_+Italy.mp4"
            id="showVid"
            className="vid"
            autoPlay
            loop
            muted
          />
        </div>

        <div className="vid-header">
          <div className="worldflix-original">
            {" "}
            <strong>WORLDFLIX</strong> ORIGINAL
          </div>
          <Link to="/browse/26">
            <span className="play-button">
              <div className="play-text">▶ &nbsp;Play</div>
            </span>
          </Link>

          <span className="list-button" id="my-list" onClick={this.addItem}>
            <div className="list-text">+ &nbsp;My List</div>
          </span>

          <div className="title">The Piazza dei Miracoli </div>
          <div className="description-box">
            <div className="text">
              The Piazza dei Miracoli, an important centre of European
              medieval art and one of the finest architectural complexes in
              the world.
            </div>
          </div>
        </div>
      </>
    );
  }
  
};

export default FeaturedMovie;