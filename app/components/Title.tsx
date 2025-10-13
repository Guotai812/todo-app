export default function Title({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
    </div>
  );
}
