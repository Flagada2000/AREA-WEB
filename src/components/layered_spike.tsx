import * as React from "react"

const LayeredSpike = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={1920} height={1080} {...props}>
    <path fill="#1a1a1a" d="M0 0h1920v1080H0z" />
    <path
      fill="#353535"
      d="m0 764 274-66 275 39 274-20 274 9 274 29 275 33 274 10v283H0Z"
    />
    <path
      fill="#2e2e2e"
      d="m0 724 274 126 275 15 274-121 274 15 274 10 275-47 274 89v270H0Z"
    />
    <path
      fill="#272727"
      d="m0 829 274 8 275 75 274-52 274-25 274 1 275 10 274 54v181H0Z"
    />
    <path
      fill="#202020"
      d="m0 935 274-5 275-28 274 74 274-53 274 9 275 6 274-7v150H0Z"
    />
    <path
      fill="#1a1a1a"
      d="m0 974 274 18 275 14 274-17 274-4 274-26 275 34 274-44v132H0Z"
    />
  </svg>
)
export default LayeredSpike
