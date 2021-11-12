import './noteList.css';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { flexbox } from '@mui/system';

const cardStyle = {marginLeft:40,marginTop:30};
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
                                            <Card sx={{ width: 300 }} style={cardStyle}>
                                                <CardContent>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                        {currElement.date}
                                                    </Typography>
                                                    <Typography variant="h5" component="div">
                                                        {currElement.title}
                                                    </Typography>
                                                    <Typography variant="body2">
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