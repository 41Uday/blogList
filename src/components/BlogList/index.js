// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props
  console.log(blogsList)
  return (
    <div>
      <ul className="list-container">
        {blogsList.map(e => (
          <BlogItem key={e.id} eachItem={e} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
