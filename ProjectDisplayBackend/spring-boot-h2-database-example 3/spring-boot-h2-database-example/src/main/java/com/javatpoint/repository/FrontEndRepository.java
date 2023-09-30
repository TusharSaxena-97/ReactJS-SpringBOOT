package com.javatpoint.repository;

import com.javatpoint.model.Backend;
import com.javatpoint.model.Frontend;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FrontEndRepository extends CrudRepository<Frontend, Integer> {
    Frontend findByName(String frontendTech);
}
