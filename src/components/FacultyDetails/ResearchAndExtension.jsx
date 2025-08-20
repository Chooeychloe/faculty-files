import Research from "./research_extension/Research";
import Extension from "./research_extension/Extension";

function ResearchAndExtension() {
  return (
    <div className="w-full grid md:grid-cols-2 gap-6">
      <Research />
      <Extension />
    </div>
  );
}

export default ResearchAndExtension;
