import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiPytorch,
  SiPython,
  SiCplusplus,
  SiC,
} from "react-icons/si";

import { FaJava } from "react-icons/fa"; // ✅ use this for Java

import { Cpu, Code2 } from "lucide-react";
import "./TechMarquee.css";

const icons = [
  { component: <SiHtml5 />, name: "HTML" },
  { component: <SiCss3 />, name: "CSS" },
  { component: <SiJavascript />, name: "JavaScript" },
  { component: <SiTailwindcss />, name: "Tailwind" },
  { component: <SiReact />, name: "React" },
  { component: <SiNextdotjs />, name: "Next.js" },
  { component: <SiPytorch />, name: "PyTorch" },
  { component: <SiPython />, name: "Python" },
  { component: <SiCplusplus />, name: "C++" },
  { component: <SiC />, name: "C" },
  { component: <FaJava />, name: "Java" },
  { component: <Cpu />, name: "Verilog" },
];

export default function TechMarquee() {
  return (
    <div className="tech-marquee-wrapper">
      <div className="tech-marquee">
        {icons.concat(icons).map((icon, index) => (
          <div className="tech-icon" key={index} title={icon.name}>
            {icon.component}
          </div>
        ))}
      </div>
    </div>
  );
}
