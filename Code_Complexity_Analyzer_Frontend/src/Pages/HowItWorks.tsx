
import "../Styles/PageStyles.css";
const HowItWorks = () => {
    return (
        <div className="page-container">
    <div className="content-box">
        <h1>How It Works </h1>;
        <p>1. Upload or Write Code 📂✍️</p>
<p>The user will either upload a code file (e.g., .java, .cpp) or write code manually in the Monaco Editor provided in the UI.</p>
        <p>2. Parse the Code with ANTLR 📜</p>
        <p>The backend (Spring Boot + ANTLR) will parse the uploaded/written code.
        It will generate an Abstract Syntax Tree (AST) to analyze the structure of the code</p>
        <p>3. Compute Code Complexity 📊</p>
        <p>Cyclomatic Complexity (Measures the number of decision paths).</p>
        <p>4. Visualize Complexity in UI 📈</p>
        <p>The React frontend will display complexity metrics using Recharts (Graphs, Charts, Progress Bars, etc.).</p>
        </div>
        </div>
        );
  };
  export default HowItWorks;
  