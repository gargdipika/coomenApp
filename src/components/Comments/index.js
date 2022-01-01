import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentList: [], user: '', comment: ''}

  onChangeUserName = event => {
    this.setState({user: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  addCommentInList = event => {
    event.preventDefault()
    const {user, comment} = this.state
    if (user !== '') {
      const newComment = {
        id: uuidv4(),
        user,
        comment,
        randomNumber: Math.ceil(Math.random() * 7),
        isLike: false,
      }
      this.setState(prevState => ({
        commentList: [...prevState.commentList, newComment],
        user: '',
        comment: '',
      }))
    }
  }

  deletingComment = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
  }

  toggleIsLike = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {user, comment, commentList} = this.state
    const commentCount = commentList.length

    return (
      <div className="background-container">
        <div className="main-container">
          <h1>Comments</h1>
          <div className="comment-container">
            <form className="comment-section" onSubmit={this.addCommentInList}>
              <p>Say something about 4.O Technologies</p>
              <input
                onChange={this.onChangeUserName}
                className="input-element"
                type="text"
                placeholder="Your Name"
                value={user}
              />
              <textarea
                onChange={this.onChangeComment}
                className="textarea-element"
                row="40"
                cols="50"
                placeholder="Your Comment"
                value={comment}
              />
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <hr className="horizontal-line" />
          <div className="container">
            <p className="comment-count">{commentCount}</p>
            <p>Comments</p>
          </div>
          <ul>
            {commentList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetail={eachComment}
                background={initialContainerBackgroundClassNames}
                onClickDeleteIcon={this.deletingComment}
                toggleIsLike={this.toggleIsLike}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
