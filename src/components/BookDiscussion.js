import React from 'react';
import BookDetails from './BookDetails'
import Discussion from './Discussion'
export default class BookDiscussion extends React.Component {
    
    render(){
        return <div><h1>'Book Discussion'</h1>
        <BookDetails title="The Girl with the Dragon Tattoo" author="Steig Larsson" />
        <Discussion />
        </div>
    }
}