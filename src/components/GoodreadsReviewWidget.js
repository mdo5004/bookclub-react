import React from 'react';

export default function goodreadsReviewWidget(props){

    return (
        <div id="goodreads-widget"> 
            <div id="gr_header">
                <h1>
                   <a href={props.url}>
                    Harry Potter and the Sorcerer's Stone Reviews
                    </a></h1>
            </div> 
            <iframe id="the_iframe" src={"https://www.goodreads.com/api/reviews_widget_iframe?did=DEVELOPER_ID&format=html&isbn=0439554934&links=660&review_back=fff&stars=000&text=000"} width="565" height="400" frameborder="0"></iframe> 
            <div id="gr_footer"> <a class="gr_branding" target="_blank" href={props.url+"?utm_medium=api&utm_source=reviews_widget"}>Reviews from Goodreads.com</a> </div> 
        </div>
    )
}