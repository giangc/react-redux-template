import styled, { css } from 'styled-components'


const hover = css`border: 2px solid rgba(112, 76, 182, 0.4);`

const active = css`background-color: rgba(112, 76, 182, 0.2);`

const CounterButton = styled.button`
  appearance: none;
  background: none;
  font-size: 32px;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  border: 2px solid transparent;
  color: rgb(112, 76, 182);
  padding-bottom: 4px;
  cursor: pointer;
  background-color: rgba(112, 76, 182, 0.1);
  border-radius: 2px;
  transition: all 0.15s;
  
  &:hover, &:focus { ${hover} }
  &:active { ${active} }
`

export default CounterButton

