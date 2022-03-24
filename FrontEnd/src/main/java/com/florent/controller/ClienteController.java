package com.florent.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.florent.model.Cliente;

import com.florent.repository.ClienteRepository;
@CrossOrigin(origins = "*")
@Repository
@RequestMapping (value = "/cliente")
public class ClienteController {
	
	@Autowired
	private ClienteRepository clientesrepository;
	
	@GetMapping
	public ResponseEntity<List<Cliente>>findAll(){
		List<Cliente> clientes = clientesrepository.findAll();
		return ResponseEntity.ok().body(clientes);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Cliente> findById(@PathVariable Long id){
		Cliente clientes = clientesrepository.findById(id).get();
		return ResponseEntity.ok().body(clientes);
	}
	

	//Create
	@PostMapping
	public Cliente createEmployee(@RequestBody Cliente clientes) {
		return clientesrepository.save(clientes);
	}
	
	//UPDATE
	@PutMapping("{id}")
	public ResponseEntity <Cliente> update(@PathVariable long id,@RequestBody Cliente clientesDetails){
		Cliente updateCliente = clientesrepository.findById(id).get();
		
		updateCliente.setNome(clientesDetails.getNome());
		updateCliente.setEmail(clientesDetails.getEmail());
		updateCliente.setCpf(clientesDetails.getCpf());
		
		clientesrepository.save(updateCliente);
		
		return ResponseEntity.ok(updateCliente);
		
	}
	
	//DELETE
	@DeleteMapping ("{id}")
	public ResponseEntity<HttpStatus> delete (@PathVariable long id){
		Cliente employee = clientesrepository.findById(id).get();
		clientesrepository.delete(employee);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	

}
