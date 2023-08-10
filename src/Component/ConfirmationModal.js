import { Box, Button, Card, Modal, Typography } from "@mui/material";
import React from "react";

const ConfirmationModal = ({ text, onClick, closeOnClick, open, onClose }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Card
            sx={{
              width: "370px",
              height: "190px ",
            }}
          >
            <Box sx={{ textAlign: "center", paddingTop: "15px" }}>
              <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
                Confirmation
              </Typography>
              <Typography sx={{ paddingTop: "10px" }}>{text}</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                paddingTop: "26px",
              }}
            >
              <Button variant="contained" onClick={onClick}>
                update
              </Button>

              <Button variant="contained" onClick={closeOnClick}>
                cancel
              </Button>
            </Box>
          </Card>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
