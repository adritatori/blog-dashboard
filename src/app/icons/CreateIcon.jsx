import * as React from "react";

function CreateIcon({ fill = "#6C7281", ...rest }) {
  return (
    <svg
  width={16}
  height={15}
  fill="none"
  viewBox="0 0 16 15"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5.54933 13.3306H16V15H0V11.4584L8.8 3.19501L12.5707 6.73742L5.54844 13.3306H5.54933ZM10.056 2.01559L11.9422 0.244385C12.1089 0.0879056 12.335 0 12.5707 0C12.8064 0 13.0324 0.0879056 13.1991 0.244385L15.7138 2.60572C15.8804 2.76224 15.974 2.97451 15.974 3.19584C15.974 3.41717 15.8804 3.62944 15.7138 3.78597L13.8276 5.55634L10.0569 2.01559H10.056Z"
    fill="white"
  />
</svg>
  );
}

export default CreateIcon;
