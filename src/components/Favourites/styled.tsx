import styled from 'styled-components'

const FavouritesList = styled.div`
  display: flex;
  height: 140px;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 16px 0;

  > div {
    flex: 0 0 auto;
  }

  img {
    height: 140px;
  }
`

export { FavouritesList }
