package com.florent.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.florent.model.Localidades;
import com.florent.repository.LocalidadesRepository;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping (value = "/localidades")
public class LocalidadesController {
	
	@Autowired
	private LocalidadesRepository localidadesrepository;
	
	@GetMapping  // GET
	public ResponseEntity<List<Localidades>>findAll(){
		List<Localidades> localidades = localidadesrepository.findAll();
		
		return ResponseEntity.ok().body(localidades);
	}
	
	@GetMapping(value = "/{id}") //Get Por id
	public ResponseEntity<Localidades>  findById(@PathVariable Long id){
		
	Localidades localidades = localidadesrepository.findById(id).get();
	return ResponseEntity.ok().body(localidades);
		
	}
	
	//Create
	@PostMapping
	public Localidades createEmployee(@RequestBody Localidades localidades) {
		return localidadesrepository.save(localidades);
	}
	
	//UPDATE
	@PutMapping("{id}")
	public ResponseEntity <Localidades> update(@PathVariable long id,@RequestBody Localidades localidadesDetails){
		Localidades updateLocalidades = localidadesrepository.findById(id).get();
		
		updateLocalidades.setOrigem(localidadesDetails.getOrigem());
		updateLocalidades.setDestino(localidadesDetails.getDestino());
		updateLocalidades.setData(localidadesDetails.getData());
		updateLocalidades.setPreco(localidadesDetails.getPreco());
		
		localidadesrepository.save(updateLocalidades);
		
		return ResponseEntity.ok(updateLocalidades);
		
	}
	
	//DELETE
	@DeleteMapping ("{id}")
	public ResponseEntity<HttpStatus> delete (@PathVariable long id){
		Localidades employee = localidadesrepository.findById(id).get();
		localidadesrepository.delete(employee);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	


}
