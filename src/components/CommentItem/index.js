import './index.css'

const CommentItem = props => {
  const {details, likeclicked, deleteCom} = props
  const {id, name, comment, time, classVal, isLiked} = details

  const liked = () => {
    likeclicked(id)
  }

  const deleteComment = () => {
    deleteCom(id)
  }

  const likeImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li>
      <div className="content-container">
        <div className={`img ${classVal}`}>{name.slice(0, 1)}</div>
        <div className="details-container">
          <h1 className="name">
            {name} <span className="tym"> {time} </span>
          </h1>
          <p className="comm"> {comment} </p>
        </div>
      </div>
      <div className="extra-con">
        <button className="img-btn" onClick={liked}>
          <img src={likeImg} alt="like" />
          <span className="like"> Like </span>
        </button>
        <button
          className="img-btn"
          onClick={deleteComment}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
