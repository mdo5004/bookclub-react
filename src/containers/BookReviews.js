import React from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import BookReview from '../components/BookReview'

export class BookReviews extends React.Component {
    render(){
        const reviews = this.props.reviews.map( (review,index) => {
            return <BookReview review={review} key={index}/>
        })
        return (
            <div>
               <h2>Recent Reviews</h2>
                {reviews}
            </div>
            
        )
    }
}



const mapStateToProps = (state,ownProps) => {
    return ({
        reviews: state.reviews
    })
}
BookReviews.defaultProps = {
    reviews: [],
}
export const ConnectedBookReviews = connect(mapStateToProps)(BookReviews)