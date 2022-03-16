import React, {Fragment} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/app.css"
import { Col, Container, Form, FormControl, Navbar, Row } from 'react-bootstrap';
import { Sidebar } from './components/sidebar';

export default function App(){
    return (
        <Fragment>
            <header>
                <Button variant='light'>{`Access all features`}</Button>
            </header>
            <div className='body-content'>
                <Sidebar></Sidebar>
                <Row className='content-center'>
                    <Col lg={12}>
                        <Form>
                            <Row>
                                <Col lg={12}>
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    size='md'
                                    aria-label="Search"
                                />
                                </Col>
                                <Col><Button>{`Search`}</Button></Col>

                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}