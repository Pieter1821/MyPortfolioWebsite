import { useNavigate } from "react-router-dom";

const ProjectItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="project-item" onClick={() => navigate(`/projects/${item.id}`)}>
      <h4>{item.name}</h4>
    </div>
  );
};

export default ProjectItem;
