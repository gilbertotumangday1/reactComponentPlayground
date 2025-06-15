"use client";
import Button from "@/components/Button";
import { Heading, Paragraph, Caption } from "@/components/Text";
import { Linkedin, Github, Instagram } from "lucide-react";
import IconButton from "@/components/IconButton";
import TechMarquee from "@/components/TechMarquee";
import { HamburgerIcon, ProjectsIcon, BlogIcon } from "@/components/TechnicalIcons";
import ClickableText from "@/components/ClickableText";
import {
  Container,
  Box,
  Bar,
  Divider,
  Grid,
  Flex,
  Section
} from "@/components/LayoutAtoms";
import Avatar from "@/components/Avatar";
import Thumbnail from "@/components/Thumbnail";
import MediaPlayer from "@/components/MediaPlayer";

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
      <Heading>Primary Heading</Heading>

      <Paragraph>
        This is a playground for testing reusable components like buttons and typography.
      </Paragraph>
      <div>
        <ClickableText href="/resume.pdf">Click me</ClickableText>
      </div>

      <Caption>Click the text to view my resume.</Caption>

      <section style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="text">Text</Button>
        <Button disabled>Disabled</Button>
      </section>

      <div style={{ marginTop: "2rem" }}>
        <Heading>Icons</Heading>
        <div style={{ display: "flex", gap: "1rem" }}>
          <IconButton 
            icon={<Linkedin size={40} />} 
            ariaLabel="LinkedIn" 
            onClick={() => window.open("https://www.linkedin.com/in/gilbertotumangday/", "_blank")} 
          />
          <IconButton 
            icon={<Github size={40} />} 
            ariaLabel="Github" 
            onClick={() => window.open("https://github.com/gilbertotumangday1", "_blank")} 
          />
          <IconButton 
            icon={<Instagram size={40} />} 
            ariaLabel="Instagram" 
            onClick={() => window.open("https://www.instagram.com/gilberto.tumangday/", "_blank")} 
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
          <div style={{ width: "100%" }}>
            <TechMarquee />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <HamburgerIcon size={40} />
          <ProjectsIcon size={40} showLabel />
          <BlogIcon size={40} />
        </div>
      </div>

      {/* LAYOUT ATOMS PREVIEW */}
      <div style={{ marginTop: "4rem" }}>
        <Heading>Layout Atoms Preview</Heading>

        <Divider />

        <Container style={{ backgroundColor: "#2a2a40", padding: "1rem" }}>
          <Paragraph>This is inside a Container</Paragraph>
        </Container>

        <Box style={{ marginTop: "1rem" }}>
          <Paragraph>This is a Box</Paragraph>
        </Box>

        <Bar style={{ marginTop: "1rem" }}>
          This is a Bar
        </Bar>

        <Divider />

        <Section>
          <Heading>Inside a Section</Heading>
          <Paragraph>Some section content.</Paragraph>
        </Section>

        <Divider />

        <Flex>
          <div style={{ backgroundColor: "#3A3A5A", padding: "1rem" }}>Flex Item 1</div>
          <div style={{ backgroundColor: "#3A3A5A", padding: "1rem" }}>Flex Item 2</div>
          <div style={{ backgroundColor: "#3A3A5A", padding: "1rem" }}>Flex Item 3</div>
          <div style={{ backgroundColor: "#3A3A5A", padding: "1rem" }}>Flex Item 4</div>
          <div style={{ backgroundColor: "#3A3A5A", padding: "1rem" }}>Flex Item 5</div>
        </Flex>

        <Grid style={{ marginTop: "1rem" }}>
          <div style={{ backgroundColor: "#3A3A5A", padding: "1rem" }}>Grid Item 1</div>
          <div style={{ backgroundColor: "#3A3A5A", padding: "1rem" }}>Grid Item 2</div>
          <div style={{ backgroundColor: "#3A3A5A", padding: "1rem" }}>Grid Item 3</div>
        </Grid>
      </div>

      <div style={{marginTop: "4rem"}}>
        <Heading>Media</Heading>
        <div style ={{margin: "10px"}}>
          <Container style={{display: "flex", justifyContent: "space-around", alignItems: "center", backgroundColor: "#2a2a40", padding: "1rem" }}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Avatar src="/me.jpg" alt="Gilberto Tumangday" size="100"/>
              <Caption>Avatar</Caption>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <Thumbnail src="/throne.jpg" alt="GOT" width={320}/>
              <Caption>Thumbnail</Caption>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <MediaPlayer src="/demo.mp4" width={640} height={360} />
              <Caption>Video</Caption>
            </div>
          </Container>
        </div>
      </div>
    </main>
  );
}