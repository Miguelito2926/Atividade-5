package com.florent.model;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Localidades implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id_destino;
	private String  origem;
	private String destino;
	private String data;
	private double preco;


	public Localidades() {
		super();
	}


	public Localidades(Long id_destino, String origem, String destino, String data, double preco) {
		super();
		Id_destino = id_destino;
		this.origem = origem;
		this.destino = destino;
		this.data = data;
		this.preco = preco;
	}


	public Long getId_destino() {
		return Id_destino;
	}


	public void setId_destino(Long id_destino) {
		Id_destino = id_destino;
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
		return Objects.hash(Id_destino);
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
		return Objects.equals(Id_destino, other.Id_destino);
	}

	
}
