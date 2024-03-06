import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9999/products")
            .then(res => res.json())
            .then(result => {
                setProducts(result);
            })
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <h2 style={{ textAlign: "center" }}>List of Products</h2>
                </Col>
            </Row>

            <Row style={{marginTop:"10px", marginBottom:"10px"}}>
                <Col>
                    <Link to={'/products/create'} className="btn btn-primary">Add new product</Link>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Table bordered hover striped>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Function</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(p => (
                                    <tr key={p._id}>
                                        <td>
                                            <Link to={'/products/detail/'+p._id}>
                                                {p._id};
                                            </Link>
                                        </td>
                                        <td>{p.name}</td>
                                        <td>{p.price}</td>
                                        <td>{p.description}</td>
                                        <td>{p.category.name}</td>
                                        <td>
                                            <Link to={'/products/delete/'+p._id}>Delete</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default Product;