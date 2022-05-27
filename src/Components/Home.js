import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
        <header>
    <nav>
      <a className="active">Home</a>
      <Link to="/attenders"><a>Attenders</a></Link>
      <a>Not Attending</a>
    </nav>
  </header>
  
  <div>
  <h1>We request the honor of your presence at</h1>
  <img src="https://images-na.ssl-images-amazon.com/images/I/517cQMNmyeL.jpg" />
  <h1> Mr and Mrs Mpofu's baby shower </h1>
  <Link to="/form"><button className='button'>Form</button></Link>
</div>
  
  </div>
  )
}

export default Home