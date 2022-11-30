import { Box } from "@chakra-ui/react"
import { useContext } from "react"
import { CountContext } from "../context/count"

const DataDisplay:React.FC =()=>{
    const {count} = useContext(CountContext)
    return <Box textAlign="center">{count}</Box>
}

export default DataDisplay