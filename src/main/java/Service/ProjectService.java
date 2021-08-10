package Service;

import Domain.Project;

import java.util.Collection;

public interface ProjectService {
    Collection<Project> findAll();

    Project findById(Long id);

    Project save(Project project);

    Project update(Project project);

    Project deleteById(Long id);
}
