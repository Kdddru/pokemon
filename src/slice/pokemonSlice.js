import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export let num = 150


export const getPokemonName =createAsyncThunk(
  "pokemonName",
  async()=>{
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

    return pokemonKoreanNames.map((p,i)=>({
      id : i+1,
      name : p,
      img : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`
    }))
  }
)



const pokemonSlice = createSlice({
  name : 'pokemon',
  initialState: [],
  extraReducers: (builder) =>{
    builder.addCase(getPokemonName.fulfilled,(state,action)=>{
      return action.payload
    })
  }
})


export default pokemonSlice.reducer