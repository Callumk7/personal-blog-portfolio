import Header from "@/components/ui/Header";

export default async function Home() {
  return (
    <div>
      <section className="mx-auto h-screen w-11/12">
        <Header className="absolute top-1/2" h={1}>
          I built this.
        </Header>
      </section>
    </div>
  );
}
