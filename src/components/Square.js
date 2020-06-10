import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Box = styled.div`
  height: 100%;
  width: 100%;
  border: 2px solid black;
  box-shadow: 2px 5px 11px 2px rgba(0, 0, 0, 0.25);
  background: ${p => (p.black ? '#1d1919' : '#fff')};
  color: ${p => (p.black ? 'white' : 'black')};
  display: grid;
  place-content: center;
`

export const Square = ({ black = false, children }) => (
  <Box black={black}>{children}</Box>
)

Square.propTypes = {
  /* whether this square is black */
  black: PropTypes.bool,
}
