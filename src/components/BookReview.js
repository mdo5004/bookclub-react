import React from 'react';
import { Media, Glyphicon } from 'react-bootstrap';

export default function bookReview(props) {
    const edited_body = props.review.body.replace("<br />", "")
    const n_stars = parseInt(props.review.rating)
    let rating = [];
    for ( var i = 0; i < n_stars; i++) {
        rating.push(<Glyphicon glyph="star" />)
    }
    debugger
    return (
        <div>
            <Media>
                <Media.Body>
                    <Media.Heading><a href={props.review.book_url}>{props.review.book_title}</a></Media.Heading>
                    <p>{rating}</p>
                    <p>{props.review.name}, {props.review.location}</p>
                    <p>{edited_body}</p>
                </Media.Body>
            </Media>
        </div>
    )
}