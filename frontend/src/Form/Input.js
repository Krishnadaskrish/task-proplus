import React ,{useState} from "react";
import styled from "styled-components";
import DropDown from "./DropDown";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Axios } from "../App";
import MainsideBar from "../components/MainsideBar";


const Input = () => {
  const navigate = useNavigate();



  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [duration , setDuration] = useState("");
  const [category ,Setcategory] = useState("");
  // const [chapters ,setchapters] = useState([]);




  // const handleImageChange = (e) => {
  //   // Update the state with the selected image file
  //   // setPhoto(e.target.files[0]);
  // };

  const handleSubmit = async (e) => {
    console.log('clicked')
    e.preventDefault();
  
    if (!title || !description || !duration || !category  ) {
      toast.error("Please fill in all fields.");
      return;
    }
  

    const formData = new FormData();
    formData.append("title",title );
    formData.append("description", description);
    formData.append("duration ", duration );
    formData.append("category ", category );
    console.log(formData)

    
   
    
    
   
    try {
      const jwtToken =  localStorage.getItem('jwt_token')
      console.log(jwtToken,'.....................................')
      
      
      const response = await Axios.post(
        "user/cources",
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,

            'Content-Type': 'multipart/form-data', 
            
          },
        }
        );
        
       
 
  
      
      if (response) {
        
        toast.success("succesfully added cource!");
        navigate("/");
      } else {
        toast.error("Failed to add .");
      }
    } catch (error) {
      console.error("Error uploading :", error);
    }


  };
  const handleCategoryChange = (event) => {
    Setcategory(event.target.value);
  };
  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };
 

  return (
    <>
    <div className='flex '>
    <MainsideBar/>
    <div className='flex justify-center ml-16 mt-32'>
    <StyledContactForm onSubmit={handleSubmit}>
      <form onSubmit={handleSubmit} >
        <label>Title</label>
        <input type="text" name="title" value={title}  onChange={(e) => setTitle(e.target.value)}/>
        <hr/>

<div className="flex space-x-2">
  <hr/>
  <div className="mb-3">
  <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type:</label>
  <select id="type" onChange={handleCategoryChange} className=" w-56 mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    <option value="" className="text-gray-500">Select</option>
    <option value="6 month">6 month</option>
    <option value="chair">1 year</option>
    <option value="sofa">1.5 year</option>
    
  </select>
</div>
<div className="mb-3">
  <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type:</label>
  <select id="type" onChange={handleDurationChange} className=" w-56 mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
    <option value="" className="text-gray-500">Select</option>
    <option value="table">Table</option>
    <option value="chair">Chair</option>
    <option value="sofa">Sofa</option>
    <option value="bed">Bed</option>
    <option value="wardrobe">Wardrobe</option>
  </select>
</div>


   </div>


        <label>Description</label>
        <textarea name="message" onChange={(e) => setDescription(e.target.value)}/>
         <input type="submit" value="Send"  />
        
      </form>
    </StyledContactForm>
    </div>
    
    </div>
    </>
  );
};

export default Input;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 500px;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      
      width: 500px;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgba(62, 34, 227, 0.8);
      color: white;
      border: none;
    }
  }
`;