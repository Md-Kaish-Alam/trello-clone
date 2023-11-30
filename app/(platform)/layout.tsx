import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

import { ModalProviders } from "@/components/providers/modal-provider";
import { QueryProvider } from "@/components/providers/query-provider";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <QueryProvider>
        <Toaster />
        <ModalProviders />
        {children}
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
