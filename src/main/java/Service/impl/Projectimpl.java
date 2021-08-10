package Service.impl;

import Domain.Project;
import Service.ProjectService;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Service
public class Projectimpl implements ProjectService {
    private Long projectId=100L;
    public Map<Long,Project> projectMap=new HashMap<>();

    {
        Project project=new Project();
        project.setId(projectId);
        project.setTitle("projectTitle");
        project.setCost(700.00);
        project.setLocation("Accra");
        project.setProjectNum(18000000000L);
        project.setProjectMan("Kwame Afi");
        projectMap.put(project.getId(),project);

    }

    @Override
    public Collection<Project> findAll() {
        return projectMap.values();
    }

    @Override
    public Project findById(Long id) {
        return projectMap.get(id);
    }

    @Override
    public Project save(Project project) {
        Long newProjectId= ++projectId;
        project.setId(newProjectId);
        projectMap.put(project.getId(),project);
        return projectMap.get(newProjectId);
    }

    @Override
    public Project update(Project project) {
        projectId=project.getId();
        if (projectMap.get(projectId)!=null){
            projectMap.put(projectId,project);
            return projectMap.get(projectId);
        }
        return null;
    }

    @Override
    public Project deleteById(Long id) {
        if (projectMap.get(id)!=null){
            return projectMap.remove(id);
        }
        return null;
    }
}
