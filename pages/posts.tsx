import {Typography} from "@mui/material";
import GoBackBtn from "../components/GoBackBtn";
import MainLayout from "../components/MainLayout";
import axios from "axios";

const Posts = ({posts}) => {
    console.log({posts})
    return <>
        <MainLayout>
            <Typography>This is posts page</Typography>
            <GoBackBtn/>
        </MainLayout>
    </>
}
Posts.getInitialProps = async () =>{
    const response =  await axios.get("http://localhost:4200/posts")
    // console.log({response})
    return {posts:response}
}
export default Posts