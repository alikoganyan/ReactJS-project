import React from 'react';

class PostList extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const { postList } = this.props;
    return(
        <div>
          <ul> { postList.map((item, index) => <li key={index}>{item}</li>) }</ul>
        </div>
    )
  }
}

export default PostList;