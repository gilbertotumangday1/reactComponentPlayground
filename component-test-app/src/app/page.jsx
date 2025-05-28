import Button from "@/components/Button";

export default function ComponentPlayground() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#1E1E2F", color: "white", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Component Playground</h1>

      <section style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="text">Text</Button>
        <Button disabled>Disabled</Button>
      </section>
    </main>
  );
}
