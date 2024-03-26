import { useState, useEffect, React } from 'react'

function ListProjects(props: any) {
	const [userProjects, setUserProjects] = useState([]);
	useEffect(() => {
			fetch("http://localhost:3000/projects").then((response) => {
				return response.json()
			}).then(response => setUserProjects(response)).catch(error => console.log(error))
		}, [])

		console.log(userProjects)

  return (
    <>
       <table border="2">
				<tr>
					<th>Id</th>
					<th>Progress</th>
					<th>Role</th>
					<th>Badges</th>
					<th>Project Name</th>
					<th>Project Image</th>
				</tr>
				{
					userProjects.map((userProject:any) => (
						<tr style={{margin: "50px"}}>
							<td>{userProject.id}</td>
							<td>{userProject.progress}</td>
							<td>{userProject.role.name}</td>
							<td>{userProject.badges.map((badge:any) => (badge.name+", "))}</td>
							<td>{userProject.project.name}</td>
							<td><img src={userProject.project.image} height="100" width="100"></img></td>
						</tr>
					))
				}
			 </table>
    </>
  )
}

export default ListProjects