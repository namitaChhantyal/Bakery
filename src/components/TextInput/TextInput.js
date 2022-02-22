import React from 'react'
import Form from 'react-bootstrap/Form';
import {useField} from 'formik'

export default function TextInput(props) {
    const [field, meta] = useField(props.name);

    return (
        <Form.Group controlId={props.id}>
            {props.label && <Form.Label>{props.label}</Form.Label>}
            {meta.error && meta.touched && <p>{meta.error}</p>}
            <Form.Control
                {...field}
                {...props}
            />
        </Form.Group>
    )
}