import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

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
  state = {name: '', comment: '', list: []}

  likeclicked = id => {
    this.setState(prevState => ({
      list: prevState.list.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteCom = id => {
    this.setState(prevState => ({
      list: prevState.list.filter(eachComment => {
        if (eachComment.id !== id) {
          return eachComment
        }
      }),
    }))
  }

  nameInput = event => {
    this.setState({name: event.target.value})
  }

  commentInput = event => {
    this.setState({comment: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const val = Math.floor(Math.random() * 7)
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      time: formatDistanceToNow(new Date()),
      isLiked: false,
      classVal: initialContainerBackgroundClassNames[val],
    }

    this.setState(prevState => ({
      list: [...prevState.list, newComment],
      name: '',
      comment: '',
    }))
  }
  render() {
    const {list, name, comment} = this.state
    const len = list.length
    const URL = "https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
    return (
      <div className="bg-container">
        <div className="up-container">
          <div className="form-con">
            <h1 className="heading"> Comments </h1>
            <img
              src={URL}
              alt="comments"
              className="image-1 up-img-con"
            />
            <form onSubmit={this.formSubmit}>
              <p className="para"> Say something abot 4.0 Technologies </p>
              <input
                type="text"
                placeholder="Your Name"
                className="input"
                value={name}
                onChange={this.nameInput}
              />
              <textarea
                cols="30"
                rows="10"
                placeholder="Your Comment"
                className="input"
                value={comment}
                onChange={this.commentInput}
              ></textarea>
              <button className="button"> Add Comment </button>
            </form>
          </div>
          <img
            src={URL}
            className="image-1 extra-img-con"
            alt="comments"
          />
        </div>

        <hr className="line" />

        <p className="count">
          <span className="span-el">{len}</span> Comments
        </p>

        <ul className="list-container">
          {list.map(eachItem => (
            <CommentItem
              details={eachItem}
              key={eachItem.id}
              likeclicked={this.likeclicked}
              deleteCom={this.deleteCom}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
