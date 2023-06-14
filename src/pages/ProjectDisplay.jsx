import { useParams } from 'react-router-dom'
function ProjectDisplay () {
    const {id} = useParams();
    const project = ProjectList[id]

    return (
        <div>
            <h1>Project {id}</h1>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
           


        </div>
    )

}



export default ProjectDisplay