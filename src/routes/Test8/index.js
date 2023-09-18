import Modal from './Modal';
import { cssForm } from './style';
import { useState } from 'react'

const Test8 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [value, setValue] = useState({
    name: '',
    age: '',
    address: ''
  })

  // ONLY ONE HANDLE METHOD ALLOWED
  const handleInput = (e) => {
    const { name, value: currentValue } = e.target
    setValue({
      ...value,
      [name]: currentValue
    })
  };

  const onSubmit = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const onReset = () => {
    setValue({
      name: '',
      age: '',
      address: ''
    })
    setIsModalOpen(false)
  }

  return (
    <div>
      <ul>
        <li>User can input the form - only 1 handle method is allowed</li>
        <li>When submit display the modal</li>
        <li>Show the form value inside the modal</li>
        <li>Reset the form and close the modal when user click the reset button</li>
      </ul>
      <form className={cssForm} onSubmit={onSubmit}>
        <input type="text" placeholder="name" name="name" onChange={handleInput} value={value.name} />
        <input type="text" placeholder="age" name="age" onChange={handleInput} value={value.age} />
        <textarea type="text" placeholder="address" name="address" onChange={handleInput} value={value.address} />
        <button>Submit</button>
      </form>
      {/* Only Show the modal when user clicked submit */}
      <Modal isModalOpen={isModalOpen} value={value} onReset={onReset} />
    </div>
  )
}

export default Test8;