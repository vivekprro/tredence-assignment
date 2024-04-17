import React from 'react'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField: React.FC<Props> = ({todo, setTodo}: Props) => {
  return (
    <form action="">
        <input type="text" />
        <button type='submit'></button>
    </form>
  )
}

export default InputField