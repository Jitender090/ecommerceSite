import React from "react";
import { useParams } from "react-router-dom";


export default function Description({ detail }) {
  const { ID } = useParams();
  return (
    <>
      <div className="ds-conatiner">
        <p style={{letterSpacing:'2px'}}>{detail[ID - 1].description}</p>
      </div>
    </>
  );
}
