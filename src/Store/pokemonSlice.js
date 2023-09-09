import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//포켓몬 마릿수 
let num = 50;


export const getPokemon = createAsyncThunk(
  'getPokemon',
  async()=>{
    //포켓몬 api url
    const port = 'https://pokeapi.co/api/v2/pokemon-species';

    const pokemons = [];

    for(let i=1; i<=num; i++){
      const response = await fetch(`${port}/${i}`);
      const data = await response.json();
      const pokemonKoreaName = data.names[2].name;
      //포켓몬 이름 있을때 배열에 집어넣기
      pokemons.push(pokemonKoreaName);
    }

    return pokemons

  }
)



const pokemonSlice = createSlice({
  name : 'pokemonSlice',
  initialState:{
    status: '',
    pokemons: ''
  },
  reducers:{
    
  },
  extraReducers:(build)=>{
    build.addCase(getPokemon.fulfilled, (state,action)=>{
      state.status = 'Complite'
      state.pokemons = action.payload
    })
    build.addCase(getPokemon.rejected,(state,action)=>{
      state.status = 'failed'
    })
  }
})

export default pokemonSlice.reducer