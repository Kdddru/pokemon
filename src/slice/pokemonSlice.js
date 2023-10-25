import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getPokemonName =createAsyncThunk(
  "pokemonName",
  async()=>{
    let num = 20
    const pokemonKoreanNames = [];
    const urls =[];
    
    for(let i=0; i<num; i++){
      let url = `https://pokeapi.co/api/v2/pokemon-species/${i+1}`
      urls.push(url);
    }

    let requests = urls.map((url)=> fetch(url));

    await Promise.all(requests)
    .then((response)=>Promise.all(response.map((res)=>res.json())))
    .then((results)=> {
      for(let result of results){
        pokemonKoreanNames.push(result.names[2].name);
      }
    })

    return pokemonKoreanNames
  }
)



const pokemonSlice = createSlice({
  name : 'pokemon',
  initialState:{
    name : []
  },
  extraReducers: (builder) =>{
    builder.addCase(getPokemonName.fulfilled,(state,action)=>{
      state.name = action.payload
    })
  }
})


export default pokemonSlice.reducer