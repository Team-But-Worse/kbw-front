import React from "react";

class IdeasForRating extends React.Component {
    renderQuestions = () => {
        if (this.props.questions[0]){
        
           let arr =  this.props.questions.map((question, idx) => {
                return <p key={idx}>{question.question}</p>
            })
            return arr;
        }
    }
    render(){

        return (<>
        {this.renderQuestions()}
        </>
    )}
}

export default IdeasForRating;