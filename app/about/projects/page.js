import { Suspense } from "react";
import ProjectList from "./components/project-list";
import ProjectListLoading from "./components/project-list-loading";

const ProjectsPage = async () => {

  return (
    <div>
      <h1 className="mb-8 text-xl">Projects</h1>

      <div className="mb-8">Hello, This is the List of my repos!</div>

      <Suspense fallback={<ProjectListLoading />}>
        <ProjectList />
      </Suspense>

    </div>
  )
}

export default ProjectsPage;