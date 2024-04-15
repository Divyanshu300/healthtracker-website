import Android1 from "./Pages/Android1";
import Android2 from "./Pages/Android2";
import Android4 from "./Pages/Android4";
import Android5 from "./Pages/Android5";
import { Android6 } from "./Pages/Android6";
import { Android8 } from "./Pages/Android8";
import Android9 from "./Pages/Android9";
import { Error } from "./Pages/Error";

import { Routes , Route } from "react-router-dom";

function App() {
  return (
    <div className=" overflow-auto no-scrollbar transition-all duration-200 w-[375px] h-[728px] mx-auto rounded-md bg-backgroundWhite">
      <Routes>
        <Route path="/" element={<Android1/>} />
        <Route path="/next" element={<Android2/>} />
        <Route path="/signup" element={<Android4/>} />
        <Route path="/login" element={<Android5/>} />
        <Route path="/goals" element={<Android6/>} />
        <Route path="/tracker" element={<Android8/>} />
        <Route path="/schedule" element={<Android9/>} />

        <Route path="*" element={<Error/>}/>
      </Routes>

    </div>
  );
}

export default App;
