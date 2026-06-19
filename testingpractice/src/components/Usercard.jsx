import { useState } from "react";
function Usercard(props) {
    return(
        <>
            <h2>{props.name}</h2>
            <p>{props.role}</p>
            <button
        onClick={() => setLikes(likes + 1)}
      >
        Like
      </button>
        </>
    );
}
export default Usercard;