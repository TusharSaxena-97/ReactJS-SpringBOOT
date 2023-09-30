package com.javatpoint.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
// defining class name as Table name
@Table(name="infra")
public class Infra {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="infra_id")
    String id;

    @Column(name="name")
    @JsonProperty("name")
    String name;


}
