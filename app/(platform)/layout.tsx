import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

import { ModalProviders } from "@/components/providers/modal-provider";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <Toaster />
      <ModalProviders />
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;
