import React, { useState } from "react";
import Textfield from "@mui/material/Textfield";

function Filter() {
    const [inputText, setInputText] = useState("");
    //const [filteredNotes, setFilteredNotes] = useState([]);

    let filterInput = (e) => {
        inputLowerCase = e.target.value.toLowerCase();
        setInputText(inputLowerCase);
        
    };

}