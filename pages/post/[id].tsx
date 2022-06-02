import Router, {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {Button, Typography} from "@mui/material";
import MainLayout from "../../components/MainLayout";
import axios from "axios";
import {NextPageContext} from "next";


interface PostProps {
    post: {
        id: number,
        title: string,
        body: string
    }
}

const Post = ({post: serverPost}: PostProps) => {
    const [post, setPost] = useState(serverPost)
    const router = useRouter()
    const loadPost = async () => {
        const response = await axios.get(`${process.env.API_URL}/posts/${router.query.id}`).then(res=>res)
        setPost(response.data)
    }
    useEffect(() => {
        if(!serverPost){
            loadPost()
        }
    }, [])
        return <>
            <MainLayout>
                {post ? <><Button onClick={() => {
                    Router.push("/posts")
                }}>Back to posts</Button>
                <Typography>This is a post {router.query.id}</Typography>
                <Typography component={"h2"}>{post.title}</Typography>
                <Typography>{post.body}</Typography></>:<>
                    <Typography>Loading...</Typography>
                </>}
            </MainLayout>

        </>

}

Post.getInitialProps = async (context:NextPageContext) => {
    if (!context.req) {
        return {
            post: null
        }
    } else {
        const response = await axios.get(`${process.env.API_URL}/posts/${context.query.id}`)
        console.log({response})
        return {
            post: response.data
        }
    }
}
// export async function getServerSideProps(context){
//     if (!context.req) {
//         return {
//             props:{post: null}
//         }
//     } else {
//         const response = await axios.get(`http://localhost:4200/posts/${context.query.id}`)
//         console.log({response})
//         return {
//             props:{post: response.data}
//         }
//     }
// }
export default Post