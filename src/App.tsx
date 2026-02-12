import "./App.css";
import { useSearchParams } from "react-router-dom";
import { MathJax, MathJaxContext } from "better-react-mathjax";

function App() {
  const [searchParams] = useSearchParams();

  // Read a specific query parameter
  const rawTextParam = searchParams.get("text") as string || "";
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
