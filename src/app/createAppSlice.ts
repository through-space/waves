import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";

//TODO: Maybe call this file appConsts.ts???

export const createAppSlice = buildCreateSlice({
	creators: { asyncThunk: asyncThunkCreator },
});
