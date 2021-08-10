package resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import Domain.Project;
import Service.ProjectService;
import org.springframework.http.MediaType;

import java.util.Collection;

@RestController
@RequestMapping("api/v1/project")
@CrossOrigin(origins = "http://localhost:3000/")
public class ProjectResource {
    @Autowired
    private ProjectService projectService;

    @GetMapping
    public Collection<Project> findAll(){
        return projectService.findAll();
    }

    @GetMapping("{id}")
    public Project findById(@PathVariable Long id){
        return projectService.findById(id);
    }

    @PostMapping
    public Project save(@RequestBody Project project){
        return projectService.save(project);
    }

    @PutMapping
    public Project update(@RequestBody Project project){
        return projectService.update(project);
    }

    @DeleteMapping("{id}")
    public Project deleteById(@PathVariable Long id){
        return projectService.deleteById(id);
    }
}
