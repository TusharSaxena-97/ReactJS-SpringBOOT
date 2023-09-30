package com.javatpoint.repository;

import com.javatpoint.model.Backend;
import com.javatpoint.model.Infra;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InfraRepository extends CrudRepository<Infra, Integer> {
    Infra findByName(String frontendTech);
}
