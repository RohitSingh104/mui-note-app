import './noteList.css';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const cardStyle = {marginLeft:80,marginTop:50,borderWidth:1};
const descStyle = {marginTop:20};
const NoteList = () => {
    const state = useSelector((state) => state.addNoteReducer.list);
    return (

        <>
            <div className="wrapper">
                <div className="noteList">
                    {
                            state.map((currElement, index) => {
                                return (
                                    
                                        <div className="card">
                                            <Card sx={{ width: 300 , height:300}} style={cardStyle}>
                                                <CardContent>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                        {currElement.date}
                                                    </Typography>
                                                    <Typography variant="h5" component="div">
                                                        <span>
                                                            <FiberManualRecordIcon style={{fontSize:15,color:"skyblue"}}/>
                                                        </span>
                                                        <span id="title">
                                                            {currElement.title}
                                                        </span>
                                                        
                                                    </Typography>
                                                    <Typography variant="body2" style={descStyle}>
                                                        {currElement.desc}
                                                    </Typography>
                                                </CardContent>
                                            
                                                    
                                            </Card>


                                        </div>
                                
                                
                                )
                            })
                        }
                </div>
            </div>
            
              
           
        </>
    )
}







export default NoteList;