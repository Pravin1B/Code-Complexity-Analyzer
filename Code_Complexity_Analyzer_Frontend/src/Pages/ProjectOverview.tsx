import "../Styles/PageStyles.css";
const ProjectOverview = () => {
    return (
        <div className="page-container">
    <div className="content-box">
    <h2> What Is Code Complexity? What It Means and How to Measure It</h2>
    <p>Code Complexity refers to how difficult a codebase is to understand, modify, and maintain. It includes factors like the number of lines, nested conditions, and dependencies.</p>
    <p>Time and Space Complexity</p>
<p>1. Time Complexity ⏳</p>
<p>It measures how the execution time of an algorithm increases with input size.
Expressed using Big O notation (e.g., O(1), O(n), O(n²)).
Lower time complexity means faster execution.</p>
<p>2. Space Complexity 💾 </p>
<p>It measures the memory an algorithm uses as input size grows.
Includes auxiliary space (extra memory used) and input space.
Optimized space usage improves efficiency.</p>
    </div>
    </div>
    );
  };
  export default ProjectOverview;
  