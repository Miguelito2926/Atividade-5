package com.florent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.florent.model.Cliente;
import com.florent.model.Localidades;
import com.florent.model.Promocao;
import com.florent.repository.ClienteRepository;
import com.florent.repository.LocalidadesRepository;
import com.florent.repository.PromocaoRepository;

@SpringBootApplication
public class FlorentApplication implements CommandLineRunner {
	
	@Autowired
	private LocalidadesRepository localidadesrepository;
	
	@Autowired
	private ClienteRepository clientesrepository;
	
	@Autowired
	private PromocaoRepository promocaorepository;

	public static void main(String[] args) {
		SpringApplication.run(FlorentApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		/*Localidades local1 = new Localidades (null, "Rio de janeiro", "São Paulo","23-12-2025",150);
	
		localidadesrepository.save(local1);
		
		
		Cliente cli6 = new Cliente (null,"Ednado","juniorprol@hotmail.com", "11144455595");
		Cliente cli2 = new Cliente (null,"Ed","juniorprol@", "1114433335");
		
		clientesrepository.save(cli6);
		clientesrepository.save(cli2);
		
		Promocao pro1 = new Promocao (null,"Londres", cli2, local1);
		promocaorepository.save(pro1);
		*/
		
	}
	

}
