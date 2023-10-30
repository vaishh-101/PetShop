import { React, useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const dummyRecords = [
  {
    id: 1,
    image:
      "https://supertails.com/cdn/shop/products/DTRDT0003PG_1_1.jpg?v=1696574159",
    title:
      "Pedigree Dentastix Oral Care for Adult (Medium Breed of 10 to 25 kg) Dog Treats",
    price: "MRP ₹200",
  },
  {
    id: 2,
    image:
      "https://supertails.com/cdn/shop/products/Frame6-2023-01-04T165422.692_c421460b-968d-447b-bb14-9fb893f3ba65-880728.png?v=1696485847",
    title:
      "Chip Chops Star Dental Stix Chicken and Green Tea Flavored Dog Treats",
    price: "MRP ₹129",
  },
  {
    id: 3,
    image:
      "https://supertails.com/cdn/shop/products/Frame30_1-379631.png?v=1696557566",
    title: "Moochie Tuna and Salmon Cat Treats",
    price: "MRP ₹124",
  },
  {
    id: 4,
    image:
      "https://supertails.com/cdn/shop/files/Frame-2023-07-28T121740.056.png?v=1696495377",
    title: "Kitty Licks Chicken Flavor Cat Treats",
    price: "MRP ₹124",
  },
  {
    id: 5,
    image:
      "https://supertails.com/cdn/shop/products/61wJA-Ph8OL._SX679.jpg?v=1655873823",
    title: "Pedigree Chicken and Vegetables Adult Dry Dog Food (15kg)",
    price: (
      <p>
        ₹2,890, MRP <s> ₹3,000</s>
      </p>
    ),
  },
  {
    id: 6,
    image:
      "https://supertails.com/cdn/shop/products/1_08336a68-44cd-431b-b95a-d08b1d839638_1.jpg?v=1696494837",
    title: "Drools Optimum Performance Adult Dog Dry Food (10kg)",
    price: (
      <p>
        ₹1,359, MRP <s> ₹2,000</s>
      </p>
    ),
  },
  {
    id: 7,
    image:
      "https://supertails.com/cdn/shop/files/Supertails_1_c5b34d1c-b748-4549-a3b4-5ed7ab44a043_1800x1800.jpg?v=1696639138",
    title:
      "Whiskas Tuna in Jelly Meal Adult Cat Wet Food and Tuna Flavour Adult Cat Dry Food Combo",
    price: (
      <p>
        ₹720, MRP <s> ₹799</s>
      </p>
    ),
  },
  {
    id: 8,
    image:
      "https://supertails.com/cdn/shop/products/Supertails_21_2_1800x1800.jpg?v=1696556687",
    title: "Me O Tuna Adult Cat Dry Food  (₹43/100g )",
    price: (
      <p>
        ₹195, MRP <s> ₹299</s>
      </p>
    ),
  },
  {
    id: 9,
    image:
      "https://supertails.com/cdn/shop/products/Group529_1_1800x1800.jpg?v=1696496773",
    title: "Emily Pets Lemon Scented Cat Litter",
    price: (
      <p>
        ₹699, MRP <s> ₹799</s>
      </p>
    ),
  },
  {
    id: 10,
    image:
      "https://supertails.com/cdn/shop/products/SUPERTAILS_2_6d90567e-5253-4cf4-83d7-b702783dca39_1800x1800.png?v=1696543619",
    title: "Intersand Unscented Odour Lock Calming Breeze Cat Litter",
    price: (
      <p>
        ₹2,256, MRP <s>₹2,375</s>
      </p>
    ),
  },
  {
    id: 11,
    image:
      "https://supertails.com/cdn/shop/products/Frame1-2022-06-15T112603.370_1_1_1800x1800.png?v=1684565322",
    title: "Pet Vogue Multi Level Puzzle Toy for Cats",
    price: (
      <p>
        ₹349, MRP <s> ₹999</s>
      </p>
    ),
  },
  {
    id: 12,
    image:
      "https://supertails.com/cdn/shop/products/5-update-207544.png?v=1696536084",
    title:
      "Hiputee Scratching Post, Activity Tower, Plush Fur Fabric Hammock, Basket Lounger ,Sisal/Jute Covered Rope Tree for Kittens & Cats (Grey)",
    price: (
      <p>
        ₹1109, MRP <s> ₹2,998</s>
      </p>
    ),
  },
  {
    id: 13,
    image:
      "https://supertails.com/cdn/shop/products/Frame10898-679841_1800x1800.png?v=1696510082",
    title: "Fofos Avocado Treat Toy for Dogs",
    price: (
      <p>
        ₹594, MRP <s> ₹675</s>
      </p>
    ),
  },
  {
    id: 14,
    image:
      "https://supertails.com/cdn/shop/products/61vwwkgg3SL1_1_1800x1800.jpg?v=1687498579",
    title: "Pet Vogue Bone Shaped Rubber chew Toy for Dogs",
    price: (
      <p>
        ₹129, MRP <s> ₹299</s>
      </p>
    ),
  },
  {
    id: 15,
    image:
      "https://supertails.com/cdn/shop/products/supertails_29_1_1800x1800.png?v=1696530706",
    title: "Harry Potter Woofy Witch Bandana Dress For Dogs",
    price: (
      <p>
        ₹129, MRP <s> ₹299</s>
      </p>
    ),
  },
  {
    id: 16,
    image:
      " https://supertails.com/cdn/shop/products/Frame1_77_1-149130_1800x1800.png?v=1696417955",
    title: "A Plus A Pets Feather Weight Harness & Leash Set for Dogs and Cats",
    price: (
      <p>
        ₹746, MRP <s> ₹909</s>
      </p>
    ),
  },
];

const Product = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [selectedProducts, setSelectedProducts] = useState([]); // State to store selected products
  const [selectedProductCount, setSelectedProductCount] = useState(0); // State to store the count of selected products
  const { incrementCounter, selectedProducts, setSelectedProducts } = props;

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecords = dummyRecords.filter((record) => {
    return record.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const searchBarStyle = {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  };

  const inputStyle = {
    width: "300px",
    fontSize: "24px",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "10px",
  };

  const handleAddToCart = (product) => {
    setSelectedProducts([...selectedProducts, product]);
    setSelectedProductCount(selectedProductCount + 1);
    incrementCounter();
  };

  const handleAddToCart1 = (product) => {
    setSelectedProducts((prevSelectedProducts) => [
      ...prevSelectedProducts,
      product,
    ]);
    setSelectedProductCount(selectedProductCount + 1);
    incrementCounter();
  };
  return (
    <>
      <div style={searchBarStyle}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          style={inputStyle}
        />
      </div>
      <Grid container spacing={2} marginTop={2}>
        {filteredRecords.map((record) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={record.id}>
            <Paper
              style={{
                padding: 16,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={record.image}
                alt={record.title}
                style={{ width: "80%", height: "auto", marginBottom: "8px" }}
              />
              <Typography variant="h6" style={{ flex: 1, textAlign: "center" }}>
                {record.title}
              </Typography>
              <Typography
                variant="body2"
                style={{
                  color: "black",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                {record.price}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "8px", width: "80%" }}
                onClick={() => handleAddToCart1(record)}
              >
                Add to Cart
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Product;
