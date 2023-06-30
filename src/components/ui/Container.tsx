export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="relative mx-auto w-4/5 max-w-3xl">{children}</div>;
}
