import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function QuestionListItem(props) {
    return (
        <div className="card" style={{paddingTop:'0px'}}>
            <div className="card-header" style={{backgroundColor:"rgb(0, 226, 255)",padding:'5px'}}>
            <span>
            {props.question.author.image_url ? <img style={{height:'40px',width:'40px'}} className='rounded-circle'  alt='' src={props.question.author.image_url} /> : '' }  
            </span>
            <span><strong style={{color:'white',paddingLeft:'20px'}}>{props.question.author.name}</strong></span>
            </div>
            <div className="card-body">
            <h5 className="card-title"><Link to={`/question/${props.question._id}`} >
             {props.question.body}
             </Link></h5>
            </div>
            <div className="card-footer">
             {props.isAuth ? 
              <div>
               <button style={{marginRight:'3px',minWidth:'70px'}} onClick={() => props.onRatingChange({id:props.question._id,type:'up'})} type="button" className="btn btn-success btn-sm">
             <FontAwesomeIcon icon={faAngleUp} size="1x" color="white" style={{float:'left',marginTop:'4px'}}/>  
             {props.question.upvotes}    
             </button>
             <button style={{minWidth:'70px'}} onClick={() => props.onRatingChange({id:props.question._id,type:'down'}) } type="button" className="btn btn-danger btn-sm">
             <FontAwesomeIcon icon={faAngleDown} size="1x" color="white" style={{float:'left',marginTop:'4px'}}/>              
             <span style={{marginLeft:'2px'}}>
             {props.question.downvotes} 
             </span> </button>  
              </div>
             
              :
             <div>
             <button style={{marginRight:'3px',minWidth:'70px'}} disabled type="button" className="btn btn-success btn-sm">
             <FontAwesomeIcon icon={faAngleUp} size="1x" color="white" style={{float:'left',marginTop:'4px'}}/>  
             {props.question.upvotes}    
             </button>
             <button style={{minWidth:'70px'}} disabled type="button" className="btn btn-danger btn-sm">
             <FontAwesomeIcon icon={faAngleDown} size="1x" color="white" style={{float:'left',marginTop:'4px'}}/>              
             <span style={{marginLeft:'2px'}}>
             {props.question.downvotes} 
             </span> </button>  
             </div>          
              }
             </div>
        </div>
    );
}

QuestionListItem.propTypes = {
    question: PropTypes.shape({
        body: PropTypes.string,
        upvotes: PropTypes.number,
        downvotes: PropTypes.number,
    }).isRequired,
};

export default QuestionListItem;