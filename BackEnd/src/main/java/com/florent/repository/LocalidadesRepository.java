package com.florent.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.florent.model.Localidades;

@Repository
public interface LocalidadesRepository extends JpaRepository <Localidades, Long>{

}
