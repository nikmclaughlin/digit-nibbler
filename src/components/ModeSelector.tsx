import { Select } from 'nes-ui-react'

export default function ModeSelector(cb) {
  return (
    <Select
      id="gameMode"
      singleSelect
      multiple
      label="Game Mode: "
      onChange={cb}
    >
      <option value="prime">Primes</option>
      <option value="multiple">Multiples</option>
      <option value="factor">Factors</option>
      <option value="challenge">Challenge</option>
    </Select>
  )
}
