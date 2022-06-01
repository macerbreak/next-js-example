import type {NextPage} from 'next'
import {Box, styled} from "@mui/material";
import Head from "next/head";
import MainLayout from "../components/MainLayout";

const Home: NextPage = () => {
    return <>
        <MainLayout>
            <StartBox>
                Next Example Main Page
            </StartBox>
        </MainLayout>

    </>
}
const StartBox = styled(Box)({})
export default Home
