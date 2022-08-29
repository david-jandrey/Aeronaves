package br.com.sonda.repository;

import br.com.sonda.model.Aeronave;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
public interface AeronaveRepository extends JpaRepository  <Aeronave, Long>{

    @Query("select count(*) as quantidade, substring(ano||'',1, 3)||'0' as decada  " +
            "from Aeronave a group by decada " +
            "order by decada asc")
    public List<Object> findCountAgruparDecada();

    @Query("select count(*) as quantidade, marca " +
            "from Aeronave a group by marca " +
            "order by marca asc")
    public List<Object> findCountAgruparMarca();

    @Query("select count(*) as quantidade " +
            " from Aeronave " +
            "where vendido = false")
    public Object findCountVendido();



}