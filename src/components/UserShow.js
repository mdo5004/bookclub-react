import React from 'react';

export default function UserShow(props) {
    return(
        <div>
            <h1>{props.user.username}</h1>
        <p>Goodreads friends: </p>
        <p>Ratings: </p>
        <p>Reviews: </p>
        </div>
    )
}