import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Label,
  Input,
  FormGroup,
  Form,
  FormText,
} from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import "../styles/all-foods.css";
import "../styles/pagination.css";
import { useEffect } from "react";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

  let AllProd = products;

  let searchedProduct = AllProd.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }

    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });

  const deleteProd = (id) => {
    console.log("here your delete id", id === products[0].id);
    // products.filter((el) => el.id !== id);
    AllProd = AllProd.filter(function (item) {
      return item.id !== id;
    });

    searchedProduct = AllProd.filter(function (item) {
      return item.id !== id;
    });

    displayPage = searchedProduct.slice(
      visitedPage,
      visitedPage + productPerPage
    );

    console.log("updated id", AllProd, searchedProduct);
  };

  const [newItem, setNewItem] = useState({
    title: "",
    price: 0,
    image01: "",
    image02: "",
    image03: "",
    category: "",
    desc: "",
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  let displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const [modal, setModal] = React.useState(false);

  const onSubmit = () => {
    console.log("here product", newItem);
    if (newItem.desc && newItem.price > 0 && newItem.title && newItem.image01) {
      console.log(
        "pushing value",
        AllProd.push({
          id: Math.floor(Math.random() * 10),
          title: newItem.title,
          price: newItem.price,
          image01: newItem.image01,
          image02: newItem.image01,
          image03: newItem.image01,
          category: "Pizza",
          desc: newItem.desc,
        })
      );
    }
    toggle();
    setNewItem({
      title: "",
      price: 0,
      image01: "",
      image02: "",
      image03: "",
      category: "",
      desc: "",
    });
  };
  // Toggle for Modal
  const toggle = () => {
    setModal(!modal);
  };
  console.log("all");
  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="4" md="4" sm="4" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>

            <Col lg="4" md="4" sm="4" xs="12">
              {/* <div className="search__widget d-flex align-items-center justify-content-between ">
                <span>Add Item </span>
              </div> */}

              <button className="addProduct" onClick={toggle}>
                Add Item
              </button>
            </Col>

            <Col lg="4" md="4" sm="4" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} delete={deleteProd} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
              />
            </div>
          </Row>

          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add New Food Item</ModalHeader>
            {/* <ModalBody>Sample Modal Body Text to display...</ModalBody> */}
            <Form style={{ padding: "1rem 1.5rem" }}>
              <FormGroup>
                <Label for="exampleUrl">Product Name</Label>
                <Input
                  id="exampleUrl"
                  name="url"
                  placeholder="Product Name"
                  type="url"
                  onChange={(e) =>
                    setNewItem({ ...newItem, title: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleNumber">Price</Label>
                <Input
                  id="exampleNumber"
                  name="number"
                  placeholder="Enter Price"
                  type="number"
                  onChange={(e) =>
                    setNewItem({ ...newItem, price: e.target.value })
                  }
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                  onChange={(e) => {
                    setNewItem({ ...newItem, category: e.target.value });
                  }}
                >
                  <option selected value="Pizza">
                    Pizza
                  </option>
                  <option value="Burger">Burger</option>
                  <option value="Bread">Bread</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">Production description</Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="textarea"
                  onChange={(e) => {
                    setNewItem({ ...newItem, desc: e.target.value });
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">Choose Image</Label>
                <Input
                  id="exampleFile"
                  name="file"
                  type="file"
                  accept="image/jpeg, image/png, image/jpg"
                  onChange={(e) => {
                    setNewItem({
                      ...newItem,
                      image01: e.target.files[0],
                      image02: e.target.files[0],
                      image03: e.target.files[0],
                    });
                  }}
                />
              </FormGroup>

              <Button color="primary" onClick={onSubmit}>
                Save
              </Button>
            </Form>
            {/* <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Okay
              </Button>
            </ModalFooter> */}
          </Modal>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
