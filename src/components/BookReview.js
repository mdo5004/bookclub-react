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
                <Media.Left>
                    <img width={64} height={64} src={props.review.small_image_url} alt="Image"/>
                </Media.Left>
                <Media.Body>
                    <Media.Heading>{props.review.name} - {props.review.location}</Media.Heading>
                    <p>{edited_body}</p><p>{rating}</p>
                </Media.Body>
            </Media>
        </div>
    )
}