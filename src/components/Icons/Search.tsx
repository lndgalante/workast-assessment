import React from 'react'

const Search = (props: any) => (
  <svg width={30} height={30} {...props}>
    <title>{'search'}</title>
    <defs>
      <path
        d="M11.548 20.41l-7.3 7.79a1.5 1.5 0 0 1-2.19-2.05l7.348-7.842a11.066 11.066 0 0 1-2.308-6.79c0-6.069 4.841-11 10.827-11s10.828 4.931 10.828 11c0 6.07-4.842 11-10.828 11-2.385 0-4.589-.783-6.377-2.109zm6.377-.892c4.317 0 7.828-3.575 7.828-8 0-4.424-3.511-8-7.828-8-4.316 0-7.827 3.576-7.827 8 0 4.425 3.51 8 7.827 8z"
        id="prefix__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="prefix__b" fill="#fff">
        <use xlinkHref="#prefix__a" />
      </mask>
      <use fill="#FFF" fillRule="nonzero" xlinkHref="#prefix__a" />
    </g>
  </svg>
)

export default Search
