package com.javatpoint.repository;

import com.javatpoint.model.Backend;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BackendRepository extends CrudRepository<Backend, Integer> {
    Backend findByName(String frontendTech);
}
