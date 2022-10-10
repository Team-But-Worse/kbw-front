import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'

class IdeasForRating extends React.Component {
    renderQuestions = () => {
        if (this.props.questions[0]){
        
           let arr =  this.props.questions.map((question, idx) => {
                return <Form key={idx} onSubmit={this.props.submitAnswer}>
                    <Form.Group controlId="answers">
                <Accordion.Header>{question.idea}</Accordion.Header>
                <Accordion.Body>
                    <Form.Label>Tell them what you think!</Form.Label>
                    <Form.Control></Form.Control>
                    <Button type="submit"></Button>
                </Accordion.Body>
                </Form.Group>
                </Form>
            })
            return arr;
        }
    }
    render(){

        return (<>
        
            <Accordion>
        {this.renderQuestions()}
            </Accordion>
        
        </>

    )}
}

export default IdeasForRating;