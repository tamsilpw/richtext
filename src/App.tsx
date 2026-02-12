import "./App.css";
import { useSearchParams } from "react-router-dom";
import { MathJax, MathJaxContext } from "better-react-mathjax";

function App() {
  const [searchParams] = useSearchParams();

  const mockText = `<ul>
<li style="font-weight: 400; text-align: left;" aria-level="1"><span style="font-weight: 400;">The shoulder joint is classified as a </span><strong>ball-and-socket</strong><span style="font-weight: 400;"> joint.</span></li>
<li style="font-weight: 400; text-align: left;" aria-level="1"><span style="font-weight: 400;">A ball-and-socket joint is a type of synovial joint where the rounded end of one bone (the ball) fits into the cup-shaped socket of another bone.&nbsp;</span></li>
<li style="font-weight: 400; text-align: left;" aria-level="1"><span style="font-weight: 400;">In the case of the shoulder joint, the rounded head of the </span><strong>humerus</strong><span style="font-weight: 400;"> bone articulates with the shallow </span><strong>glenoid</strong><span style="font-weight: 400;"> cavity of the scapula bone, allowing a </span><strong>wide range of motion</strong><span style="font-weight: 400;"> in multiple planes.</span></li>
<li style="font-weight: 400; text-align: left;" aria-level="1"><span style="font-weight: 400;">The shoulder joint is one of the </span><strong>most mobile joints</strong><span style="font-weight: 400;"> in the body, allowing movements such as flexion, extension, abduction, adduction, internal rotation, and external rotation.&nbsp;</span></li>
<li style="font-weight: 400; text-align: left;" aria-level="1"><span style="font-weight: 400;">This mobility makes the shoulder joint </span><strong>prone</strong><span style="font-weight: 400;"> to various injuries and conditions, such as </span><strong>dislocations, </strong><span style="font-weight: 400;">rotator cuff tears, shoulder impingement, and arthritis.</span></li>
</ul>
<p style="text-align: left;">&nbsp;</p>
<p style="text-align: left;"><strong>Other Options:</strong></p>
<p style="text-align: left;"><span style="font-weight: 400;"><strong>Option A:</strong> A hinge joint allows movement in only one plane, such as the elbow joint. It allows for flexion and extension but does not provide the wide range of motion observed in the shoulder joint.</span></p>
<p style="text-align: left;"><span style="font-weight: 400;"><strong>Option C:</strong> A pivot joint allows rotational movement around a central axis, such as the joint between the first and second cervical vertebrae (atlantoaxial joint). The shoulder joint does not exhibit this type of rotational movement.</span></p>
<p style="text-align: left;"><span style="font-weight: 400;"><strong>Option D:</strong> A gliding joint involves two flat bone surfaces sliding against each other. Examples include the joints between the carpal bones in the wrist.&nbsp;</span></p>`;

console.log(mockText)
console.log(encodeURIComponent(mockText))

  // Read a specific query parameter
  const rawTextParam = searchParams.get("text") as string;
  const text = decodeURIComponent(rawTextParam);

  if (!text) return <></>;

  return (
    <MathJaxContext
      version={2}
      config={{
        tex2jax: {
          inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
          ],
          displayMath: [
            ["$$", "$$"],
            ["\\[", "\\]"],
          ],
        },
        showMathMenu: false,
        messageStyle: "none",
      }}
    >
      <MathJax dynamic={true}>
        <span
          className="prose prose-li:marker:text-black scrollbar-hide"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></span>
      </MathJax>
    </MathJaxContext>
  );
}

export default App;
