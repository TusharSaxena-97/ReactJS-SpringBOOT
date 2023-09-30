package com.javatpoint.repository;
import com.javatpoint.model.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Integer>
{

    List<Project> findAllByBackendIn(List<String> backend);

    List<Project> findAllByBackendInAndFrontendInAndInfraIn(List<Backend> backend, List<Frontend> frontend, List<Infra> infra);

    Page<Project> findAllByBackendInAndFrontendInAndInfraInAndDatabasemodelIn(List<Backend> backendList, List<Frontend> frontendList, List<Infra> infraList, List<Databasemodel> dbList, Pageable pageable);

    Page<Project> findAll(Pageable pageable);
}
