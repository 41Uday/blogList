// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {title, description, publishedDate} = eachItem
  return (
    <div className="hi">
      <div className="item-container">
        <div className="h1-item">
          <h1>{title}</h1>
        </div>

        <p>{publishedDate}</p>
      </div>
      <p className="para-1-desc">{description}</p>
    </div>
  )
}

export default BlogItem
