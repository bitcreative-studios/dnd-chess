import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { Square } from './Square'
import { Knight } from './Knight'

const BoardWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 80px);
  grid-template-rows: repeat(8, 80px);
`

const renderSquare = (i, [knightX, knightY]) => {
  const x = i % 8
  const y = Math.floor(i / 8)
  const black = (x + y) % 2 === 1
  const isKnightHere = knightX === x && knightY === y
  const piece = isKnightHere ? <Knight /> : null

  return (
    <Square black={black} key={i}>
      {piece}
    </Square>
  )
}

export const Board = ({ knightPosition }) => {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }
  return <BoardWrapper>{squares}</BoardWrapper>
}

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(PropTypes.number),
}
