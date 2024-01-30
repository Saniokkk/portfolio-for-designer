//components/ClientPortal.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

export const ClientPortal = ({ children, selector, show }) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = document.getElementById(selector);
  }, [selector]);
  return createPortal(children, ref.current);
};
