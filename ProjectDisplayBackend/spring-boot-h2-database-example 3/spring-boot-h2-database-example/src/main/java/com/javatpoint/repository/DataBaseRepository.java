package com.javatpoint.repository;

import com.javatpoint.model.Backend;
import com.javatpoint.model.Databasemodel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataBaseRepository extends CrudRepository<Databasemodel, Integer> {
    Databasemodel findByName(String infraTech);
}
