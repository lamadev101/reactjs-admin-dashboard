import { WidgetItems } from "../assets/data"
import LineChart from "../components/charts/LineChart"
import Featured from "../components/Featured"
import Widget from "../components/Widget"

const Dashboard = () => {

  return (
    <div className="h-full">
      {/* Top section */}
      <div className="flex flex-wrap gap-3 w-full p-2">
       {WidgetItems.map(item=>{
        return(
          <Widget key={item.id} item={item} />
        )
       })}
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center gap-2 m-2">
        <Featured/>
        <LineChart/>
      </div>
    </div>
  )
}

export default Dashboard