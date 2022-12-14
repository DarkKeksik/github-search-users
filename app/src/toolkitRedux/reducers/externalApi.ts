import { createSlice } from '@reduxjs/toolkit'
import { getAccessTokenLS } from '../../utils/localstorage'
import { InitialStateProps } from '../types/externalApiTypes'

const initialState: InitialStateProps = {
  searchLogin: '',
  selectedLogin: '',
  users: [],
  isLoadingUsers: true,
  usersPaginationData: {
    currentPage: 1,
    stepRange: 5,
    totalPages: null
  },
  accessToken: getAccessTokenLS,
  errorGithub: null
}

const reducerExternalApi = createSlice({
  name: 'externalApiReducer',
  initialState,
  reducers: {
    setLoginSearch(state, action) {
      state.searchLogin = action.payload
      state.usersPaginationData.currentPage = 1
    },
    setLoginSelected(state, action) {
      state.selectedLogin = action.payload
    },
    setUsersToolkit(state, action) {
      state.users = action.payload
      state.errorGithub = null
    },
    setTokenToolkit(state, action) {
      state.accessToken = action.payload
    },
    setPaginationCurrentPage(state, action) {
      state.usersPaginationData.currentPage = action.payload
    },
    setErrorGithub(state, action) {
      state.errorGithub = action.payload
    },
    setIsLoadingUsers(state, action) {
      state.isLoadingUsers = action.payload
    }

  }
})

export default reducerExternalApi.reducer

export const {
  setUsersToolkit,
  setTokenToolkit,
  setPaginationCurrentPage,
  setLoginSearch,
  setLoginSelected,
  setErrorGithub,
  setIsLoadingUsers
} = reducerExternalApi.actions