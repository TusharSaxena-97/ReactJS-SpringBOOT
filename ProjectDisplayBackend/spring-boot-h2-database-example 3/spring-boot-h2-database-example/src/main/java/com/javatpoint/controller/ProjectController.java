package com.javatpoint.controller;

import com.javatpoint.model.Backend;
import com.javatpoint.model.Frontend;
import com.javatpoint.model.Project;
import com.javatpoint.service.ProjectService;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;// creating RestController

@RestController
@CrossOrigin( origins = "*")
public class ProjectController {

  @Autowired ProjectService projectService;


  @GetMapping("/project/all")
  private Page<Project> getAllProject(@RequestParam(required = false,defaultValue = "0") int no, @RequestParam(required = false,defaultValue = "10") int size) {
	  System.out.println("Fetchin ALl the API data ");
	  return projectService.getAllProject(size,no);
   
  }

  @GetMapping("/project/{id}")
  private Project getProject(@PathVariable("id") int id) {
    return projectService.getProjectById(id);
  }

  @DeleteMapping("/project/{id}")
  private void deleteProject(@PathVariable("id") int id) {
    projectService.delete(id);
  }
  
  @DeleteMapping("/Deleteall")
  private void deleteall()
  {
	  projectService.DeleteAll();
  }

  @PostMapping("/project/create")
  private Project createProject(@RequestBody Project project) {
   // System.out.println(project);
    return projectService.createProject(project);
  }

  @GetMapping("/project/all/filter")
  private Page<Project> getAllProjectByFilter(@RequestParam(required = false) List<String> frontend, @RequestParam(required = false) List<String> backend, @RequestParam(required = false) List<String> database, @RequestParam(required = false) List<String> infra, @RequestParam(required = false,defaultValue = "0") int no, @RequestParam(required = false,defaultValue = "10") int size) {

    return projectService.getAllProjectFilter(frontend,backend,database,infra,no,size);
  }

}
