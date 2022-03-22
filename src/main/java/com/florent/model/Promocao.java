package com.florent.model;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.ManyToOne;




@Entity
public class Promocao implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy  = GenerationType.IDENTITY)
	private Long id;
	private String promocao;
	
	
	
	@ManyToOne
	@JoinColumn(name = "cliente_id")
	private Cliente cliente; // referencia da chave "estrangeira"
	

	@ManyToOne
	@JoinColumn(name = "localidades_id")
	private Localidades localidades; // referencia da chave "estrangeira"
	
	
	
	public Promocao() {
		super();
		
		
	}

	public Promocao(Long id, String promocao, Cliente cliente, Localidades localidades) {
		super();
		this.id = id;
		this.promocao = promocao;
		this.cliente = cliente;
		this.localidades= localidades;
		
	}	
	
	

	public Localidades getLocalidades() {
		return localidades;
	}

	public void setLocalidades(Localidades localidades) {
		this.localidades = localidades;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPromocao() {
		return promocao;
	}

	public void setPromocao(String promocao) {
		this.promocao = promocao;
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
		Promocao other = (Promocao) obj;
		return Objects.equals(id, other.id);
	}
	
	

}
