import ChartRendererBar from "./components/BarChartComponent"
import ChartRendererLine from "./components/lineChartCmponent"
import ChartRendererPie from "./components/PieChartComponent"

 const MainComponent=()=>{
return(
    <>
    <ChartRendererBar/>
    <ChartRendererLine/>
    <ChartRendererPie/>
    
    </>
)
}

export default MainComponent