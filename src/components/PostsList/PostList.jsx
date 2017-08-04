import React from 'react';

class PostList extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const { tracks } = this.props;
    return(
        <div>
          <ul> { tracks.map((item, index) => <li key={item.id}>{item.name}</li>) }</ul>
        </div>
    )
  }
}

export default PostList;