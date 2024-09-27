import Task from "../components/Task";
import Calender from "../components/Calender";

export default function Home() {
  return (
    <div>
    <div className="flex-row justify-around z-30">
      <div className="w-12">
        <Task />
      </div>
      <div >
        <Calender />
      </div>
    </div>
  </div>
  )
}
