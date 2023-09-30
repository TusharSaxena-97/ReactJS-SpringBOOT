package com.javatpoint.dto;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.javatpoint.model.Backend;
import com.javatpoint.model.Databasemodel;
import com.javatpoint.model.Databasemodel;
import com.javatpoint.model.Frontend;
import com.javatpoint.model.Infra;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(value = {"target", "source"})
public class ProjectDTO {

    public String title;

    public String availablity;
    // defining age as column name
    @JsonProperty("backend")
    public List<Backend> backend;

    @JsonProperty("frontend")
    public List<Frontend> frontend;

    public List<Databasemodel> database;

    public List<Infra> infra;
    // mark id as primary key

}
