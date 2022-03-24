package com.florent.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.florent.model.Promocao;

@Repository
public interface PromocaoRepository extends JpaRepository<Promocao, Long> {

}
