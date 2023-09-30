package com.javatpoint.model;


import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.List;
import javax.persistence.*;

// mark class as an Entity
@Entity
// defining class name as Table name
@Table(name="project")
@ToString
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonAutoDetect(getterVisibility=JsonAutoDetect.Visibility.NONE)
@JsonIgnoreProperties(value = {"target", "source"})
@Builder
public class Project {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column(name="project_id")
  public int id;

  @Column(name="title")
  public String title;

  @Column(name="availablity")
  public String availablity;

  @OneToMany(cascade = CascadeType.ALL)
  @JsonProperty("backend")
  public List<Backend> backend;

  @OneToMany(cascade = CascadeType.ALL)
  @JsonProperty("frontEnd")
  public List<Frontend> frontend;

  @OneToMany(cascade = CascadeType.ALL)
  @JsonProperty("databasemodel")
  public List<Databasemodel> databasemodel;

  @OneToMany(cascade = CascadeType.ALL)
  @JsonProperty("infra")
  public List<Infra> infra;

}
