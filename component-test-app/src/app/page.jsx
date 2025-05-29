"use client";
import Button from "@/components/Button";
import { Heading, Paragraph, Caption } from "@/components/Text";
import {Linkedin, Github,Instagram} from "lucide-react";
import IconButton from "@/components/IconButton";
import TechMarquee from "@/components/TechMarquee";

export default function ComponentPlayground() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#1E1E2F",
        color: "white",
        padding: "2rem"
      }}
    >
      <Heading>Header</Heading>

      <Paragraph>
        This is a playground for testing reusable components like buttons and typography.
      </Paragraph>

      <Caption>Click a button to see its variant styling.</Caption>

      <section style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="text">Text</Button>
        <Button disabled>Disabled</Button>
      </section>
      <div style={{marginTop: "2rem"}}>
        <Heading>Icons</Heading>
        <div style={{display: "flex", gap: "1rem"}}>
          <IconButton 
            icon={<Linkedin size={40}/>}
            ariaLabel="LinkedIn"
            onClick={()=>window.open("https://www.linkedin.com/in/gilbertotumangday/", "_blank")}
          />
          <IconButton 
            icon={<Github size={40}/>}
            ariaLabel="Github"
            onClick={()=>window.open("https://github.com/gilbertotumangday1", "_blank")}
          />
          <IconButton 
            icon={<Instagram size={40}/>}
            ariaLabel="Instagram"
            onClick={()=>window.open("https://www.instagram.com/gilberto.tumangday/", "_blank")}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "2rem",
          }}
        >
          <div style={{ width: "50%"}}>
            <TechMarquee />
          </div>
        </div>
      </div>
    </main>
  );
}
