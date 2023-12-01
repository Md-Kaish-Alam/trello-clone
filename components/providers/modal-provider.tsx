"use client";

import { CardModal } from "@/components//modals/card-modals";
import { useEffect, useState } from "react";
import { ProModal } from "@/components/modals/pro-modal";

export const ModalProviders = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CardModal />
      <ProModal />
    </>
  );
};
