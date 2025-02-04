import React from "react";
import { Modal, Box, Typography, Button, Backdrop } from "@mui/material";
import { Check } from "@mui/icons-material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function SuccessModal({ open, handleClose }) {
  const t = useTranslations("basket");
  const { locale } = useParams();
  return (
    <Modal open={open} onClose={handleClose} BackdropComponent={CustomBackdrop}>
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 370,
          bgcolor: "background.paper",
          p: 4,
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <Typography variant="h2">
          <span className="bg-[#FEE9E8] text-[#FB6A68] font-black p-4 rounded-full mx-auto w-[70px] h-[70px] flex justify-center items-center">
            <Check size={30} />
          </span>
        </Typography>
        <Typography
          sx={{
            mt: 2,
          }}
        >
          <h3 className="text-[29px] text-[#FB6A68] font-bold">
            {t("modal_title")}
          </h3>
          <p className="text-[14px] text-[#989898] font-bold ">
            {t("modal_desc")}
          </p>
        </Typography>
        <Button
          variant="contained"
          className="bg-[#FB6A68] block text-white border py-1 px-10 rounded-full"
          sx={{
            mt: 2,
            background: "white",
            "&:hover": { backgroundColor: "#FB6A68", color: "white" },
            color: "#FB6A68",
            display: "block",
            margin: "10px auto",
            width: "80%",
            borderRadius: "100px",
            border: "1px solid #FB6A68",
            padding: "10px",
            fontWeight: "bold",
          }}
          onClick={handleClose}
        >
          {t("modal_close")}
        </Button>
        <Link
          href={`/${locale}/analyze`}
          variant="contained"
          color="primary"
          className="text-[#FB6A68] bg-white hover:bg-[#FB6A68] hover:text-white mx-auto my-2 block w-[80%] border border-[#FB6A68] rounded-[100px] p-[12px] font-bold"
          onClick={handleClose}
        >
          {t("modal_service")}
        </Link>
      </Box>
    </Modal>
  );
}

function CustomBackdrop(props) {
  return (
    <Backdrop
      {...props}
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        boxShadow: "none",
      }}
    />
  );
}
