import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import React from "react";
import Lawyer from "../components/Lawyer";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:5000/api/lawyers");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Lawyers List </h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Lawyer product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
