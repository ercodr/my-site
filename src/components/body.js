import React from 'react'

function Body(props) {
	return (
		<div className="body">
			{/* <h1>My React Journey Starting Soon. Yay!</h1> */}
			<h1>{props.content}</h1>
		</div>
	)
}

export default Body
