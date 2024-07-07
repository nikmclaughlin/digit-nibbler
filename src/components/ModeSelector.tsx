import { Select } from 'nes-ui-react'
import { FormEventHandler } from 'react'

export default function ModeSelector(
  cb: FormEventHandler<HTMLSelectElement> | undefined
) {
  return (
    <Select id="gameMode" singleSelect label="Game Mode: " onChange={cb}>
      <option value="prime">Primes</option>
      <option value="multiple">Multiples</option>
      <option value="factor">Factors</option>
      <option value="challenge">Challenge</option>
    </Select>
  )
}
