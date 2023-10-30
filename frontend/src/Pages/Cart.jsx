import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Cart = ({ selectedProducts, onProductDelete }) => {
  const handleProductDelete = (productId) => {
    // Call the provided onProductDelete function to delete the product
    console.log("CLICK ME")
    onProductDelete(productId);
  };

  return (
    <div style={{ background: "pink" }}>
      <h1 style={{ textAlign: "center", color: "blueviolet" }}>
        Keep shopping
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          background: "pink",
        }}
      >
        {selectedProducts &&
          selectedProducts.map((product1) => (
            <Card
              key={product1.id}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                maxWidth: "300px",
                margin: "10px",
              }}
            >
              <img
                src={product1.image}
                alt={product1.title}
                style={{ width: "100px", height: "auto" }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product1.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product1.price}
                </Typography>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleProductDelete(product1.id)}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Cart;
