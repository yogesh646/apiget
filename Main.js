import React, { useEffect, useState } from 'react'

 function Main() {
const [saves,setSaves]=useState([]);
const [fetcherror,setFetchError]=useState(null)


useEffect (()=>{
  fetch("https://api.github.com/users").then((result)=>{
    result.json().then((resp)=>
    {
      console.log("result",resp);
      setSaves(resp);
    })
    }
    )
},[])
  return (
    <div>Main
GET API

<div className='tablo'>
    <table >
<thead  className='kiss'>
    <tr  className='kiss'>
        <th className='kiss' style={{marginLeft:"40px"}} >S.no</th>
        <th className='kiss'>Login</th>
        
        <th    className='kiss'> _Id_ </th>
        <th className='kiss'> Node_Id </th>
        <th className='kiss'>avatar_url</th>
        <th className='kiss'>Gravatar_Id</th>
        <th className='kiss'>Url
    </th>

        <th className='kiss'>Html_Url</th>
        
        <th    className='kiss'>Follower_Url</th>
        <th className='kiss'>Following_Url</th>
        <th className='kiss'>Gists_Url</th>
        <th className='kiss'>starred_url</th>
        <th className='kiss'>Subscriptions_url</th>

        <th className='kiss'>Org</th>
        
        <th    className='kiss'>Repos_url</th>
        <th className='kiss'>Events_url</th>
        <th className='kiss'>Recieved_events_url</th>
        <th className='kiss'>Type</th>
        <th className='kiss'>Site_admin</th>
    </tr>
</thead>
<tbody>

{
        saves.map((bata,index)=>{
// TotalPrice+=bata.Price*1;
    return (
        <tr key={index}>
           
         
            <th className='kiss1' style={{backgroundColor:"white"}}> {index+1}</th>
       
            <td className='kiss1'><b>  {bata.login}</b></td>
        <td className='kiss1'><b> {bata.id}     </b></td>
            <td className='kiss1'><b>  {bata.node_id} </b></td>
            <td className='kiss1'><b>  {bata.avatar_url} </b></td>
            <td className='kiss1'><b>  {bata.gravatar_id}    </b></td>
            <td className='kiss1'><b>  {bata.url}</b></td>
            <td className='kiss1'><b>  {bata.html_url}</b></td>
            <td className='kiss1'><b>  {bata.followers_url}</b></td>
        <td className='kiss1'><b> {bata.following_url}     </b></td>
            <td className='kiss1'><b>  {bata.gists_url} </b></td>
            <td className='kiss1'><b>  {bata.starred_url}    </b></td>
            <td className='kiss1'><b>  {bata.subscriptions_url}</b></td>
             <td className='kiss1'><b>  {bata.organizations_url}</b></td>
            <td className='kiss1'><b>  {bata.repos_url}</b></td>
            <td className='kiss1'><b>  {bata.events_url}</b></td>
        <td className='kiss1'><b> {bata.received_events_url}     </b></td>
            <td className='kiss1'><b>  {bata.type} </b></td>
            {/* <td className='kiss1'><b>  {bata.type}    </b></td> */}
            <td className='kiss1'><b>  {bata.site_admin}</b></td>
            {/* <td><b>  {bata.html_url}</b></td> */}
         
            </tr>
        )
        }
        )
        }
        
</tbody>
</table>
{/* <div  className='totals'style={{marginLeft:"118px"}}>
    <h>{<b>Total: 
        <h  style={{ backgroundColor:"yellow" ,color:"black", marginLeft:"32px",height:"10px"}} >
             {TotalPrice}</h> </b>}</h></div> */}
</div>
    </div>
  )
}
export default Main;
