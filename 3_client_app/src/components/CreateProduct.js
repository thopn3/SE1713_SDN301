import { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

function CreateProduct() {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:9999/categories")
            .then(res => res.json())
            .then(result => {
                setCategories(result);
            })
    }, []);

    return (
        <Container>
            <Row style={{ marginTop: "5px", marginBottom: "10px" }}>
                <Col>
                    <h2 style={{ textAlign: "center" }}>Add new product</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <fieldset>
                            <Form.Group className="mb-3">
                                <Form.Label>Product name</Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Unit price</Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    style={{ height: '100px' }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Category</Form.Label>
                                <Form.Select>
                                    {
                                        categories.map(c=>(
                                            <option key={c._id}>{c.name}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>
                            <Button type="submit">Create</Button>
                        </fieldset>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default CreateProduct;