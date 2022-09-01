package br.com.sonda.controllers;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.sonda.model.Aeronave;
import br.com.sonda.repository.AeronaveRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", exposedHeaders="Access-Control-Allow-Origin")
//@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
@RequestMapping("/api/aeronaves")
public class AeronaveController {

    @Autowired
    private AeronaveRepository aeronaveRepository;

    @GetMapping("/{id}")
    public ResponseEntity aeronave(@PathVariable("id") Long id) {

        Optional<Aeronave> aeronaveFind = this.aeronaveRepository.findById(id);

        if (aeronaveFind.isPresent()) {
            return new ResponseEntity(aeronaveFind.get(), HttpStatus.OK);
        }

        return null;
    }

    @GetMapping("/")
    public ResponseEntity aeronaveList() {

        Collection<Aeronave> aeronaves = this.aeronaveRepository.findAll();


        return new ResponseEntity(aeronaves, HttpStatus.OK);
    }

    @GetMapping("/decada")
    public List<Object> agruparDecada() {
        return this.aeronaveRepository.findCountAgruparDecada();
    }

    @GetMapping("/marca")
    public List<Object> agruparMarca() {
        return this.aeronaveRepository.findCountAgruparMarca();
    }

    @GetMapping("/vendido")
    public Object agruparVendido() {
        return this.aeronaveRepository.findCountVendido();
    }

    @PostMapping("")
    public ResponseEntity salvarAeronave(@RequestBody Aeronave aeronave) {

        aeronave.setCreadted(LocalDateTime.now());
        Aeronave persistir = this.aeronaveRepository.save(aeronave);

        return new ResponseEntity<>(persistir, HttpStatus.OK);

    }

    @PutMapping("/{id}")
    public ResponseEntity atualizarAeronave(@PathVariable("id") Long id, @RequestBody Aeronave aeronave) {

        Optional<Aeronave> aeronaveFind = this.aeronaveRepository.findById(id);

        if (aeronaveFind.isPresent()) {
            aeronave.setUpdated(LocalDateTime.now());
            return new ResponseEntity<>(aeronaveRepository.save(aeronave), HttpStatus.OK);
        }
        return new ResponseEntity<>("Não encontrado o ID da aeronave na base de dados", HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deletarAeronave(@PathVariable("id") Long id) {

        Optional<Aeronave> aeronaveFind = this.aeronaveRepository.findById(id);

        if (aeronaveFind.isPresent()) {
            aeronaveRepository.deleteById(id);
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>("Não encontrado o ID da aeronave na base de dados", HttpStatus.NOT_FOUND);
    }

}

