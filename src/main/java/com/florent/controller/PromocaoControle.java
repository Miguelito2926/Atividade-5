package com.florent.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.florent.model.Promocao;
import com.florent.repository.PromocaoRepository;

@CrossOrigin(origins =  "*")
@Controller
@RequestMapping(value = "/promocao")
public class PromocaoControle {

	@Autowired
	private PromocaoRepository promocaorepository;
	
	@GetMapping  // GET
	public ResponseEntity<List<Promocao>>findAll(){
		List<Promocao> promocao = promocaorepository.findAll();
		
		return ResponseEntity.ok().body(promocao);
	}
	
	@GetMapping(value = "/{id}") //Get Por id
	public ResponseEntity<Promocao>  findById(@PathVariable Long id){
		
	Promocao promocao = promocaorepository.findById(id).get();
	return ResponseEntity.ok().body(promocao);
		
	}
	
	//Create
	@PostMapping
	public Promocao createEmployee(@RequestBody Promocao promocao) {
		return promocaorepository.save(promocao);
	}
	
	//UPDATE
	@PutMapping("{id}")
	public ResponseEntity <Promocao> update(@PathVariable long id,@RequestBody Promocao promocaoDetails){
		Promocao updatePromocao = promocaorepository.findById(id).get();
		
		updatePromocao.setPromocao(promocaoDetails.getPromocao());
		
		
		promocaorepository.save(updatePromocao);
		
		return ResponseEntity.ok(updatePromocao);
		
	}
	
	//DELETE
	@DeleteMapping ("{id}")
	public ResponseEntity<HttpStatus> delete (@PathVariable long id){
		Promocao employee = promocaorepository.findById(id).get();
		promocaorepository.delete(employee);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	
}
