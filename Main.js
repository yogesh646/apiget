import React,{ useState,useEffect } from 'react'
import Data from './Data'
export default function Doll() {
  const [save, setsave] = useState(Data)
 

  useEffect(() => {
    {Object.keys(save[1]).map((a)=>console.log(a))
      
    }
    console.log("clicked");
  }, [])
  
  return (
    <div>  <div  style={{margin:"auto"}}>API List of Users</div>    
<div className='kissa' style={{display:"flex",marginLeft:"30px",width:"6000px"}}>
<div style={{fontSize:"16px"}}><b>S.no</b></div>
{Object.keys(save[0]).map((item)=>
{ return(
    <div  style={{display:"flex",marginLeft:"250px",fontSize:"18px"}}>
      {item}
      </div> 
)
})}




<div style={{display:"flex"}}>
</div>

</div>

<div style={{marginLeft:"40px",display:"fle"}}>
{ save.map((bata,index)=>{
  return(
 
           
           <tr key={index}>
           
         
           <th className='kiss1' style={{backgroundColor:"white"}}> {index+1}</th>
      
           <td className='kis' style={{marginLeft:"40px"}}><b style={{marginLeft:"250px"}}>  {bata.login}</b></td>
       <td className='kiss1' style={{marginLeft:"40px"}}><b style={{marginLeft:"210px"}}> {bata.id}     </b></td>
           <td className='kiss1'  style={{marginLeft:"40px"}}><b style={{marginLeft:"250px"}}>  {bata.node_id} </b></td>
           <td className='kiss1'><b style={{marginLeft:"110px"}}>  {bata.avatar_url} </b></td>
           <td className='kiss1'><b style={{marginLeft:"170px"}}>  {bata.gravatar_id}    </b></td>
           <td className='kiss1'><b style={{marginLeft:"300px"}}>  {bata.url}</b></td>
           <td className='kiss1'><b style={{marginLeft:"110px"}}>  {bata.html_url}</b></td>
           <td className='kiss1'><b style={{marginLeft:"110px"}}>  {bata.followers_url}</b></td>
       <td className='kiss1'><b style={{marginLeft:"70px"}}> {bata.following_url}     </b></td>
           <td className='kiss1'><b style={{marginLeft:"20px"}}>  {bata.gists_url} </b></td>
           <td className='kiss1'><b style={{marginLeft:"80px"}}>  {bata.starred_url}    </b></td>
           <td className='kiss1'><b style={{marginLeft:"70px"}}>  {bata.subscriptions_url}</b></td>
            <td className='kiss1'><b style={{marginLeft:"90px"}}>  {bata.organizations_url}</b></td>
           <td className='kiss1'><b style={{marginLeft:"140px"}}>  {bata.repos_url}</b></td>
           <td className='kiss1'><b style={{marginLeft:"80px"}}>  {bata.events_url}</b></td>
       <td className='kiss1'><b style={{marginLeft:"70px"}}> {bata.received_events_url}     </b></td>
           <td className='kiss1'><b style={{marginLeft:"150px"}}>  {bata.type} </b></td>
       
           <td className='kiss1'><b>  {bata.site_admin}</b></td>
        
        
           </tr>
             
  )
})} 
</div>


    </div>
  )
}


