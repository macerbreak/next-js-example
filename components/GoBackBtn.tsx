import {Button} from "@mui/material";
import Router from "next/router";

const GoBackBtn = () => {
    return <Button onClick={()=>{Router.push("/")}}>Go Back</Button>
}
export default GoBackBtn