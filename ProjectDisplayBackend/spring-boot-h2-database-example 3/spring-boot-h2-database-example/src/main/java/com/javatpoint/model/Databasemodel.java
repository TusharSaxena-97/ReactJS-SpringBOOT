package com.javatpoint.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
// defining class name as Table name
@Table(name="database")
public class Databasemodel {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="database_id")
    String id;

    @Column(name="name")
    @JsonProperty("name")
    String name;



}
