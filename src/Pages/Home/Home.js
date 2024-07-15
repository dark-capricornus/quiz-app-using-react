import React, { useState } from 'react'
import "./Home.css"
import { MenuItem, TextField , Button} from '@mui/material'
import Categories from '../../Data/Categories';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';

const Home = ({ name,setName,fetchQuestions }) => {
    
 const [category, setCategory]= useState("");
 const [difficulty,setDifficulty] = useState("");
 const [error,setError] = useState(false);
 const history = useNavigate();
 
 const handleSubmit = () =>{
        if(!category || !difficulty || !name){
            setError(true);
            return;
        } else {
            setError(false)
            fetchQuestions(category,difficulty)
            history('/quiz')
        }
}; 

  return (
    <div className="content">
     <div className="settings">
        <span style={{fontSize : 30}}>Quiz Settings</span>
    
        <div className = "settings_select">
            {error && <ErrorMessage>Please fill all the Fields</ErrorMessage>}
            <TextField 
            style = {{marginBottom:25}} 
            label='Enter Your Name' 
            variant ="outlined" 
            onChange ={(e) => setName(e.target.value)}
            />
            <TextField 
            select
            style = {{marginBottom:30}} 
            label='Select Category' 
            variant ="outlined" 
            onChange={(e) =>setCategory(e.target.value)}
            value ={category}
            >
                {Categories.map((cat) => (
                        
                        <MenuItem key ={cat.category} value = {cat.value}>
                        {cat.category}
                        </MenuItem>  

                ))}
            </TextField>
           <TextField
           select
           label ="Select Difficulty"
            variant="outlined"
            style={{marginBottom : 30}}
            onChange={(e) =>setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
                Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
                Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
                Hard
            </MenuItem>
           </TextField>
           <Button 
           variant="contained" 
           color="primary" 
           size="large"
           onClick={handleSubmit}>
            Start Quiz
           </Button>
            
        </div>

    </div>
    <img src ="/quiz.svg" className="banner" alt="quiz-img"></img>
    </div>
  )
};

export default Home
