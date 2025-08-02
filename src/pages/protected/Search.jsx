
import Profilebar from "../../components/search/Profilebar";
import Searchinput from "../../components/search/Searchinput";
import { Stack } from "@mui/material";
const Search = () =>{
return(
    <>
    <Searchinput/>
    <Stack 
    flexDirection={'column'} gap={1} mb={5} width={'90%'} mx={'auto'}
    maxWidth={'750px'}>
        <Profilebar/>
        <Profilebar/>
        <Profilebar/>
        <Profilebar/>
        <Profilebar/>
        <Profilebar/>
    </Stack>
    {/* <Profilebar/> */}
    </>

)
}

export default Search;