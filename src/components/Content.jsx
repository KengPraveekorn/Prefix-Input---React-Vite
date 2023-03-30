import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { format } from "date-fns";
import { Box, Button } from "@mui/material";
import "../Style/Content.css";

const Content = ({ posts }) => {

  const [val,setVal] = useState("")

  const month = new Date().getMonth() + 8; // Jan เริ่มที่ 0 (นับเป็น index) ต้อง +1
  const month10 = new Date("October 1").getMonth() + 1; // Jan เริ่มที่ 0 (นับเป็น index) ต้อง +1
  const month11 = new Date("November 1").getMonth() + 1; // Jan เริ่มที่ 0 (นับเป็น index) ต้อง +1
  const month12 = new Date("December 1").getMonth() + 1; // Jan เริ่มที่ 0 (นับเป็น index) ต้อง +1
  const year = format(new Date(), "yy");

  const haddleChange = (e) => {
    setVal(e.target.value)
    // console.log(e.target.value);
  };
  const haddleClick = (e)=>{
    if(val.length < 4){
      setVal('')
      // alert("<4")
      // console.log("<4");
    }
    else if(val.length > 4){
      setVal('')
      // alert(">4")
      // console.log(">4");
    }else{
      setVal('')
      console.log("OK!!!");
    }
  }

  const mm = () => {
    if (month == month10) {
      return (
        <TextField
          className="text-input"
          label="LOT NUMBER"
          id="tf1"
          sx={{ m: 1, width: "25ch" }}
          onChange={haddleChange}
          value={val}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {year}
                XPB
              </InputAdornment>
            ),
          }} 
        />
      );
    } else if (month == month11) {
      return (
        <TextField
          className="text-input"
          label="LOT NUMBER"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          onChange={haddleChange}
          value={val}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {year}
                YPB
              </InputAdornment>
            ),
          }}
        />
      );
    } else if (month == month12) {
      return (
        <TextField
          className="text-input"
          label="LOT NUMBER"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          onChange={haddleChange}
          value={val}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {year}
                ZPB
              </InputAdornment>
            ),
          }}
        />
      );
    } else {
      return (
        <TextField
          className="text-input"
          label="LOT NUMBER"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          onChange={haddleChange}
          value={val}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {year}
                {month}PB
              </InputAdornment>
            ),
          }}
        />
      );
    }
  };

  return (
    <main>
      {mm()}
      <Box>
        <Button onClick={haddleClick}>Submit</Button>
      </Box>

      {/* <p>
        <h3>This is main content</h3>
        <ul>
          {posts.map((val, idx) => (
            <li key={idx}>
              Title: {val.title} <br />
              Body: {val.body} <br />
              <br />
            </li>
          ))}
        </ul>
      </p> */}
    </main>
  );
};

export default Content;
