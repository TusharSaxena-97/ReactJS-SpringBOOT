package com.javatpoint.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.ToString;

import javax.persistence.*;

@Entity
// defining class name as Table name
@Table(name="backend")
@ToString
@JsonAutoDetect(getterVisibility=JsonAutoDetect.Visibility.NONE)
public class Backend {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="backend_id")
    int id;

    @Column(name="name")
    @JsonProperty("name")
    String name;
}
