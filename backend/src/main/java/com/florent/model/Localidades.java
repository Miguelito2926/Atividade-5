package com.florent.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
public class Localidades implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String  origem;
	private String destino;
	private String data;
	private double preco;
	
	@JsonIgnore
	@OneToMany(mappedBy = "localidades")
	private List<Promocao> promocoes = new ArrayList<Promocao>();
	

	public Localidades() {
		super();
	}


	public Localidades(Long id, String origem, String destino, String data, double preco) {
		super();
		this.id = id;
		this.origem = origem;
		this.destino = destino;
		this.data = data;
		this.preco = preco;
		
	}
	

	public List<Promocao> getPromocoes() {
		return promocoes;
	}


	public void setPromocoes(List<Promocao> promocoes) {
		this.promocoes = promocoes;
	}


	public Long getId() {
		return id;
	}


	public void setId_destino(Long id) {
		this.id = id;
	}


	public String getOrigem() {
		return origem;
	}


	public void setOrigem(String origem) {
		this.origem = origem;
	}


	public String getDestino() {
		return destino;
	}


	public void setDestino(String destino) {
		this.destino = destino;
	}


	public String getData() {
		return data;
	}


	public void setData(String data) {
		this.data = data;
	}


	public double getPreco() {
		return preco;
	}


	public void setPreco(double preco) {
		this.preco = preco;
	}


	@Override
	public int hashCode() {
		return Objects.hash(id);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Localidades other = (Localidades) obj;
		return Objects.equals(id, other.id);
	}

	
}
