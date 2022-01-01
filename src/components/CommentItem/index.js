// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {background, commentDetail, onClickDeleteIcon, toggleIsLike} = props
  const {user, comment, id, randomNumber, isLike} = commentDetail
  const time = formatDistanceToNow(new Date())
  console.log(background)

  const onDelete = () => {
    onClickDeleteIcon(id)
  }
  const clickLikeButton = () => {
    toggleIsLike(id)
  }

  const likeImageUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const alternateText = isLike ? 'Liked' : 'Like'
  const styleBasedOnLike = isLike ? 'blue-text' : 'button-style'
  return (
    <li className="list-style">
      <div className="container-comment">
        <p className={background[randomNumber]}>{user[0]}</p>
        <div>
          <h1 className="user-name">
            {user} <span className="span-style">{time}</span>
          </h1>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="img-container">
        <div className="img-container-2">
          <img
            className="image"
            src={likeImageUrl}
            alt={alternateText}
            onClick={clickLikeButton}
          />
          <button
            type="button"
            className={styleBasedOnLike}
            onClick={clickLikeButton}
          >
            Like
          </button>
        </div>
        <button
          className="button-style"
          type="button"
          testid="delete"
          onClick={onDelete}
        >
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
