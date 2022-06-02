import {Box, Typography} from "@mui/material";
import GoBackBtn from "../components/GoBackBtn";
import MainLayout from "../components/MainLayout";
import axios from "axios";
import Link from "next/link";
import {useEffect, useState} from "react";

interface PostProps {
    posts:{
        id:number,
        title:string,
        bode:string
    }[]|null
}
const Posts = ({posts:serverPosts}:PostProps) => {
    const [posts, setPosts] = useState(serverPosts)
    console.log({posts})
    const loadPosts = async () =>{
        const request = await axios.get(`${process.env.API_URL}/posts`)
        setPosts(request.data)
    }
    useEffect(()=>{
        if(!serverPosts){
            loadPosts()
        }
    },[])
    return <>
        <MainLayout>
            {posts?<><GoBackBtn/>
            <Typography>This is posts page</Typography>
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                color:"blue"
            }}>
                {posts!.map(post=><Link href={`/post/[id]`} as={`/post/${post.id}`} key={post.id}><a>{post.title}</a></Link>)}
            </Box></>:
                <Typography>Loading...</Typography>}
        </MainLayout>
    </>
}
Posts.getInitialProps = async ({req}:{req:boolean}) =>{
    if(!req){
        return {
            posts:null
        }
    }
    else{
        const response =  await axios.get(`${process.env.API_URL}/posts`)
        // console.log({response})
        return {posts:response.data}
    }
}
export default Posts