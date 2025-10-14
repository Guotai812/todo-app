"use client";
import { useState } from "react";

export default function useModel() {
  const [isShow, setIsShow] = useState<boolean>(false);
  const showModel = () => setIsShow(true);
  const hideModel = () => setIsShow(false);
  return { isShow, showModel, hideModel };
}
