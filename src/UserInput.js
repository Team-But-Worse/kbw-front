import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



class UserInput extends React.Component {

    submitData = (event) => {
        event.preventDefault();
        console.log('rats')
    }
    render() {
        return (<>
        <Form onSubmit={this.submitData}>
            <Form.Control></Form.Control>
            <Button type='submit'>Submit</Button>
        </Form>
        </>)
    }
}

export default UserInput;