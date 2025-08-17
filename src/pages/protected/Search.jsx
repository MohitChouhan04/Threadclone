
import { useSelector } from "react-redux";
import Profilebar from "../../components/search/Profilebar";
import Searchinput from "../../components/search/Searchinput";
import { Stack, Typography } from "@mui/material";
const Search = () =>{
    const {searchedUsers } = useSelector((state)=>state.service )
return(
    <>
    <Stack display={'flex'} alignItems={'center'}>

    <Searchinput />
    </Stack>
    <Stack 
    flexDirection={'column'} gap={1} mb={5} width={'100%'} mx={'auto'}
    maxWidth={'750px'} >
        {
            searchedUsers ? searchedUsers.length > 0 ?searchedUsers.map((e) =>{
                return <Profilebar key={e._id} e = {e} />
            }):'':<Typography variant="h6" textAlign={'center'} mb={5}>
                start searching...
            </Typography>
        }
        
  
    </Stack>
   
    </>

)
}

export default Search;