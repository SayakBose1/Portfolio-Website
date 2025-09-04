import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdSchool } from "react-icons/md";
import "react-vertical-timeline-component/style.min.css";

const educationData = [
  {
    year: "2022-2026",
    degree: "B.Tech in Information Technology",
    location: "Kolkata, West Bengal",
  },
  {
    year: "2020-2022",
    degree: "Higher Secondary (12th)",
    location: "Baranagar, West Bengal",
  },
  {
    year: "2014-2020",
    degree: "Secondary (10th)",
    location: "Baranagar, West Bengal",
  },
];

export function EducationTimeline() {
  return (
    <VerticalTimeline lineColor="#BB86FC">
      {educationData.map((edu, index) => (
        <VerticalTimelineElement
          key={index}
          contentStyle={{
            background: "#1f1f1f",
            color: "#fff",
            borderRadius: "10px",
          }}
          contentArrowStyle={{ borderRight: "7px solid #BB86FC" }}
          date={edu.year}
          iconStyle={{ background: "#BB86FC", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 style={{ color: "#BB86FC", fontWeight: "bold" }}>{edu.degree}</h3>
          <p style={{ color: "#ddd" }}>{edu.location}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
