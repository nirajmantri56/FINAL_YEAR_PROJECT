import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
export default function Table() {
    const [project,setProject] = useState([]);
    const getProjects = async ()=>{
        try {
            const response = await axios.get(`http://localhost:8080/uploaded/all`);
            console.log('res',response)
            const data = await response.data
            setProject(data);
            console.log('DATA',data)
          
        } catch (error) {
            console.log('error',error)
        }
    }
    useEffect(()=>{
        getProjects()
    },[])
    const projectDetails = async (problemStat)=>{
      try {
        const response =await axios.get(`http://localhost:8080/uploaded/${problemStat}`)
        const data = await response.data;
        console.log('data', data)
      } catch (error) {
        console.log('error', error)
      }
    }
    
    return(
        <div className="table-container">
            <table id="example" class="table table-striped" style={{width:'100%'}}>
                <thead>
                    <tr>
                        <th className="sr">SrNo</th>
                        <th className="probSt">Problem statement</th>
                        <th className="category">Category</th>
                        <th className="domain">Domain</th>
                        <th className="det">Deatils</th>
                    </tr>
                </thead>
                <tbody>
          {project.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <p>{item.projectStatement}</p>
              </td>
              <td>{item.category}</td>
              <td>{item.domain}</td>
              <td onClick={()=>projectDetails(item.projectStatement)}>show</td>
            </tr>
          ))}
        </tbody>
            </table>
        </div>
    )
}