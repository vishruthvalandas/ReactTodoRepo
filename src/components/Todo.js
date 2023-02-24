import React, { useState } from 'react'


function Todo() {
    const [defaultValue,setdefaultValue]=useState([]);
    const [value1,setValue]=useState("");

    const clickHandler=()=>{
        const object={
            id:new Date().getTime(),
            name:value1
        }
        setdefaultValue([...defaultValue,object]);
        // console.log(defaultValue);
    }
    const onchange=(event)=>{
        setValue(event.target.value);
    }

    const onclickHandler=(event)=>{
        // console.log(typeof(event.target.id));
        const newContactList=defaultValue.filter((defaultValue)=>{
            // console.log(typeof(defaultValue.id));
            return defaultValue.id!==+event.target.id;
          });
        //   console.log(newContactList);
          setdefaultValue(newContactList);
        // console.log(event.target.id)
    }

  return (
    <div className="app container">
        <div className="card text-center">
            <div className="card-body">
                {/*input box*/}
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={value1} onChange={onchange} placeholder="Enter the todo" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={clickHandler}>submit</button>
                    </div>
                </div>
                {/* list */}
                <ul className="list-group list-group-flush">
                    <div>   
                        {
                            defaultValue.map((element)=>{    
                                return(
                                    <li key={element.id} className="list-group-item" style={{textDecoration:'none'}}>
                                    <div  className="input-group mb-3 grid text-center">
                                    
                                        <div className="input-group mb-3 g-col-2">{element.name}</div>
                                        <div className="input-group-append g-col-2">
                                            <button className="btn btn-outline-secondary" id={element.id} onClick={onclickHandler} type="button">Delete</button>
                                        </div>
                                    </div>
                                    
                                </li> 
                                )
                            })
                        }     
                                {/* <button className="btn btn-outline-secondary" type="button">submit</button>*/}
                    </div>  
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Todo