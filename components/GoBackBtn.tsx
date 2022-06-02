import {Button} from "@mui/material";
import Router from "next/router";

const GoBackBtn = () => {
    return <Button onClick={()=>{Router.push("/")}}>Go Home</Button>
}
export default GoBackBtn