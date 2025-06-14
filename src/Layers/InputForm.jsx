import React, {useState} from "react";

const InputForm = ({submitCallbackinputData}) => {
    const [inputData, setInputData] = useState("")
    const onChange = (e) => {
        setInputData(e.target.value)
    }
    const onSubmit = () => {
        if (inputData){
            submitCallbackinputData(inputData)
            setInputData("")
        }
    } 
    return (
        <div className='flex flex-row'>
        <input 
        className="text-justify px-4 py-2 flex-grow inline-block bg-gray-200"
        placeholder="Add Todo"
        value={inputData}
        onChange={onChange}
        />
        <button 
        className="px-4 py-2 bg-red-500 text-white rounded w-[2.5em]" 
        onClick={onSubmit}
        >+</button>
        </div>
    )
}

export default InputForm;