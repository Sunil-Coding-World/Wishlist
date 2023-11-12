import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// const splice = createSlice();

//create action
export const createWish = createAsyncThunk(
  "createWish",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch("https://wishlist-server-ashen.vercel.app/wishes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      return result
    } catch (err) {
      return rejectWithValue("Opps found an error", err.response.data)
    }
  }
)

//read action
export const showWish = createAsyncThunk(
  "showWish",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch("https://wishlist-server-ashen.vercel.app/wishes")
      const result = await response.json()
      return result
    } catch (err) {
      return rejectWithValue("Opps found an error", err.response.data)
    }
  }
)

//delete action
export const deleteWish = createAsyncThunk(
  "deleteWish",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://wishlist-server-ashen.vercel.app/wishes/${id}`, {
        method: "DELETE",
      })
      const result = await response.json()
      return result
    } catch (err) {
      return rejectWithValue("Opps found an error", err.response.data)
    }
  }
)

//update action
export const updatewish = createAsyncThunk(
  "updatewish",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data)
      const response = await fetch(`https://wishlist-server-ashen.vercel.app/wishes/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      return result
    } catch (err) {
      return rejectWithValue("Opps found an error", err.response.data)
    }
  }
)

export const userdetail = createSlice({
  name: "userdetail",
  initialState: {
    wish: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [createWish.pending]: (state) => {
      state.loading = true
    },
    [createWish.fulfilled]: (state, action) => {
      state.loading = false
      state.wish.push(action.payload)
    },
    [createWish.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload.message
    },
    [showWish.pending]: (state) => {
      state.loading = true
    },
    [showWish.fulfilled]: (state, action) => {
      state.loading = false
      state.wish = action.payload
    },
    [showWish.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload.message
    },
    [deleteWish.pending]: (state) => {
      state.loading = true
    },
    [deleteWish.fulfilled]: (state, action) => {
      state.loading = false
      const { id } = action.payload

      if (id) {
        state.wish = state.wish.filter((e) => e.id !== id)
      }
    },

    [deleteWish.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload.message
    },
    [updatewish.pending]: (state) => {
      state.loading = true
    },
    [updatewish.fulfilled]: (state, action) => {
      state.loading = false
      state.wish = state.wish.map((e) =>
      e.id === action.payload ? action.payload : e)
    },
    [updatewish.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload.message
    },
  },
})

export const { searchData } = userdetail.actions

export default userdetail.reducer
