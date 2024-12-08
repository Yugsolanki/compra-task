import "./App.css";
import { CustomSidebar } from "./components/CustomSidebar";
import MySurveys from "./components/MySurveys";
import SetpupGuide from "./components/SetpupGuide";


function App() {
  return (
    <>
      <div className="min-h-screen flex">
        <CustomSidebar />
        <div className="w-full mx-60 my-10">
          <SetpupGuide />
          <MySurveys />
        </div>

      </div>
    </>
  );
}

export default App;
