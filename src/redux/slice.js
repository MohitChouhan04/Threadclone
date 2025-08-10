import { createSlice } from '@reduxjs/toolkit'




export const serviceSlice = createSlice({
  name: 'service',
  initialState:{openAddPostModal:false ,openEditProfileModel:false , anchorE1:null , anchorE2:null , darkMode:false},
  reducers: {
    addPostModel : (state , action) =>{
        state.openAddPostModal = action.payload;

    },
    editProfileModel : (state , action) =>{
      state.openEditProfileModel = action.payload;

    },
    toggleMainMenu : (state , action) =>{
      state.anchorE1 = action.payload;

    },
    toggleMyMenu : (state , action) =>{
      state.anchorE2 = action.payload;

    },
      toggleColorMode : (state , action) =>{
      state.darkMode = !state.darkMode;

    }
   },

  
});


export const { addPostModel ,editProfileModel , toggleMainMenu , toggleMyMenu , toggleColorMode} = serviceSlice.actions;

export default serviceSlice.reducer;