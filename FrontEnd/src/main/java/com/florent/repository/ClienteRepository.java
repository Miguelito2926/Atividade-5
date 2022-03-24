package com.florent.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.florent.model.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente,Long> {


	
}

