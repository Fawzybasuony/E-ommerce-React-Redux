import React from "react";

export default function Loading() {
  return (
    <>
 <center>
       <div className="spinner-border text-success" role="status" style={{marginTop:"300px"}}>
         <span className="visually-hidden">Loading...</span>
       </div>
 </center>
    </>
  );
}
