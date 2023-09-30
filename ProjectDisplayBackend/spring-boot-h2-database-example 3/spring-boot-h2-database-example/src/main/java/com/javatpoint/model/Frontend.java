package com.javatpoint.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;

@Entity
// defining class name as Table name
@Table(name="frontend")
@Data
public class Frontend {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="frontend_id")
    String id;

    @Column(name="name")
    @JsonProperty("name")
    String name;


}
