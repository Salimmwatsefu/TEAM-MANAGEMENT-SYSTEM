import React, { createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
}