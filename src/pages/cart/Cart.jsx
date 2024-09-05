/** @format */

import {
  Box,
  Button,
  Paper,
  styled,
  IconButton,
  Badge,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import "./Cart.css";
import { Add, Delete, Remove } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProdact,
  incrementByAmount,
  deecreasQuontity,
} from "../../Radox/mydataSlice.js";
import Header from "../../comp/header.js";
import Footer from "../../comp/Footer.js";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#1976d2",
    color: "#fff",
    marginTop: "-5px",
  },
}));

const Cart = () => {
  const { selectedProducts } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  let totle = 0;

  return (
    <>
      <div className="car">
        <Header />
        <img
          style={{ width: "90%", height: "150px", margin: "20px",borderRadius:"10px" }}
          src="/logos/logo_cart2.jpg"
          alt="'"
        />
        <h2>
          Cart <span>.</span>
        </h2>

     <div className="d-flex gap-2 ms-3">
         <p>Home/ </p>
         <p>Dresses/ </p>
         <p>Night/ Dresses</p>
      
     </div>
        {selectedProducts.length < 1 ? (
          <div
            className="alert alert-danger ms-auto me-auto w-50 mt-5 text-center fs-4"
            role="alert"
          >
            Not Fonde Product !
          </div>
        ) : (
          <Box>
            {selectedProducts.map((item) => {
              totle += Number(item.price) * Number(item.qontity);
              return (
                <Paper key={item.id} dir="rtl" className="item-container">
                  <div className="img-title-parent">
                    <img src={item.image} alt="" />
                    <p className="product-name">..{item.title.slice(0, 5)} </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton
                      sx={{ color: "#1976d2", ml: "10px" }}
                      onClick={() => {
                        dispatch(incrementByAmount(item));
                      }}
                    >
                      <Add />
                    </IconButton>

                    <StyledBadge
                      badgeContent={Number(item.qontity)}
                      color="secondary"
                      className="bg-black"
                    />

                    <IconButton
                      value={item.qontity}
                      sx={{ color: "#1976d2", mr: "10px" }}
                      onClick={() => {
                        dispatch(deecreasQuontity(item));
                      }}
                    >
                      <Remove />
                    </IconButton>
                  </div>

                  <div className="price">${Number(item.price)}</div>

                  <Button
                    sx={{ display: { xs: "none", md: "inline-flex" } }}
                    variant="text"
                    color="error"
                    onClick={() => {
                      dispatch(deleteProdact(item));
                    }}
                  >
                    delete
                  </Button>

                  <IconButton
                    sx={{
                      color: "#ef5350",
                      display: { xs: "inline-flex", md: "none" },
                    }}
                    onClick={() => {
                      dispatch(deleteProdact(item));
                    }}
                  >
                    <Delete />
                  </IconButton>
                </Paper>
              );
            })}
            <Paper
              className="mb-5"
              sx={{ width: "200px", mx: "auto", mt: "60px" }}
            >
              <Typography align="center" p={2} variant="h6">
                Cart Summary
              </Typography>

              <Divider />

              <Stack
                sx={{ justifyContent: "space-between", p: 1.2 }}
                direction={"row"}
              >
                <Typography variant="body1">Subtotal</Typography>

                <Typography variant="body1">${totle}</Typography>
              </Stack>

              <Divider />

              <Button fullWidth color="primary" variant="contained">
                CHECKOUT
              </Button>
            </Paper>
          </Box>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Cart;
