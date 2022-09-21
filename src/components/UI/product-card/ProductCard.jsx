import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";
import products from "../../../assets/fake-data/products";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { Modal, Button } from "reactstrap";
import { useState } from "react";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const val = props.delete;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };
  const [modal, setModal] = React.useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  const [data, setData] = useState("");
  const openModal = () => {
    toggle();
    setData(props.item);
  };
  const readURL = (file) => {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = (e) => res(e.target.result);
      reader.onerror = (e) => rej(e);
      reader.readAsDataURL(file);
    });
  };

  const deleteProd = () => {
    val(data.id);
    // products = products.filter((el) => el.id !== props.id);
    toggle();
  };

  console.log("here image", image01);
  return (
    <div className="product__item">
      <div className="product__img">
        <img
          src={image01?.name ? URL.createObjectURL(image01) : image01}
          alt="product-img"
          onClick={openModal}
          className="w-50 "
        />
      </div>

      <div className="product__content">
        {/* <p className="product__cross" onClick={deleteItem}>
          X
        </p> */}
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">${price}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      <Modal isOpen={modal} toggle={toggle} size="lg" centered>
        {/* <ModalHeader toggle={toggle}>Sample Modal Title</ModalHeader> */}
        <div className="product__detail">
          <h2>{data?.title}</h2>
          <h3>Price: ${data?.price}</h3>
          <p> {data?.desc}</p>
          <img
            src={image01?.name ? URL.createObjectURL(image01) : image01}
            style={{ height: "200px", alignItems: "center", width: "280px" }}
          />
          <br />

          <Button
            onClick={deleteProd}
            color="danger"
            style={{ margin: "1rem 0.5rem" }}
          >
            Delete
          </Button>
          <Button
            onClick={toggle}
            className="primary"
            style={{ margin: "1rem 0" }}
          >
            close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ProductCard;
