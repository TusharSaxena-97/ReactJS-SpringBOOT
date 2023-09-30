package com.javatpoint.service;

import com.javatpoint.model.*;
import com.javatpoint.repository.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
// defining the business logic

@Service
public class ProjectService {
  @Autowired ProjectRepository projectRepository;

  @Autowired
  FrontEndRepository frontEndRepository;

  @Autowired
  BackendRepository backendRepository;

  @Autowired
  InfraRepository infraRepository;

  @Autowired
  DataBaseRepository dataBaseRepository;
  
  
  public void DeleteAll()
  {
	  projectRepository.deleteAll();
  }

  // getting all student records
  public Page<Project> getAllProject(int size,int no) {

    Pageable pageable=Pageable.ofSize(size).withPage(no);
    return projectRepository.findAll(pageable);

  }
  // getting a specific record
  public Project getProjectById(int id) {
    return projectRepository.findById(id).get();
  }

  public void saveOrUpdate(Project project) {
    projectRepository.save(project);
  }
  // deleting a specific record
  public void delete(int id) {
    projectRepository.deleteById(id);
  }

  public Project createProject(Project project) {

    return projectRepository.save(project);
  }

  public Page<Project> getAllProjectFilter(List<String> frontend, List<String> backend, List<String> database, List<String> infra, int no, int size) {


    List<Frontend> frontendList=new ArrayList<>();
    for(String frontendTech:frontend)
    {
      frontendList.add(frontEndRepository.findByName(frontendTech));
    }

    List<Backend> backendList=new ArrayList<>();
    for(String backendTech:backend)
    {
      backendList.add(backendRepository.findByName(backendTech));
    }

    List<Infra> infraList=new ArrayList<>();
    for(String infraTech:infra)
    {
      infraList.add(infraRepository.findByName(infraTech));
    }
    List<Databasemodel> dbList=new ArrayList<>();
    for(String databaseVal:database)
    {
      dbList.add(dataBaseRepository.findByName(databaseVal));
    }
    Pageable pageable=Pageable.ofSize(size).withPage(no);

    return projectRepository.findAllByBackendInAndFrontendInAndInfraInAndDatabasemodelIn(backendList,frontendList,infraList,dbList,pageable);
  }
}
