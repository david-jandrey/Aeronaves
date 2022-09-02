package br.com.sonda.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "aeronaves")
public class Aeronave {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    @Column(name = "NOME", nullable = false, length = 50)
    @NotNull(message = "O campo nome não pode ser nulo")
    @Size(max = 50, message = "O nome não pode conter mais de {max} carácteres.")
    private String nome;

    @Column(name = "MARCA", length = 50)
    @Size(max = 50, message = "A marca não pode conter mais de {max} carácteres.")
    private String marca;

    @Column(name = "ANO", length = 8)
    private Integer ano;

    @Column(name = "DESCRICAO", length = 150)
    @Size(max = 150, message = "O campo descrição não pode exceder {max} caracteres.")
    private String descricao;

    @Column(name = "IS_VENDIDO")
    private boolean vendido;

    @Column(name = "CREATED",updatable = false)
    private LocalDateTime creadted;

    @Column(name = "UPDATED")
    private LocalDateTime updated;

}
