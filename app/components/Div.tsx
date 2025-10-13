export default function Div({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 flex-col items-center justify-center gap-6">
      {children}
    </div>
  );
}
