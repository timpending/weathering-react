const React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-centered">Examples</h1>
      <p>Few examples:</p>
      <ol>
        <li>
          <Link to='/?location=Baltimore'>Baltimore, MD</Link>
        </li>
        <li>
          <Link to='/?location=Denver'>Denver, CO</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples;
