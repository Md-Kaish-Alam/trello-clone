const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-slate-100">
      <main>{children}</main>
    </div>
  );
};

export default ClerkLayout;