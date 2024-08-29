"use client";

import { styled } from "@mui/material";
import { Colors } from "@/app/utils/Colors/Colors";
import Image from "next/image";

export const HeaderBox = styled("header")(() => ({
    backgroundColor: Colors.mainBlue,
    width: "100vw",
    height: "48px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    color: Colors.white,
    paddingLeft: "20px",
}));

export const HeaderLogoCompany = styled(Image)(() => ({
    height: "20xp",
    width: "20px",
}));

export const HeaderText = styled("div")(() => ({
    marginLeft: "20px",
    fontSize: "16px",
    fontWeight: "700",
}));
