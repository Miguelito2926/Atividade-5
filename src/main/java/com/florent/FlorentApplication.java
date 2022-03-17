package com.florent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.florent.model.Cliente;
import com.florent.model.Localidades;
import com.florent.repository.ClienteRepository;
import com.florent.repository.LocalidadesRepository;

@SpringBootApplication
public class FlorentApplication implements CommandLineRunner {
	
	@Autowired
	private LocalidadesRepository localidadesrepository;
	
	@Autowired
	private ClienteRepository clientesrepository;

	public static void main(String[] args) {
		SpringApplication.run(FlorentApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		/*Localidades local1 = new Localidades (null, "Rio de janeiro", "São Paulo","23-12-2025",150);
		Localidades local2 = new Localidades (null, "São Paulo", "Recife","23-12-2025",150);
		localidadesrepository.save(local1);
		localidadesrepository.save(local2);
		
		Cliente cli6 = new Cliente (null,"Ednado","juniorprol@hotmail.com", "11144455595");
		Cliente cli2 = new Cliente (null,"Ed","juniorprol@", "1114433335");
		
		clientesrepository.save(cli6);
		clientesrepository.save(cli2);
		*/
		
		
	}
	

}
