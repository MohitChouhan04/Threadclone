
import { useSelector } from "react-redux";
import Profilebar from "../../components/search/Profilebar";
import Searchinput from "../../components/search/Searchinput";
import { Stack, Typography } from "@mui/material";
const Search = () =>{
    const {searchedUser } = useSelector((state)=>state.service )
return(
    <>
    <Stack display={'flex'} alignItems={'center'}>

    <Searchinput />
    </Stack>
    <Stack 
    flexDirection={'column'} gap={1} mb={5} width={'90%'} mx={'auto'}
    maxWidth={'750px'} >
        {
            searchedUser ? searchedUser.length > 0 ?searchedUser.map((e) =>{
                return <Profilebar key={e._id} e = {e}/>
            }):'':<Typography variant="h6" textAlign={'center'} mb={5}>
                start searching...
            </Typography>
        }
        
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