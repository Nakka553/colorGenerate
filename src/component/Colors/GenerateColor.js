import React, { useState, useEffect } from 'react';

const RandomColors = () => {

    const [colorsData, setColorsData] = useState([])
    const [color, setColor] = useState(
        {
            c1: "#000000",
            c2: "#000000",
            c3: "#000000"
        }
    )
    const changeColor = () => {
        setColor(
            {
                c1: "#" + Math.random().toString(16).substr(-6),
                c2: "#" + Math.random().toString(16).substr(-6),
                c3: "#" + Math.random().toString(16).substr(-6)
            }
        )
    }
    const saveColors = () => {
        console.log('colors', color);
        let test = [...colorsData]
        test.push({
            color1: color.c1,
            color2: color.c2,
            color3: color.c3
        });
        setColorsData(test)
        console.log('test', test);
    }
    return (
        <div>
            
            <div className='container mt-5'>
                <div className='d-flex justify-content-center'>
                    <button className='mx-5 bg-primary text-white border-white' onClick={changeColor}>Change</button>
                    <button className='mx-5 bg-danger text-white border-white' onClick={saveColors}>Save</button>
                    <button className='mx-5 bg-warning text-white border-white' >View Saved List</button>
                </div>

            
                <div className='row'>
                    <div className='col-md-4 mt-5'>
                        <div className="card" style={{ height: "200px" }}>
                            <div className="card-body" style={{ backgroundColor: color.c1 }}>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mt-5'>
                        <div className="card" style={{ height: "200px" }}>
                            <div className="card-body" style={{ backgroundColor: color.c2 }}>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mt-5'>
                        <div className="card" style={{ height: "200px" }}>
                            <div className="card-body" style={{ backgroundColor: color.c3 }}>
                            </div>
                        </div>
                    </div>
                </div>
                
                {colorsData.length>0 &&
                <div className='row'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">C1</th>
                                <th scope="col">C2</th>
                                <th scope="col">C3</th>
                            </tr>
                        </thead>
                        <tbody>

                            {colorsData && colorsData.map((x,index)=>{

                            return <tr>
                                <th scope="row">{index+1}</th>
                                <td>{x.color1}</td>
                                <td>{x.color2}</td>
                                <td>{x.color3}</td>
                            </tr>
                          })}
                        </tbody>
                    </table>
                </div>
                }

            
            </div>



        </div>
    );

}
export default RandomColors;