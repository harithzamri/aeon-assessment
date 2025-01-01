import Container from "./container";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-[2rem]">
      <div className="text-center">Adding Two Numbers</div>
      <Container />
    </div>
  );
}
