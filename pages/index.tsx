import type { NextPage } from 'next'
import {Box, styled} from "@mui/material";

const Home: NextPage = () => {
  return <>
    <StartBox>
      Всем здарова
    </StartBox>
  </>
}
const StartBox = styled(Box)({
  color:"red"
})
export default Home
