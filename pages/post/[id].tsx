import {useRouter} from "next/router";
import {useEffect} from "react";
import {Typography} from "@mui/material";

const Post = () => {
    const router = useRouter()
    useEffect(() => {
        console.log(window.location.pathname)

    }, [])
    console.log({router})
    return <>
        <Typography>This is a post {router.query.id}</Typography>
    </>
}
export default Post