import {NextPage} from "next";
import {AppBar, Box, styled, Toolbar} from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import {PropsWithChildren, ReactElement} from "react";

interface MainLayoutProps{
  children:ReactElement<any, any>[]|ReactElement<any, any>
}
const MainLayout:NextPage<MainLayoutProps> = ({children}) =>{
    return <>
        <Head>
            <title>Next Example</title>
            <meta name={"keywords"} content={"example next, next js, next"}/>
            <meta name={"description"} content={"this is next js example"}/>
        </Head>
    <AppBar position={"fixed"}>
       <Navigation>
           <Link href={"/"}><a>Home</a></Link>
           <Link href={"/about"}><a>About</a></Link>
           <Link href={"/posts"}><a>Posts</a></Link>
       </Navigation>
    </AppBar>
        <Main>
            {children}
        </Main>


    </>
}
const Navigation = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-around",
    "main":{
        marginTop:"60px"
    }
})
const Main = styled("main")({
    marginTop:"60px",
    padding:"20px"
})
export default MainLayout